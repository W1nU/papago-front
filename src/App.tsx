import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//mport Header from "./component/base/header";
import Home from "./page/home/Home";
import EnrollClass from "./component/base/enrollClass"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EnrollClass />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
