import React, { Component } from "react";
import HeaderInfo from "./header-info/header-info.jsx";
import "./ads.css";
import "../general-style/general-style.css";

function TermOfUse() {
  return (
    <React.Fragment>
      <HeaderInfo />
      <div className="cookie-container container">
        <div className="cookie-title title">
          <i className="fa fa-paper-plane"></i> Quảng Cáo
        </div>
        <span>
          --------------------------------------------------------------------------------------------------------------------------------------------
        </span>
        <div className="ads-text">
          Trang vẫn đang trong quá trình phát triển
        </div>
      </div>
    </React.Fragment>
  );
}

export default TermOfUse;
