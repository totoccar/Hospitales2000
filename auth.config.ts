// auth.config.ts
import type { NextAuthConfig } from 'next-auth';
import { getPermission, hasPermission } from './src/lib/permissions';

if (!process.env.ROLE_CHANGE_KEY)
    throw new Error("ROLE_CHANGE_KEY not set")

export const authConfig = {
    pages: {
        signIn: '/login',  // Página de login
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            if (!isLoggedIn) {
                console.log("Not logged in")
                return nextUrl.pathname === '/login'
            } else {
                if (nextUrl.pathname === '/selectrole')
                    return true
                if (nextUrl.pathname === "/login" || nextUrl.pathname === '/403')
                    return Response.redirect(new URL('/', nextUrl));
                if (!auth.user.role) {
                    console.log("Role not set")
                    const newUrl = new URL('/selectrole', nextUrl);
                    const callback = nextUrl.searchParams.get('callbackUrl');
                    if (callback)
                        newUrl.searchParams.set('callbackUrl', callback)
                    else
                        newUrl.searchParams.set('callbackUrl', nextUrl.toString())
                    return Response.redirect(newUrl)
                }
                if (nextUrl.pathname === '/')
                    return true;

                const permission = getPermission(nextUrl.pathname)
                if (!permission) {
                    console.error("Permission not found for", nextUrl.pathname)
                    return Response.redirect(new URL('/403', nextUrl));
                }
                if (!hasPermission(auth.user.role, permission)) {
                    console.log(`User with role ${auth.user.role} tried to access ${permission}`);
                    return Response.redirect(new URL('/403', nextUrl));
                }
            }
            return true

        },

        session({ session, token, user }) {
            session.user.role = token.role
            session.user.dni = token.dni
            return session
        },
        async jwt({ token, user, account, profile, trigger, session }) {
            if (trigger === 'update' && session?.user?.role) {
                if (!session.roleChangeKey || session.roleChangeKey !== process.env.ROLE_CHANGE_KEY) {
                    console.error("Invalid role change key")
                    return token
                }
                token.role = session.user.role
            }
            if (user) {
                token.dni = user.dni
                token.role = user.role
            }
            return token
        },
        redirect({ url, baseUrl }) {
            const urlObject = new URL(url)
            const callbackUrl = urlObject.searchParams.get('callbackUrl')
            if (callbackUrl) {
                url = callbackUrl
            }

            // default behavior
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl

        }

    },
    providers: [],

} satisfies NextAuthConfig;