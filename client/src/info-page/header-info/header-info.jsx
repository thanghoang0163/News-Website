import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./header-info.css";

function HeaderInfo() {
  return (
    <React.Fragment>
      <div className="header-info__menu">
        <div className="header-info__logo">
          <a href="/">ViniPR</a>
        </div>
        <div className="header-info__navbar">
          <ul className="header-info__list">
            <li className="header-info__item">
              <a href="/" className="header-info__link">
                Home
              </a>
            </li>
            <li className="header-info__item">
              <a href="/term" className="header-info__link">
                Term of Use
              </a>
            </li>
            <li className="header-info__item">
              <a href="/QnA" className="header-info__link">
                QnA
              </a>
            </li>
            <li className="header-info__item">
              <a href="/privacy-policy" className="header-info__link">
                Pivacy Policy
              </a>
            </li>
            <li className="header-info__item">
              <a href="/cookie-policy" className="header-info__link">
                Cookie Policy
              </a>
            </li>
            <li className="header-info__item">
              <a href="/advertising" className="header-info__link">
                Advertising
              </a>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderInfo;
