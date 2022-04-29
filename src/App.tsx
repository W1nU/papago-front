import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/base/header";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
