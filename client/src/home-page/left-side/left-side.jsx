import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "../../general-style/general-style.css";
import "./left-side.css";

function LeftSide() {
  return (
    <div className="left-side-container">
      {/* Logo */}
      <div className="left-side-logo-container">
        <a className="left-side-logo" href="/">
          <img src={Logo} className="left-side-logo__img" alt="ViniPR"></img>
        </a>
      </div>

      {/* Nav Bar */}
      <div className="left-side-nav-bar">
        <div className="left-side-nav-bar__title">ĐIỀU HƯỚNG</div>
        <div className="left-side-nav-bar__home">
          <a className="left-side-nav-bar__home-link" href="#">
            <i className="fa-solid fa-house-chimney-window left-side-nav-bar__home-icon side-icon"></i>
            <span className="left-side-text">Trang chủ</span>
          </a>
        </div>
        <div className="left-side-nav-bar__trend-posts">
          <a className="left-side-nav-bar__trend-posts-link" href="#">
            <i className="fa-solid fa-arrow-trend-up left-side-nav-bar__trend-posts-icon side-icon"></i>
            <span className="left-side-text">Bài viết nổi bật</span>
          </a>
        </div>
        <div className="left-side-nav-bar__favorite-authors">
          <a className="left-side-nav-bar__favorite-authors-link" href="#">
            <i className="fa-solid fa-user-graduate left-side-nav-bar__favorite-authors-icon side-icon"></i>
            <span className="left-side-text">Tác giả yêu thích</span>
          </a>
        </div>
      </div>

      {/* Profile */}
      <div className="left-side-profile">
        <div className="left-side-profile__title">HỒ SƠ</div>
        <div className="left-side-profile__img">
          {/* <img src={Girl1} className="left-side-profile__img" alt="" /> */}
        </div>
        <div className="left-side-profile__name">
          <a href="#" className="left-side-profile__personal-page-link">
            Nguyễn Thị A
          </a>
        </div>

        <div className="left-side-profile__post">
          <a className="left-side-profile__post-link" href="#">
            <i className="fa-solid fa-pencil left-side-profile__post-icon side-icon"></i>
            <span className="left-side-text">Đăng bài</span>
          </a>
        </div>
        <div className="left-side-profile__analytics">
          <a className="left-side-profile__analytics-link" href="#">
            <i className="fa-solid fa-chart-line left-side-analytics-icon side-icon"></i>
            <span className="left-side-text">Phân tích</span>
          </a>
        </div>
        <div className="left-side-profile__award">
          <a className="left-side-profile__award-link" href="#">
            <i className="fa-solid fa-award left-side-award-icon side-icon"></i>
            <span className="left-side-text">Phần thưởng</span>
          </a>
        </div>
        <div className="left-side-profile__feedback ">
          <a className="left-side-profile__feedback-link" href="#">
            <i className="fa-solid fa-comment-dots left-side-feedback-icon side-icon"></i>
            <span className="left-side-text">Phản hồi</span>
          </a>
        </div>
        <div className="left-side-profile__help">
          <a className="left-side-profile__help-link" href="#">
            <i className="fa-solid fa-circle-question left-side-help-icon side-icon"></i>
            <span className="left-side-text">Trợ giúp</span>
          </a>
        </div>
        <div className="left-side-profile__setting">
          <a className="left-side-profile__setting-link" href="#">
            <i className="fa-solid fa-gear left-side-setting-icon side-icon"></i>
            <span className="left-side-text">Cài đặt</span>
          </a>
        </div>
      </div>

      {/* Info Part */}
      <div className="left-side-info">
        <a className="left-side-info__term" href="/term">
          Term of Use -
        </a>

        <a className="left-side-info__qna" href="/QnA">
          {" "}
          Q{" & "}A -
        </a>

        <a className="left-side-info__privacy" href="/privacy-policy">
          {" "}
          Privacy Policy -
        </a>

        <a className="left-side-info__cookie" href="/cookie-policy">
          {" "}
          Cookie Policy -
        </a>

        <a className="left-side-info__ads" href="/advertising">
          Advertising
        </a>
        <div className="left-side-info__company">@2022 - Vinipr, Co</div>
      </div>
    </div>
  );
}

export default LeftSide;
