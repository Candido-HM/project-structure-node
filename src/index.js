require('dotenv').config();

const app = require('./app');
const bodyParser = require('body-parser');

const db = require('./models/index');
const { logger } = require('./utils/logger');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const PORT = process.env.SR_PORT;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Conexion a la base de datos');
        app.listen(PORT, (err) => {
            if (err) {
                return console.error('Failed', err);
            }
            logger.info(`Servidor ejecutandose en el puerto ${PORT}`);
            console.log(`Servidor iniciado en el puerto; ${PORT}`);
            return app;
        });
    })
    .catch((err) => console.log('Unable to connect to the database:', err));
