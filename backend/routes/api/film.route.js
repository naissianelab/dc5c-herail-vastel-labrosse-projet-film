const express = require('express');
const router = express.Router();

const {getFilm} = require('../../controllers/film.controller')

router.get('/', getCategories);


module.exports = router;