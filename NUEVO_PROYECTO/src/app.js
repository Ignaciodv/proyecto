const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const multer = require('multer');
const fs = require('fs');

const app = express();

// Configuración de multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Renombrar el archivo con una marca de tiempo para evitar conflictos
    }
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Configuración de vistas
app.set('views', path.resolve(__dirname, './views'));
app.set("view engine", "ejs");

app.listen("3004", () => console.log("Servidor corriendo en el puerto 3004"));

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')));


// Rutas
const indexRouter = require("./routes/index");
const movieRoutes = require('./routes/moviesRoutes');
app.get('/contacto', (req, res) => {
    res.render('contacto.ejs');
});


app.use("/", indexRouter);
app.use(movieRoutes);

