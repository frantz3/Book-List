import "./App.css";
import { Routes, Route } from "react-router-dom";

import PostForm from "./components/PostForm";
import Home from "./pages/Home/Home";
import Header from "./components/Header";

function App() {
  

  return (
    <div className="app">
      
      <Header />
      <Home />
      <Routes>
        <Route exact path="/add" element={<PostForm />} />

        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
