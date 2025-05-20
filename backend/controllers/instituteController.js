const Institute = require('../models/Institute');

exports.registerInstitute = async (req, res) => {
  try {
    const { type } = req.body;
    
    if (type === 'School') {
      if (!req.body.board || !req.body.medium || !req.body.classCategory) {
        throw new Error('Board, medium and class category are required for Schools');
      }
      if (!req.body.standards || req.body.standards.length === 0) {
        throw new Error('At least one standard with subjects is required for Schools');
      }
    } else if (type === 'College') {
      if (!req.body.university || !req.body.degreeType) {
        throw new Error('University and degree type are required for Colleges');
      }
    } else if (type === 'Competitive Exam Center') {
      if (!req.body.examType) {
        throw new Error('Exam type is required for Competitive Exam Centers');
      }
    } else if (type === 'Playhouse') {
      if (!req.body.ageGroup || !req.body.activities) {
        throw new Error('Age group and activities are required for Playhouses');
      }
    }

    const institute = new Institute(req.body);
    await institute.save();
    
    res.status(201).json({
      success: true,
      data: institute
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institute.find();
    res.status(200).json({
      success: true,
      data: institutes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};