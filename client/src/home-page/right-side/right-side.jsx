import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-style.css";
import ScheduleButton from "./schedule-button.jsx";

import ReadingPerson from "../../assets/images/reading-person.png";
import Brain from "../../assets/images/brain.png";
import "../../general-style/general-style.css";
import "./right-side.css";

function RightSide() {
  // Calendar
  const [date, setDate] = useState(new Date());

  return (
    <div className="right-side-container">
      {/* Notify */}
      <div className="right-side-notify-container">
        <div className="right-side-notify">
          <i className="fa-solid fa-bell"></i>
        </div>
        <div className="right-side-avatar"></div>
      </div>

      {/* Reading Result */}
      <div className="right-side-result">
        <div className="right-side-result__title">Kết quả của bạn hôm nay</div>
        <div className="right-side-result__total">
          <img
            src={ReadingPerson}
            className="right-side-result__total-img"
            alt=""
          />
          Tổng số bài viết đã đọc: 100
        </div>
        <div className="right-side-result__percent">
          <img src={Brain} className="right-side-result__percent-img" alt="" />
          Phần trăm đã sử dụng: 10%
        </div>
      </div>

      {/* Schedule */}
      <div className="right-side-schedule-container">
        <div className="right-side-schedule__title">Kế hoạch của bạn</div>
        <button className="right-side-schedule-btn" onClick="">
          Cài đặt
        </button>
        <Calendar onChange={setDate} value={date} />
        <div className="right-side-schedule">
          <div className="right-side-schedule__month">
            <span className="right-side-schedule__month-1">Tháng</span>
            <span className="right-side-schedule__month-2">5/2022</span>
            <span className="right-side-schedule__month-3">- Đã đọc: 100</span>
            <span className="right-side-schedule__month-4">- Đã viết: 10</span>
          </div>
          <div className="right-side-schedule__week-and-day">
            <div className="right-side-schedule__week">
              <span className="right-side-schedule__week-1">Tuần</span>
              <span className="right-side-schedule__week-2">01 - 07</span>
              <span className="right-side-schedule__week-3">- Đã đọc: 100</span>
              <span className="right-side-schedule__week-4">- Đã viết: 10</span>
            </div>
            <div className="right-side-schedule__day">
              <span className="right-side-schedule__day-1">Ngày</span>
              <span className="right-side-schedule__day-2">16/05</span>
              <span className="right-side-schedule__day-3">- Đã đọc: 100</span>
              <span className="right-side-schedule__day-4">- Đã viết: 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
