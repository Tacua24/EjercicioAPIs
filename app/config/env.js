const env = {
    database: 'apis_qnhe',
    user: 'apis_qnhe_user',
    password: '4P4N5mtaW1sOEo8ySSOk5NOzZgeinjhg',
    host: 'dpg-cr6jrqlds78s73butrqg-a.oregon-postgres.render.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  };
  
  module.exports = env;
  