import nodemailer from 'nodemailer';
import config from '../config';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: config.email.service,
      auth: {
        user: config.email.user,
        pass: config.email.password
      }
    });
  }

  async send(to: string, subject: string, body: string): Promise<void> {
    const mailOptions = {
      from: config.email.from,
      to,
      subject,
      text: body,
      html: `<p>${body}</p>`
    };

    await this.transporter.sendMail(mailOptions);
  }
}