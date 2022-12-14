"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const message_1 = __importDefault(require("../controllers/message"));
const getAllMessages_1 = __importDefault(require("../controllers/getAllMessages"));
const router = express_1.default.Router();
router.post('/message', message_1.default);
router.get('/allmessages', getAllMessages_1.default);
exports.default = router;
