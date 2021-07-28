"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("sequelize"), Sequelize = _a.Sequelize, DataTypes = _a.DataTypes;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var db = require("./db");
var User = db.define("user", {
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
    handsPushed: {
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
User.prototype.correctPassword = function (password) {
    return bcrypt.compare(password, this.password);
};
User.prototype.generateToken = function () {
    try {
        return jwt.sign({ id: this.id }, process.env.JWT);
    }
    catch (error) {
        console.error(error);
    }
};
// User class methods
User.authenticate = function (login) {
    return __awaiter(this, void 0, void 0, function () {
        var user, _a, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, this.findOne({ where: { email: login.email } })];
                case 1:
                    user = _b.sent();
                    _a = !user;
                    if (_a) return [3 /*break*/, 3];
                    return [4 /*yield*/, user.correctPassword(login.password)];
                case 2:
                    _a = !(_b.sent());
                    _b.label = 3;
                case 3:
                    if (_a) {
                        error = Error("Incorrect email/password");
                        throw error;
                    }
                    return [2 /*return*/, user.generateToken()];
            }
        });
    });
};
User.findByToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, jwt.verify(token, process.env.JWT)];
            case 1:
                payload = _a.sent();
                return [4 /*yield*/, User.findAll({
                        where: { id: payload.id },
                        // attributes: [
                        //   "email",
                        //   "username",
                        //   "totalHands",
                        //   "handsWon",
                        //   "handsPushed",
                        //   "totalMoves",
                        //   "correctMoves",
                        //   "bankroll",
                        // ],
                    })];
            case 2:
                user = _a.sent();
                if (!user) {
                    throw "error";
                }
                if (payload.id && user) {
                    return [2 /*return*/, user];
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                throw Error("Invalid token");
            case 4: return [2 /*return*/];
        }
    });
}); };
// Hook
var hashPassword = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!user.changed("password")) return [3 /*break*/, 2];
                _a = user;
                return [4 /*yield*/, bcrypt.hash(user.password, 8)];
            case 1:
                _a.password = _b.sent();
                _b.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
