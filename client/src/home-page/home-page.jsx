import React, { Component } from "react";
import { Route, Switch, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LeftSide from "./left-side/left-side.jsx";
import CentralContent from "./central-content/central-content.jsx";
import RightSide from "./right-side/right-side.jsx";
import "./home-page.css";

function HomePage() {
  return (
    <React.Fragment>
      <div className="home-page">
        <LeftSide />
        <CentralContent />
        <RightSide />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
