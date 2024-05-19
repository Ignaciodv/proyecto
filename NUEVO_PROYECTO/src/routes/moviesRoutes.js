const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require('multer');
const path = require('path');  // Agrega esta línea


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Renombrar el archivo con una marca de tiempo
    }
});

const upload = multer({ storage: storage });

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);
router.get("/movies/add", moviesController.add);
router.post("/movies/create", upload.single('imagenPelicula'), moviesController.create);
router.get('/movies/edit/:id', moviesController.edit);
router.put("/movies/update/:id", upload.single('imagenPelicula'), moviesController.update);
router.get("/movies/delete/:id", moviesController.delete);
router.put("/movies/delete/:id", moviesController.destroy);
router.get('/movies/drama', moviesController.drama);
router.get('/movies/cienciaFiccion', moviesController.cienciaFiccion);
router.get('/movies/aventuras', moviesController.aventuras);

module.exports = router;
