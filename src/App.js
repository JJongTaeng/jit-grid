"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Name_1 = __importDefault(require("@/Name"));
const App = () => react_1.default.createElement("h1", null,
    "Hello ",
    react_1.default.createElement(Name_1.default, null));
exports.default = App;
