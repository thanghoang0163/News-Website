import React, { Component } from "react";
import { Route, Switch, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./home-page.css";

function HomePage() {
  return (
    <React.Fragment>
      <div>
        <h1>
          <a href="/left-side">Side Left</a>
        </h1>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
