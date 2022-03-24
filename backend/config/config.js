const { verify } = require('jsonwebtoken');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}