const express = require('express');
const router = express.Router();

const {getRandom} = require('../../controllers/random.controller')

router.get('/', getRandom);


module.exports = router;