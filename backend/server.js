const express = require('express');
const mongoose = require('mongoose');
const instituteRoutes = require('./routes/institueRoutes');
const boardRoutes = require('./routes/boardRoutes');
const seedBoards = require('./config/seedData');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

mongoose.connect('mongodb://127.0.0.1:27017/institute_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('Connected to MongoDB');
  await seedBoards();
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.use('/api/institutes', instituteRoutes);
app.use('/api/boards', boardRoutes);