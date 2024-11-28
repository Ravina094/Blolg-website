import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={AllPosts} />
        <Route path="/post/:id" Component={OnePost} />
      </Routes>
    </Router>
  );
}

export default App;
