require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRESSQL_USER,
    password: process.env.POSTGRESSQL_PASSWORD,
    database: process.env.POSTGRESSQL_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
}