const express = require('express');
const connectDB = require('./config/db');
const app = express();

require('dotenv').config();
connectDB();

app.use(express.json()); // For body parsing
app.get('/', (req, res) => res.send('API Running'));

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
