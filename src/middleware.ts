// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});

  const { pathname } = req.nextUrl;

  // Rutas que no requieren autenticación
  const publicRoutes = ['/login', '/api/auth'];

  // Si la ruta es pública y el usuario ya está autenticado, redirigir al home
  if (token && pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Si la ruta es pública y el usuario no está autenticado, permitir acceso
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Si no existe token, redirigir al login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Continuar si el usuario está autenticado
  return NextResponse.next();
}

// Aplicar el middleware a todas las rutas
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
