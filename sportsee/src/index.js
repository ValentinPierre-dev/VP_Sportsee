import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style/reset.css";
import "./style/sass/main.scss";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Profil from "./pages/Profil";
import Error from "./pages/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <div className="content">
      <SideMenu />
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/user/12" />} />
        <Route path="/user/:id/" element={<Profil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  </BrowserRouter>
);
