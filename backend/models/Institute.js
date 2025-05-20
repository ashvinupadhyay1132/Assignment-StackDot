const mongoose = require('mongoose');

const instituteSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Playhouse', 'School', 'College', 'Competitive Exam Center'],
    required: true
  },
  ageGroup: {
    type: String,
    required: function() { return this.type === 'Playhouse'; }
  },
  activities: {
    type: [String],
    required: function() { return this.type === 'Playhouse'; }
  },
  board: {
    type: String,
    required: function() { return this.type === 'School'; }
  },
  medium: {
    type: String,
    required: function() { return this.type === 'School'; }
  },
  classCategory: {
    type: String,
    enum: ['Pre-Primary', 'Primary', 'Secondary', 'Higher Secondary'],
    required: function() { return this.type === 'School'; }
  },
  standards: [{
    standard: String,
    subjects: [String]
  }],
  university: {
    type: String,
    required: function() { return this.type === 'College'; }
  },
  degreeType: {
    type: String,
    enum: ['Bachelor\'s', 'Master\'s', 'Diploma'],
    required: function() { return this.type === 'College'; }
  },
  examType: {
    type: String,
    required: function() { return this.type === 'Competitive Exam Center'; }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Institute', instituteSchema);