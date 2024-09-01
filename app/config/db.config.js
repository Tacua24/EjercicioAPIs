const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.user, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions:{
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
 
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.Departamento = require('../models/departamento.model.js')(sequelize, Sequelize);
db.Empleado = require('../models/empleado.model.js')(sequelize, Sequelize);
db.Cliente = require('../models/cliente.model.js')(sequelize, Sequelize);
db.Proveedor = require('../models/proveedor.model.js')(sequelize, Sequelize);
db.Producto = require('../models/producto.model.js')(sequelize, Sequelize);
db.factura = require('../models/factura.model.js')(sequelize, Sequelize);
db.factura_detalle = require('../models/factura_detalle.model.js')(sequelize, Sequelize);

module.exports = db;