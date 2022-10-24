import React, { useState } from "react";

function PostForm({ setBook }) {
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

    fetch("http://http://localhost:9292/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ ...formData, books: [] }),
    })
      .then((r) => r.json())
      .then((data) => setBook((books) => [...books, data]));

    setFormData(prevState);
  };
  const divStyle = {
    borderStyle: "solid",
    padding: "10px",
    marginLeft: 6,
  };
  const labelStyle = {
    borderStyle: "solid",
    backgroundColor: "yellow",
    padding: "10px",
    marginLeft: -3,
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "block",
        divStyle

      }}
    >
      <h1 style={{ marginBottom: 50 }}>Create a book</h1>
      <ul style={{ marginBottom: 50 }}></ul>
      <div>
        <label
          htmlFor="title"
          style={{
            labelStyle
          }}
        >
          Title:
        </label>
        <input
          name="title"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <br />
        <label
          htmlFor="author"
          style={{
            labelStyle
          }}
        >
          Author:
        </label>
        <input
          name="author"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <br />
        <label
          htmlFor="publisher"
          style={{
            labelStyle
          }}
        >
          Publisher:
        </label>
        <input
          name="publisher"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
        <br/>
        <label
          htmlFor="genre"
          style={{
            labelStyle
          }}
        >
          Genre:
        </label>
        <input
          name="genre"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
      </div>
      <br />

      <button style={{ backgroundColor: "yellow", padding: "8px" }}>
        Submit
      </button>
    </form>
  );
}

export default PostForm;
