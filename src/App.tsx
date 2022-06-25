import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { functionAngular } from "@jbblt/angular-mfe";
import { state$ } from "@jbblt/utility";
import { Home } from "./components/Home";
import { LoginPage } from "./components/LoginPage";
export default function App(props) {
  const [backgroundColor, setBackgroundColor] = useState("blue");

  return (
    <>
      <BrowserRouter basename={"/"}>
        <nav className="react-mfe-navbar-container">
          <Link to="/react/login">Login</Link>
          <Link to="/react">Home</Link>
        </nav>
        <div className="main-app">
          <Routes>
            <Route path="/react" caseSensitive element={<Home />}></Route>
            <Route path="react/login" element={<LoginPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
// Here declare data/Function want to share with other MFE.
export function exportedReactFunctionToOtherMfe(optionalPassedString?: string) {
  return "String Value From React Function";
}
