import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/base/header";
import Home from "./page/home/Home";
import Ticket from "./page/ticket/Ticket";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
