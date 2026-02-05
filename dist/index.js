import express, {} from "express";
import { books } from "./models/Book.js";
const app = express();
app.use(express.json());
let nextId = 4; // re-assigned
app.get("/books", (req, res) => {
    res.status(200).json(books);
});
app.post("/books", (req, res) => {
    const { title, author, description, year } = req.body;
    if (!title || !author || !description || !year) {
        return res.status(400).json({ message: "Missing fields" });
    }
    const newBook = {
        id: nextId++,
        title,
        author,
        description,
        year: Number(year),
    };
    books.push(newBook);
    res.status(201).json(newBook);
});
app.get("/books/:id", (req, res) => {
    const id = Number(req.params.id); // "1"
    const book = books.find((b) => b.id === id);
    if (!book)
        return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
});
app.patch("/books/:id", (req, res) => {
    const id = Number(req.params.id); // "1"
    const book = books.find((b) => b.id === id);
    if (!book)
        return res.status(404).json({ message: "Book not found" });
    const { title, author, description, year } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.year = Number(year) || book.year;
    res.status(200).json(book);
});
app.delete("/books/:id", (req, res) => {
    const id = Number(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === id);
    if (bookIndex === -1)
        return res.status(404).json({ message: "Book not found" });
    books.splice(bookIndex, 1);
    res.status(204).send();
});
const hostName = "192.168.160.49";
const port = 9999;
app.listen(port, hostName, () => {
    console.log(`Server is running at http://${hostName}:${port}`);
});
//# sourceMappingURL=index.js.map