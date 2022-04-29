import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/base/header";
import Home from "./page/home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
