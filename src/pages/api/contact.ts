import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { site } from "../../content/site";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ message: "Missing fields" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: site.email,
      subject: `Portfolio contact — ${name}`,
      text: `${message}\n\n— ${name} (${email})`
    });
    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("contact form error", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
};
