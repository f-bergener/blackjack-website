const { Sequelize, DataTypes } = require("sequelize");
const db = require("./db");

const User = db.define("user", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  practiceModeTotalHands: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeHandsWon: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeTotalMoves: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeCorrectMoves: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneuModeTotalHands: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneuModeHandsWon: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneuModeTotalMoves: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneuModeCorrectMoves: {
    type: DataTypes.NUMBER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  bankroll: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: 5000,
    validate: {
      min: 0,
    },
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});
