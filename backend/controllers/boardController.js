const Board = require('../models/Board');

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ active: true });
    res.status(200).json({
      success: true,
      data: boards
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};