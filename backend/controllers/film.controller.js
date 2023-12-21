const FilmModel = require('../models/film.model');

module.exports.getFilm = async (req, res) => {

    let page = req.query.page || 1;
    // Je récupère ma clé d'API dans un fichier .env
    const apiKey = process.env.IMDB_API_KEY;

    // Je configure l'URL avec la clé à l'intérieur
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&with_genres=12&language=fr`;

    const response = await fetch(url);
    const data = await response.json();
    
    //

    const films = data.results;
    const mesFilms = [];

    console.log(`nb films : ${films.length}`)

    films.forEach(film => {
        mesFilms.push(new FilmModel(film));
    });



    // Ce que j'affiche à l'utilisateur
    res.json(mesFilms)
};