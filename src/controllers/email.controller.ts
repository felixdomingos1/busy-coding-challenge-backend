import { Request, Response } from 'express';
import { EmailService } from '../services/email.service';

const emailService = new EmailService();

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { to, subject, body } = req.body;

    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await emailService.send(to, subject, body);
    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
};