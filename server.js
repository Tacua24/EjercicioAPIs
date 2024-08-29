const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/config/db.config.js');

// Sincronizar base de datos
// Usar force: true solo en desarrollo, ¡esto eliminará las tablas existentes!
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}).catch(err => {
  console.error('Failed to sync database:', err.message);
});

const router = require('./app/routers/router.js');

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Configuración de body-parser
app.use(bodyParser.json());

// Rutas
app.use('/', router);
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Crear un servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
