const CategoryModel = require('../models/category.model');

module.exports.getCategories = async (req, res) => {
    // Je récupère ma clé d'API dans un fichier .env
    const apiKey = process.env.IMDB_API_KEY;

    // Je configure l'URL avec la clé à l'intérieur
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr`;

    const response = await fetch(url);
    const genres = await response.json();
    
    // Ce que j'affiche à l'utilisateur
    res.json(genres)
};