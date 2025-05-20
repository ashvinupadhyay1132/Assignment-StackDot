const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  active: {
    type: Boolean,
    default: true
  },
  mediums: [{
    type: String,
    required: true
  }],
  standards: [{
    type: String,
    required: true
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Board', boardSchema);