// src/app/password/api/send.ts                             
import { EmailTemplate } from '@/components/email-template';
import Resend from 'next-auth/providers/resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const data = await resend.sendEmail({
    from: `${process.env.FROM_EMAIL}`,
    to: `${process.env.TO_EMAIL}`,
    subject: "🎉New submission to your contact form!",
    html: "",
    react: EmailTemplate({ name, email })
});