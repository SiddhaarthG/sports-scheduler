"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Session.init(
    {
      sportId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      venue: DataTypes.STRING,
      attendees: DataTypes.STRING,
      additionalPlayers: DataTypes.INTEGER,
      canceled: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Session",
    }
  );
  return Session;
};
