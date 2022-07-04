import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../general-style/general-style.css";
import "./schedule-button.css";

function ScheduleButton({ display, date }) {
  return (
    <div className="schedule-button-container">
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default ScheduleButton;
