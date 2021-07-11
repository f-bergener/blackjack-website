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
  practiceModeTotalHands: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeHandsWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeTotalMoves: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  practiceModeCorrectMoves: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneyModeTotalHands: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneyModeHandsWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneyModeTotalMoves: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  moneyModeCorrectMoves: {
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

// User class methods
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username/password");
    throw error;
  }
  return user.generateToken();
};

User.findByToken = async (token) => {
  try {
    const payload = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(payload.id);
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
