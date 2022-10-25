import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PostForm from "./pages/PostForm";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((r) => r.json())
      .then((books) => setBooks(books));
  }, []);

  function handleDeleteBook(deletedBook) {
    const updatedBooks = books.filter((book) => book.id !== deletedBook.id);
    setBooks(updatedBooks);
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/add" element={<PostForm setBooks={setBooks} />} />

        <Route
          exact
          path="/home"
          element={<Home books={books} handleDeleteBook={handleDeleteBook} />}
        />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
