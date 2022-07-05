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

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  // Setting Form
  const readingInput = document.querySelector("#reading-input");
  const writingInput = document.querySelector("#writing-input");
  const [readingDay, setReadingDay] = useState(0);
  const [writingDay, setWritingDay] = useState(0);
  const [readingMonth, setReadingMonth] = useState();
  const [writingMonth, setWritingMonth] = useState(0);

  console.log(day);

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
          Kiến thức đã tiếp thu: 10%
        </div>
      </div>

      {/* Schedule */}
      <div className="right-side-schedule-container">
        <div className="right-side-schedule__title">Kế hoạch của bạn</div>
        <Calendar onChange={setDate} value={date} />
        <div className="right-side-schedule">
          <div className="right-side-schedule__month">
            <span className="right-side-schedule__month-1">Tháng</span>
            <span className="right-side-schedule__month-2">
              {(month < 9 ? "0" + month : month) + "/" + year}
            </span>
            <span className="right-side-schedule__month-3">
              <label>- Đọc:</label>
              <input type="text" disabled></input>
            </span>
            <span className="right-side-schedule__month-4">
              <label>- Viết:</label>
              <input type="text" disabled></input>
            </span>
          </div>
          <div className="right-side-schedule__day">
            <span className="right-side-schedule__day-1">Ngày</span>
            <span className="right-side-schedule__day-2">
              {(day < 9 ? "0" + day : day) +
                "/" +
                (month < 9 ? "0" + month : month)}
            </span>
            <span className="right-side-schedule__day-3">
              <label htmlFor="reading-input">- Đọc:</label>
              <input type="text" id="reading-input"></input>
            </span>
            <span className="right-side-schedule__day-4">
              <label htmlFor="writing-input">- Viết:</label>
              <input type="text" id="writing-input"></input>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
