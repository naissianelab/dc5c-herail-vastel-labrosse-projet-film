const RandomModel = require('../models/random.model');

module.exports.getRandom = async (req, res) => {

    // Je récupère ma clé d'API dans un fichier .env
    const apiKey = process.env.IMDB_API_KEY;

    const totalPages = 100; // Nombre total de pages dans l'API TMDb (chiffre approximatif)

    // Générer un numéro de page aléatoire entre 1 et totalPages
    const randomPage = Math.floor(Math.random() * totalPages) + 1;

    // URL pour récupérer une liste de films à partir de TMDb
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomPage}&language=fr`;

    // Effectuer la requête HTTP pour obtenir la liste de films
    const response = await fetch(url);
    const data = await response.json();

    // Sélectionner un film aléatoire parmi la liste des résultats
    const randomMovieIndex = Math.floor(Math.random() * data.results.length);
    const randomMovie = data.results[randomMovieIndex];

    // Enregistrer le film aléatoire dans la base de données
    const newRandomMovie = new RandomModel(randomMovie);
    //await newRandomMovie.save();

    // Ce que j'affiche à l'utilisateur
    res.json(newRandomMovie)
};