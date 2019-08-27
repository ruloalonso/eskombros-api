const express = require('express');
const router = express.Router();
const contenders = require('../controllers/contenders.controller');

router.get('/', contenders.list);
router.post('/', contenders.create);

module.exports = router;
