const db = require('../database/models');
const path = require('path')
const moment = require('moment');


//Acá tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll({
            include: ['genre']
        })
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },

    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id,
            {
                include : ['genre']
            })
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },

    'drama': (req, res) => {
        db.Movie.findAll({
          include: ['genre'],
          where: {
            genre_id: 3 // Filtra por películas de género terror (ID 123)
          }
        })
        .then(movies => {
          res.render('moviesDrama.ejs', { movies });
        });
      },

      'cienciaFiccion': (req, res) => {
        db.Movie.findAll({
          include: ['genre'],
          where: {
            genre_id: 5 // Filtra por películas de género terror (ID 123)
          }
        })
        .then(movies => {
          res.render('moviesCienciaFiccion.ejs', { movies });
        });
      },

      'aventuras': (req, res) => {
        db.Movie.findAll({
          include: ['genre'],
          where: {
            genre_id: 8 // Filtra por películas de género terror (ID 123)
          }
        })
        .then(movies => {
          res.render('moviesAventuras.ejs', { movies });
        });
      },


    //Acá dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        let promGenres = Genres.findAll();
        
        Promise
        .all([promGenres])
        .then(([allGenres]) => {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesAdd'), {allGenres})})
        .catch(error => res.send(error))
    },

    create: function (req,res) {
        Movies.create(
            {
                title: req.body.title,
                info: req.body.info,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/movies')})
        .catch(error => res.send(error))
    },

    edit: function(req,res) {
        let movieId = req.params.id;
        let promMovies = Movies.findByPk(movieId,{include: ['genre']});
        let promGenres = Genres.findAll();
        Promise
        .all([promMovies, promGenres])
        .then(([Movie, allGenres]) => {
            Movie.release_date = moment(Movie.release_date).format('L');
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesEdit'), {Movie,allGenres})})
        .catch(error => res.send(error))
    },

    update: function (req,res) {
        let movieId = req.params.id;
        Movies.update(
            {
                title: req.body.title,
                info: req.body.info,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },

    delete: function(req, res){
        let movieID = req.params.id;
        Movies.findByPk(movieID)
        .then(Movie=> {
            return res.render(path.resolve(__dirname, '..', 'views',  'moviesDelete'), {Movie})})
            .catch(error => res.send(error))
    },

    destroy: function(req, res){
        let movieID = req.params.id;
        Movies.destroy({where:{id: movieID}})
        .then(() =>{return res.redirect('/movies')})
        .catch(error => res.send(error));
    }
                           
}

module.exports = moviesController;