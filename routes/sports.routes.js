const express = require('express');
const router = express.Router();
const sports = require('../controllers/sports.controller');

router.get('/', sports.list);
router.post('/', sports.create);

module.exports = router;
