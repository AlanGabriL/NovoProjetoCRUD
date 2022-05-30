const { Model, DataTypes } = require('sequelize');
const db = require('../config/database');

class Anotacao extends Model {}

Anotacao.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_ready: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    db,
    modelName: 'anotacoes',
    timestamps: false,
  }
);
