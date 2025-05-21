const mongoose = require('mongoose');
const Board = require('../models/Board');

async function seedBoards() {
  try {
    const count = await Board.countDocuments();
    if (count > 0) {
      console.log('Boards already seeded');
      return;
    }

    const boardsData = [
      {
        name: 'G.S.E.B',
        description: 'Gujarat Secondary and Higher Secondary Education Board',
        mediums: ['English', 'Hindi', 'Gujarati'],
        standards: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      {
        name: 'C.B.S.E',
        description: 'Central Board of Secondary Education',
        mediums: ['English', 'Hindi', 'Gujarati'],
        standards: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      {
        name: 'GTU',
        description: 'Gujarat Technological University',
        mediums: ['English', 'Gujarati'],
        standards: ['UG', 'PG']
      }
    ];

    await Board.insertMany(boardsData);
    console.log('Boards seeded successfully');
  } catch (error) {
    console.error('Error seeding boards:', error);
  }
}

module.exports = seedBoards;