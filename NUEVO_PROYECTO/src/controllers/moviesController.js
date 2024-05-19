const db = require('../database/models');
const path = require('path');
const moment = require('moment');

const Movies = db.Movie;
const Genres = db.Genre;

const moviesController = {
    'list': (req, res) => {
        Movies.findAll({
            include: ['genre']
        })
        .then(movies => {
            res.render('moviesList.ejs', { movies });
        })
        .catch(error => res.send(error));
    },

    'detail': (req, res) => {
        Movies.findByPk(req.params.id, {
            include: ['genre']
        })
        .then(movie => {
            res.render('moviesDetail.ejs', { movie });
        })
        .catch(error => res.send(error));
    },

    'drama': (req, res) => {
        Movies.findAll({
            include: ['genre'],
            where: { genre_id: 3 }
        })
        .then(movies => {
            res.render('moviesDrama.ejs', { movies });
        })
        .catch(error => res.send(error));
    },

    'cienciaFiccion': (req, res) => {
        Movies.findAll({
            include: ['genre'],
            where: { genre_id: 5 }
        })
        .then(movies => {
            res.render('moviesCienciaFiccion.ejs', { movies });
        })
        .catch(error => res.send(error));
    },

    'aventuras': (req, res) => {
        Movies.findAll({
            include: ['genre'],
            where: { genre_id: 8 }
        })
        .then(movies => {
            res.render('moviesAventuras.ejs', { movies });
        })
        .catch(error => res.send(error));
    },

    add: function (req, res) {
        Genres.findAll()
        .then(allGenres => {
            res.render(path.resolve(__dirname, '..', 'views', 'moviesAdd'), { allGenres });
        })
        .catch(error => res.send(error));
    },

    create: function (req, res) {
        Movies.create({
            title: req.body.title,
            info: req.body.info,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id,
            image: req.file ? `/uploads/${req.file.filename}` : null // Guardar la ruta de la imagen
        })
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => res.send(error));
    },


    edit: function (req, res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId, { include: ['genre'] });
        let promGenres = Genres.findAll();
        Promise.all([promMovies, promGenres])
            .then(([Movie, allGenres]) => {
                Movie.release_date = moment(Movie.release_date).format('L');
                res.render(path.resolve(__dirname, '..', 'views', 'moviesEdit'), { Movie, allGenres });
            })
            .catch(error => res.send(error));
    },

    update: function (req, res) {
        let movieId = req.params.id;
        Movies.findByPk(movieId)
            .then(movie => {
                if (!movie) {
                    return res.status(404).send('Movie not found');
                }
    
                let updatedData = {
                    title: req.body.title,
                    info: req.body.info,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                };
    
                // Verificar si se cargó un archivo de imagen
                if (req.file) {
                    updatedData.image = `/uploads/${req.file.filename}`;
                }
    
                // Actualizar los datos de la película
                movie.update(updatedData)
                    .then(() => {
                        res.redirect('/movies');
                    })
                    .catch(error => res.send(error));
            })
            .catch(error => res.send(error));
    },


    delete: function(req, res){
        let movieID = req.params.id;
        Movies.findByPk(movieID)
        .then(Movie=> {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
            .catch(error => res.send(error))
    },

    destroy: function (req, res) {
        let movieID = req.params.id;
        Movies.destroy({ where: { id: movieID } })
        .then(() => {
            res.redirect('/movies');
        })
        .catch(error => res.send(error));
    }
}

module.exports = moviesController;
