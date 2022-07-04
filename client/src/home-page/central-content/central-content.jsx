import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import "../../general-style/general-style.css";
import "./central-content.css";

function CentralContent() {
  return (
    <div className="central-content-container">
      {/* Header */}
      <div className="central-content-header">
        <div className="central-content-greeting">
          <div className="central-content-greeting__big-text">Xin chào!</div>
          <div className="central-content-greeting__small-text">
            Chúc bạn một ngày tốt lành!
            <i className="fa-solid fa-face-grin"></i>
          </div>
        </div>

        <form className="central-content-search">
          <button type="submit" className="central-content-search__btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input type="text" placeholder="Tìm kiếm" name="search" />
        </form>
      </div>

      {/* Explore */}
      <div className="central-content-explore">
        <div className="central-content-explore__key-word">
          <div className="central-content-explore__key-word-title">
            Khám phá
          </div>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
          <span>#keyword&nbsp;</span>
        </div>
        <div className="central-content-explore__hot-authors">
          <div className="central-content-explore__hot-authors-title">
            Tác giả nổi bật
          </div>
          <div className="central-content-explore__hot-authors-img"></div>
          <div className="central-content-explore__hot-authors-name">
            Nguyễn Thị A
          </div>
          <div className="central-content-explore__hot-authors-views">
            <i className="fa-solid fa-eye"></i>
            <span>10.000 lượt xem</span>
          </div>
        </div>
        <div className="central-content-explore__hot-authors">
          <div className="central-content-explore__hot-authors-title">
            Tác giả nổi bật
          </div>
          <div className="central-content-explore__hot-authors-img"></div>
          <div className="central-content-explore__hot-authors-name">
            Nguyễn Thị A
          </div>
          <div className="central-content-explore__hot-authors-views">
            <i className="fa-solid fa-eye"></i>
            <span>10.000 lượt xem</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="central-content-main-content">
        <div className="central-content-main-content__header">
          <div className="central-content-main-content__header-container">
            <div className="central-content-main-content__header-title">
              <div className="central-content-main-content__header-title-img"></div>
              <div className="central-content-main-content__header-title-name">
                Nguyễn Thị A
              </div>
              <div className="central-content-main-content__header-title-time">
                20/20/2022
              </div>
              <button className="central-content-main-content__header-title-btn">
                <i className="fa-solid fa-user-plus central-content-main-content__header-title-icon"></i>
              </button>
            </div>
            <div className="central-content-main-content__header-content">
              <h3 className="central-content-main-content__header-content-title">
                Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ tiết kiệm
                xăng cho bạn Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ
                tiết kiệm xăng cho bạn Những công nghệ hiện đại tích hợp trên ô
                tô hỗ trợ tiết kiệm xăng cho bạn
              </h3>
              <div className="central-content-main-content__header-content-text">
                Hệ thống kiểm soát tốc độ tự động hay còn được biết đến với cái
                tên "Cruise control" dường như đang trở thành một phần không thể
                thiếu khi con người đi nhiều hơn., kông chỉ giúp các tài xế nhàn
                chân ga, chạy đúng tốc độ mà còn giúp xe tiết kiệm một lượng
                nhiên liệu không nhỏ. Hệ thống kiểm soát tốc độ tự động hay còn
                được biết đến với cái tên "Cruise control" dường như đang trở
                thành một phần không thể thiếu khi con người đi nhiều hơn., kông
                chỉ giúp các tài xế nhàn chân ga, chạy đúng tốc độ mà còn giúp
                xe tiết kiệm một lượng nhiên liệu không nhỏ.
              </div>
            </div>
          </div>
          <div className="central-content-main-content__avatar"></div>
        </div>
        <div className="central-content-main-content__footer">
          <div className="central-content-main-content__footer-views">
            <i className="fa-solid fa-eye"></i>
            10.000
          </div>
          <div className="central-content-main-content__footer-comments">
            <i className="fa-solid fa-message"></i>
            20
          </div>
          <button className="central-content-main-content__footer-share">
            <i className="fa-solid fa-share"></i>
            Chia sẻ
          </button>
          <button className="central-content-main-content__footer-audio">
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Nghe</span>
          </button>
        </div>
      </div>
      <div className="central-content-main-content">
        <div className="central-content-main-content__header">
          <div className="central-content-main-content__header-container">
            <div className="central-content-main-content__header-title">
              <div className="central-content-main-content__header-title-img"></div>
              <div className="central-content-main-content__header-title-name">
                Nguyễn Thị A
              </div>
              <div className="central-content-main-content__header-title-time">
                20/20/2022
              </div>
              <button className="central-content-main-content__header-title-btn">
                <i className="fa-solid fa-user-plus central-content-main-content__header-title-icon"></i>
              </button>
            </div>
            <div className="central-content-main-content__header-content">
              <h3 className="central-content-main-content__header-content-title">
                Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ tiết kiệm
                xăng cho bạn Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ
                tiết kiệm xăng cho bạn Những công nghệ hiện đại tích hợp trên ô
                tô hỗ trợ tiết kiệm xăng cho bạn
              </h3>
              <div className="central-content-main-content__header-content-text">
                Hệ thống kiểm soát tốc độ tự động hay còn được biết đến với cái
                tên "Cruise control" dường như đang trở thành một phần không thể
                thiếu khi con người đi nhiều hơn., kông chỉ giúp các tài xế nhàn
                chân ga, chạy đúng tốc độ mà còn giúp xe tiết kiệm một lượng
                nhiên liệu không nhỏ. Hệ thống kiểm soát tốc độ tự động hay còn
                được biết đến với cái tên "Cruise control" dường như đang trở
                thành một phần không thể thiếu khi con người đi nhiều hơn., kông
                chỉ giúp các tài xế nhàn chân ga, chạy đúng tốc độ mà còn giúp
                xe tiết kiệm một lượng nhiên liệu không nhỏ.
              </div>
            </div>
          </div>
          <div className="central-content-main-content__avatar"></div>
        </div>
        <div className="central-content-main-content__footer">
          <div className="central-content-main-content__footer-views">
            <i className="fa-solid fa-eye"></i>
            10.000
          </div>
          <div className="central-content-main-content__footer-comments">
            <i className="fa-solid fa-message"></i>
            20
          </div>
          <button className="central-content-main-content__footer-share">
            <i className="fa-solid fa-share"></i>
            Chia sẻ
          </button>
          <button className="central-content-main-content__footer-audio">
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Nghe</span>
          </button>
        </div>
      </div>
      <div className="central-content-main-content">
        <div className="central-content-main-content__header">
          <div className="central-content-main-content__header-container">
            <div className="central-content-main-content__header-title">
              <div className="central-content-main-content__header-title-img"></div>
              <div className="central-content-main-content__header-title-name">
                Nguyễn Thị A
              </div>
              <div className="central-content-main-content__header-title-time">
                20/20/2022
              </div>
              <button className="central-content-main-content__header-title-btn">
                <i className="fa-solid fa-user-plus central-content-main-content__header-title-icon"></i>
              </button>
            </div>
            <div className="central-content-main-content__header-content">
              <h3 className="central-content-main-content__header-content-title">
                Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ tiết kiệm
                xăng cho bạn Những công nghệ hiện đại tích hợp trên ô tô hỗ trợ
                tiết kiệm xăng cho bạn Những công nghệ hiện đại tích hợp trên ô
                tô hỗ trợ tiết kiệm xăng cho bạn
              </h3>
              <div className="central-content-main-content__header-content-text">
                Hệ thống kiểm soát tốc độ tự động hay còn được biết đến với cái
                tên "Cruise control" dường như đang trở thành một phần không thể
                thiếu khi con người đi nhiều hơn., kông chỉ giúp các tài xế nhàn
                chân ga, chạy đúng tốc độ mà còn giúp xe tiết kiệm một lượng
                nhiên liệu không nhỏ. Hệ thống kiểm soát tốc độ tự động hay còn
                được biết đến với cái tên "Cruise control" dường như đang trở
                thành một phần không thể thiếu khi con người đi nhiều hơn., kông
                chỉ giúp các tài xế nhàn chân ga, chạy đúng tốc độ mà còn giúp
                xe tiết kiệm một lượng nhiên liệu không nhỏ.
              </div>
            </div>
          </div>
          <div className="central-content-main-content__avatar"></div>
        </div>
        <div className="central-content-main-content__footer">
          <div className="central-content-main-content__footer-views">
            <i className="fa-solid fa-eye"></i>
            10.000
          </div>
          <div className="central-content-main-content__footer-comments">
            <i className="fa-solid fa-message"></i>
            20
          </div>
          <button className="central-content-main-content__footer-share">
            <i className="fa-solid fa-share"></i>
            Chia sẻ
          </button>
          <button className="central-content-main-content__footer-audio">
            <i className="fa-solid fa-microphone-lines"></i>
            <span>Nghe</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CentralContent;
