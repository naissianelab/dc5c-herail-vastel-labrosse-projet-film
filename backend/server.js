const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log("app démarrée");
});


app.get('/categories', async (req, res) => {
    // Je récupère ma clé d'API dans un fichier .env
    const apiKey = process.env.IMDB_API_KEY;

    // Je configure l'URL avec la clé à l'intérieur
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`;

    const response = await fetch(url);
    const genres = await response.json();
    
    // Ce que j'affiche à l'utilisateur
    res.json(genres)
});