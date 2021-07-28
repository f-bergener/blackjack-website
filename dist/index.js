"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", require("./api"));
app.use("/auth", require("./auth"));
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../public/index.html"), function (error) {
        if (error) {
            res.status(500).send(error);
        }
    });
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("App listening on port http://localhost:" + PORT);
});
