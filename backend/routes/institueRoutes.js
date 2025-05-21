const express = require('express');
const router = express.Router();
const { 
  registerInstitute, 
  getInstitutes, 
  getStandardsForCategory,
  getSubjectsForStandard,
  getMediumsForBoard
} = require('../controllers/instituteController');

router.post('/register', registerInstitute);
router.get('/', getInstitutes);
router.get('/standards/:classCategory', getStandardsForCategory);
router.get('/subjects/:classCategory/:standard', getSubjectsForStandard);
router.get('/mediums/:boardName', getMediumsForBoard);

module.exports = router;