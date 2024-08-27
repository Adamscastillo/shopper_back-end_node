import express from 'express';
import dotenv from 'dotenv';
import imageRoutes from './routes/imageRoutes';

dotenv.config();
if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not defined in the environment.');
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/images', imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
