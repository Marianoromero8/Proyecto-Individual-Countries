const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        validate: {
            len: [3],
        }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 168
        }
    },
    season: {
        type: DataTypes.ENUM("Summer", "Autum", "Winter", "Spring"),
        allowNull: false,
    },
  },
  { 
    timestamps: false,
    tableName: 'activities', 
}
);
};