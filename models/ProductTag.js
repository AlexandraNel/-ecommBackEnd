const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class ProductTag extends Model { }

//table utilised for many to many relationship as 'through' ie. junction model w/ foreign keys
//this is a 'junction' table for many to many relationships
ProductTag.init(
  {
    // primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },

    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
