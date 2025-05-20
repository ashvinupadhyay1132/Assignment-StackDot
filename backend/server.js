const express = require('express');
const mongoose = require('mongoose');
const instituteRoutes = require('./routes/institueRoutes');
const boardRoutes = require('./routes/boardRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/institute_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.use('/api/institutes', instituteRoutes);
app.use('/api/boards', boardRoutes);