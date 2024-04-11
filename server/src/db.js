require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');
const ActivitiesModel = require("./models/ActivitiesModel");
const CountriesModel = require("./models/CountriesModel");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

CountriesModel(sequelize);
ActivitiesModel(sequelize);

//Guardamos en constante los modelos
const Countries = sequelize.models.countries;
const Activities = sequelize.models.activities;


// Aca vendrian las relaciones de ambas tablas, creando la tabla intermedia "countries_activities"
Countries.belongsToMany(Activities, {through:"countries_activities"})
Activities.belongsToMany(Countries, {through:"countries_activities"})

module.exports = {
  Countries,
  Activities,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};