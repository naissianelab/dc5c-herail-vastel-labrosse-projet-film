const CategoryModel = require('../models/random.model');

module.exports.getCategories = async (req, res) => {
    // Je récupère ma clé d'API dans un fichier .env
    const apiKey = process.env.IMDB_API_KEY;

    // Je configure l'URL avec la clé à l'intérieur
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=12&language=fr`;

    const response = await fetch(url);
    const genres = await response.json();
    
    // Ce que j'affiche à l'utilisateur
    res.json(genres)
};