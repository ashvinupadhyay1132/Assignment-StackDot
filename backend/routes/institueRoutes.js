const express = require('express');
const router = express.Router();
const { registerInstitute, getInstitutes } = require('../controllers/instituteController');

router.post('/register', registerInstitute);
router.get('/', getInstitutes);

module.exports = router;