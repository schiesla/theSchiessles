import React from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import Col from "react-bootstrap/Col";

export default function App() {
  return (
    <div>
      <NavBar />
        <Routes />
    </div>
  );
}