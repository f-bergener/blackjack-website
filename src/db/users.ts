const { Sequelize, DataTypes } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalHands: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  handsWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  totalMoves: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  correctMoves: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  bankroll: {
    type: DataTypes.INTEGER,
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

module.exports = User;

// User instance methods
User.prototype.correctPassword = function (password: String) {
  return bcrypt.compare(password, this.password);
};

User.prototype.generateToken = function () {
  try {
    return jwt.sign({ id: this.id }, process.env.JWT);
  } catch (error) {
    console.error(error);
  }
};

interface LogIn {
  email: String;
  password: String;
}

// User class methods
User.authenticate = async function (login: LogIn) {
  const user = await this.findOne({ where: { email: login.email } });
  if (!user || !(await user.correctPassword(login.password))) {
    const error = Error("Incorrect email/password");
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async (token: String) => {
  try {
    const payload = await jwt.verify(token, process.env.JWT);
    const user = await User.findAll({
      where: { id: payload.id },
      attributes: [
        "email",
        "username",
        "practiceModeTotalHands",
        "practiceModeHandsWon",
        "practiceModeTotalMoves",
        "practiceModeCorrectMoves",
        "moneyModeTotalHands",
        "moneyModeHandsWon",
        "moneyModeTotalMoves",
        "moneyModeCorrectMoves",
        "bankroll",
        "isAdmin",
      ],
    });
    if (!user) {
      throw "error";
    }
    if (payload.id && user) {
      return user;
    }
  } catch (error) {
    throw Error("Invalid token");
  }
};

// Hook
const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);

export {};
