const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Ruta para cargar el archivo de rutas

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;