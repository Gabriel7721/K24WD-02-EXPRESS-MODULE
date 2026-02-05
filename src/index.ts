import express, { type Request, type Response } from "express";
import { books, type Book } from "./models/Book.js";

const app = express();

app.use(express.json());

let nextId = 1; // re-assigned

app.get("/books", (req: Request, res: Response) => {
  res.status(200).json(books);
});

app.post("/books", (req: Request, res: Response) => {
  const { title, author, description, year } = req.body;

  if (!title || !author || !description || !year) {
    return res.status(400).json({ message: "Missing fields" });
  }
  const newBook: Book = {
    id: nextId++,
    title,
    author,
    description,
    year: Number(year),
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

const hostName = "192.168.160.49";
const port = 9999;

app.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
