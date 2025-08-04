import { Request, Response } from 'express';
import { CVService } from '../services/cv.service';

const cvService = new CVService();

export const queryCV = (req: Request, res: Response) => {
  try {
    const { question } = req.query;
    
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question parameter is required' });
    }

    const answer = cvService.query(question);
    res.json({ question, answer });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};