import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./home-page.css";

function HomePage() {
  return (
    <div>
      <h1>
        <a href="/FAQs">FAQs Page</a>
      </h1>
    </div>
  );
}

export default HomePage;
