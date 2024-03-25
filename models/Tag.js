const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false, 
    autoIncrement: true,
  },

  {
    tag_name: Datatypes.STRING,
    allowNull: false,
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
