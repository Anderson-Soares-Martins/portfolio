import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Configurar o transporte para o Nodemailer
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Seu e-mail 
      pass: process.env.EMAIL_PASS, // Sua senha ou App Password
    },
  });

  // Configuração do conteúdo do e-mail
  const mailOptions = {
    from: email,
    to: 'andersoaresmartins@gmail.com',
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
  }
}
