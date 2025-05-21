const express = require('express');
const router = express.Router();
const { getBoards } = require('../controllers/boardController');

router.get('/', getBoards);

module.exports = router;