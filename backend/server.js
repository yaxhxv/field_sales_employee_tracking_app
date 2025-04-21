import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 
 import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running');
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
