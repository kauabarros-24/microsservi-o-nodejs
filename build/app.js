"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', 'http://localhost:8000', 'http://localhost:4200']
}));
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api', (req, res) => {
    res.send('Hello API');
});
app.listen(8000);
console.log('Listenig to port:8000');