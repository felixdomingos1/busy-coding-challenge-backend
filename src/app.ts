import express from 'express';
import cors from 'cors';
import cvRoutes from './routes/cv.routes';
import emailRoutes from './routes/email.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/cv', cvRoutes);
app.use('/api/email', emailRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});