"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require('dotenv').config();
const route_1 = __importDefault(require("./routes/route"));
const app = (0, express_1.default)();
console.log('APP...');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', route_1.default);
mongoose_1.default.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log('Database is running'))
    .catch(() => console.log('Database is not running'));
app.listen(process.env.PORT, () => {
    console.log(`AdmolFolio backend is running on ${process.env.PORT}`);
});
