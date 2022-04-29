import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Reserve from "./page/Reserve.tsx/Reserve";
import EnrollClass from "./component/base/enrollClass";
import Ticket from "./page/ticket/Ticket";
import Header from "./component/base/header";
import ViewPage from "./page/home/ViewPage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reserve/:no" element={<Reserve />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/enroll" element={<EnrollClass />} />
          <Route path="/post/:id" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
