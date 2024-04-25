const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// const db = require('./models/index');
// const orm = require('./models');

//Ruta para cargar archivos de rutas

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// const PORT = process.env.PORT || 3000;

// try {
//     app.listen(PORT, () => {
//         console.log(`Servidor iniciado en el puerto ${PORT}`);
//     });
// } catch (error) {
//     console.log(`Error al iniciar el servidor: ${error.message}`);
// }

// app.use('/api', project_routes)

module.exports = app;