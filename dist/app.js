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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookModel_1 = require("./app/model/bookModel");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/api/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const data = yield bookModel_1.Books.create(body);
    res.json({
        success: true,
        message: "Book created successfully",
        data
    });
}));
app.get('/api/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield bookModel_1.Books.find();
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data
    });
}));
app.get('/api/books/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const booksId = req.params.bookId;
    const data = yield bookModel_1.Books.findById(booksId);
    res.json({
        success: true,
        message: "Books retrieved successfully",
        data
    });
}));
app.put('/api/books/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const updatebody = req.body;
    const data = yield bookModel_1.Books.findByIdAndUpdate(id, updatebody, { new: true });
    res.json({
        success: true,
        message: "Book updated successfully",
        data
    });
}));
app.delete('/api/books/:bookId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const data = yield bookModel_1.Books.findByIdAndDelete(id, { new: true });
    res.json({
        success: true,
        message: "Books deleted successfully",
        data: null
    });
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Assignment-3');
}));
exports.default = app;
