const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded( {extended: false}));

// Créer un middleware
app.use((req, res, next) => {
    console.log('Requête reçue');
    next();
});

// Définir une route / localhost:3000
app.get('/', (req, res) => {
    res.send('Hey');
});

app.use('/api/categories', require('./routes/api/category.route'));
app.use('/api/film', require('./routes/api/film.route'));

app.listen(port, () => {
    console.log("app démarrée");
});
