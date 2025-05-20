const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).json({
      success: true,
      data: board
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

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