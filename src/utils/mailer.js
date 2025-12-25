// SATVertex/SATVertex-backend/src/utils/mailer.js

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendContactEmail(contact) {
  if (!process.env.CONTACT_INBOX) {
    return
  }

  const mailOptions = {
    from: `"SATVertex Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_INBOX,
    subject: `New contact: ${contact.subject || 'No subject'}`,
    text: `
New contact message from SATVertex portfolio:

Name: ${contact.name}
Email: ${contact.email}
Subject: ${contact.subject || '—'}

Message:
${contact.message}

Meta:
IP: ${contact.meta?.ip || 'N/A'}
User-Agent: ${contact.meta?.userAgent || 'N/A'}
    `.trim(),
  }

  await transporter.sendMail(mailOptions)
}
