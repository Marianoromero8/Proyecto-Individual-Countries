const { DataTypes } = require('sequelize');
const { Hooks } = require('sequelize/lib/hooks');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('countries', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flags: {
      type: DataTypes.STRING,
      allowNull: true
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.DOUBLE,
      allowNull: true,

    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  { 
    timestamps: false,
    tableName: 'countries',
  },
);

};