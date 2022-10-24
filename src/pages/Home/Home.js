import BookList from "../../components/BookList";

function Home({ books, handleDeleteBook }) {
  return (
    <div>
      <h1>List of Books</h1>
      <BookList book={books} onHandleDelete={handleDeleteBook} key={books.id} />
    </div>
  );
}

export default Home;
