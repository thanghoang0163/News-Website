import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar-style.css";

import ReadingPerson from "../../assets/images/reading-person.png";
import Brain from "../../assets/images/brain.png";
import "../../general-style/general-style.css";
import "./right-side.css";

function RightSide() {
  // Calendar
  const [date, setDate] = useState(new Date());

  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const remainingDay = lastDayOfMonth - day;

  // Setting Form
  const [readingDay, setReadingDay] = useState(0);
  const [writingDay, setWritingDay] = useState(0);

  useEffect(() => {
    setReadingDay(localStorage.getItem("readingInput"));
    setWritingDay(localStorage.getItem("writingInput"));
  }, []);

  console.log(remainingDay);

  return (
    <div className="right-side-container">
      {/* Notify */}
      <div className="right-side-notify-container">
        <button className="right-side-notify">
          <i className="fa-solid fa-bell"></i>
        </button>
        <div className="right-side-avatar"></div>
      </div>

      {/* Reading Result */}
      <div className="right-side-result">
        <div className="right-side-result__title">Thành tích hôm nay</div>
        <div className="right-side-result__total">
          <img
            src={ReadingPerson}
            className="right-side-result__total-img"
            alt=""
          />
          Bài viết đã đọc: 100
        </div>
        <div className="right-side-result__percent">
          <img src={Brain} className="right-side-result__percent-img" alt="" />
          Sự hiểu biết tăng: 10%
        </div>
      </div>

      {/* Schedule */}
      <div className="right-side-schedule-container">
        <div className="right-side-schedule__title">Lập kế hoạch</div>
        {/* <button
          className="right-side-schedule-btn"
          onClick={() => {
            handleOpening();
          }}
        >
          Cài đặt
        </button>
        <form className="right-side-schedule-setting">
          <span className="right-side-schedule-setting-title">
            Cài đặt cho tháng của bạn
          </span>
          <label htmlFor="reading-input">Đọc:</label>
          <input type="text" id="reading-input"></input>
          <label htmlFor="reading-input">bài </label>
          <br></br>
          <label htmlFor="writing-input">Viết:</label>
          <input type="text" id="writing-input"></input>
          <label htmlFor="reading-input">bài </label>
          <br></br>
          <button
            className="right-side-schedule-setting-btn"
            onClick={() => {
              if (readingInput) {
                setReadingMonth(parseInt(readingInput.value));
              }
              if (writingInput) {
                setWritingMonth(parseInt(writingInput.value));
              }
              setReadingWeek((readingMonth / 7).toFixed(0));
              setWritingWeek((writingMonth / 7).toFixed(0));
              setReadingDay((readingMonth / 30).toFixed(0));
              setWritingDay((writingMonth / 30).toFixed(0));
              handleClosing();
              console.log(readingInput.value);
            }}
          >
            Chọn
          </button>
        </form> */}
        <Calendar onChange={setDate} value={date} />
        <div className="right-side-schedule">
          <div className="right-side-schedule__month">
            <div className="right-side-schedule__month-title">
              <span className="right-side-schedule__month-1">Tháng</span>
              <span className="right-side-schedule__month-2">
                {(month < 9 ? "0" + month : month) + "/" + year}
              </span>
            </div>
            <span className="right-side-schedule__month-3">
              <label>- Đọc:</label>
              <input
                type="text"
                disabled
                value={
                  isNaN(readingDay)
                    ? "0"
                    : (readingDay * remainingDay).toString()
                }
              ></input>
              <label>bài</label>
            </span>
            <span className="right-side-schedule__month-4">
              <label>- Viết:</label>
              <input
                type="text"
                disabled
                value={
                  isNaN(writingDay)
                    ? "0"
                    : (writingDay * remainingDay).toString()
                }
              ></input>
              <label>bài</label>
            </span>
          </div>
          <div className="right-side-schedule__day">
            <div className="right-side-schedule__day-title">
              <span className="right-side-schedule__day-1">Ngày</span>
              <span className="right-side-schedule__day-2">
                {(day < 9 ? "0" + day : day) +
                  "/" +
                  (month < 9 ? "0" + month : month)}
              </span>
            </div>

            <span className="right-side-schedule__day-3">
              <label htmlFor="reading-input">- Đọc:</label>
              <input
                type="text"
                id="reading-input"
                onChange={(e) => {
                  localStorage.setItem(
                    "readingInput",
                    parseInt(e.target.value)
                  );
                }}
              ></input>
              <label>bài</label>
            </span>
            <span className="right-side-schedule__day-4">
              <label htmlFor="writing-input">- Viết:</label>
              <input
                type="text"
                id="writing-input"
                onChange={(e) => {
                  localStorage.setItem(
                    "writingInput",
                    parseInt(e.target.value)
                  );
                }}
              ></input>
              <label>bài</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
