import React, { useEffect, useState } from "react";
import Book from "./Book";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9292/books/`)
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);

  const listOfBooks = books.map((books) => {
    console.log(books)
    return (
      <div key={books.id}>
        <h2>Title: {books.title}</h2>
        <h2>Author: {books.author}</h2>
        <h2>Genre: {books.genre}</h2>
        <h2>Publisher: {books.publisher}</h2>
      </div>
    );
  });
  function handleDeleteBook(deletedBook) {
    const updatedBooks = books.filter((book) => book.id !== deletedBook.id);
    setBooks(updatedBooks);
  }
  return (
    <div>
      <h1>List of Books</h1>
      <div>{listOfBooks}</div>
      <Book onHandleDelete={handleDeleteBook}/>
    </div>
  );
}

export default Home;
