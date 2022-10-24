import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostForm({ setBooks }) {
  const navigate = useNavigate();

  const prevState = {
    title: "",
    author: "",
    publisher: "",
    genre: "",
  };

  const [formData, setFormData] = useState(prevState);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ...formData, books: [] }),
    })
      .then((r) => r.json())
      .then((data) => {
        setBooks((books) => [...books, data])
        navigate("/home")
      });

    setFormData(prevState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a book</h1>

      <div>
        <label htmlFor="title">Title:</label>
        <input name="title" value={formData.name} onChange={handleChange} />
        <br />
        <label htmlFor="author">Author:</label>
        <input name="author" value={formData.name} onChange={handleChange} />
        <br />
        <label htmlFor="publisher">Publisher:</label>
        <input name="publisher" value={formData.name} onChange={handleChange} />
        <br />
        <label htmlFor="genre" s>
          Genre:
        </label>
        <input name="genre" value={formData.name} onChange={handleChange} />
      </div>
      <br />

      <button>
        Submit
      </button>
    </form>
  );
}

export default PostForm;
