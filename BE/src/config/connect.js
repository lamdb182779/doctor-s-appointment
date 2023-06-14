require('dotenv').config()
const { Sequelize } = require('sequelize');


const DB_CONNECTION = process.env.DB_CONNECTION
const DB_HOST = process.env.DB_HOST
const DB_USERNAME = process.env.DB_USERNAME
const DB_DATABASE = process.env.DB_DATABASE
const DB_PASSWORD = process.env.DB_PASSWORD

/* // get the client
// create the connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  database: DB_DATABASE
});

// simple query
connection.query(
    'SELECT * FROM `USERS` WHERE `id` <= 10',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
    }
  );
module.exports = connection */

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_CONNECTION,
  logging: false
});

let conn = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = conn