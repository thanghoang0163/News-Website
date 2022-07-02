import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import HeaderInfo from "./general/header-info.jsx";
import "./cookie-policy.css";
import "./general/general-style.css";

function CookiePolicy() {
  return (
    <React.Fragment>
      <HeaderInfo />
      <div className="cookie-container container">
        <div className="cookie-title title">
          <i className="fa fa-paper-plane"></i> Chính sách cookie
        </div>
        <span>
          --------------------------------------------------------------------------------------------------------------------------------------------
        </span>
        <div className="cookie-big-catalog big-catalog">
          Cookie và các công nghệ lưu trữ khác
        </div>
        <div className="cookie-text text">
          Cookie là các đoạn văn bản nhỏ được sử dụng để lưu trữ thông tin trên
          trình duyệt web. Cookie được sử dụng để lưu trữ và nhận số nhận dạng
          cũng như thông tin khác trên máy tính, điện thoại và các thiết bị
          khác. Những công nghệ khác, bao gồm dữ liệu chúng tôi lưu trữ trên
          trình duyệt web hoặc thiết bị của bạn, số nhận dạng liên quan đến
          thiết bị của bạn và phần mềm khác, được sử dụng cho mục đích tương tự.
          Trong chính sách này, chúng tôi gọi tất cả những công nghệ này là
          “cookie”.
        </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie nếu bạn có tài khoản Vinipr, sử dụng Sản phẩm
          của Vinipr, bao gồm trang web và ứng dụng của chúng tôi hoặc truy cập
          các trang web và ứng dụng khác sử dụng Sản phẩm của Vinipr (bao gồm
          nút Haha hoặc các Công nghệ khác của Vinipr). Cookie giúp Vinipr cung
          cấp Sản phẩm của Vinipr cho bạn cũng như hiểu được thông tin mà chúng
          tôi nhận được về bạn, bao gồm thông tin về việc bạn sử dụng các trang
          web và ứng dụng khác, cho dù bạn đã đăng ký hoặc đăng nhập hay chưa
        </div>
        <div className="cookie-text text">
          Chính sách này giải thích cách chúng tôi sử dụng cookie và các lựa
          chọn dành cho bạn. Trừ khi chính sách này quy định khác, Chính sách dữ
          liệu sẽ được áp dụng đối với việc chúng tôi xử lý dữ liệu thu thập
          được qua cookie.
        </div>
        <div className="cookie-big-catalog big-catalog">
          Tại sao chúng tôi sử dụng cookie?
        </div>
        <div className="cookie-text text">
          Cookie giúp chúng tôi cung cấp, bảo vệ và cải thiện Sản phẩm của
          Vinipr, chẳng hạn như bằng cách cá nhân hóa nội dung, điều chỉnh và
          đánh giá quảng cáo cũng như cung cấp trải nghiệm an toàn hơn. Mặc dù
          các cookie chúng tôi sử dụng đôi khi có thể thay đổi khi chúng tôi cải
          tiến và cập nhật Sản phẩm của Vinipr, chúng tôi sử dụng các cookie này
          cho những mục đích sau:
        </div>
        <div className="cookie-small-catalog small-catalog">Xác thực </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để xác minh tài khoản của bạn và xác định
          thời điểm bạn đăng nhập để giúp bạn truy cập Sản phẩm của Vinipr dễ
          dàng hơn, đồng thời hiển thị cho bạn các tính năng và trải nghiệm
          thích hợp.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Chúng tôi sử dụng cookie để duy trì trạng thái đăng nhập
              của bạn khi bạn điều hướng giữa các trang Vinipr. Cookie cũng giúp
              chúng tôi ghi nhớ trình duyệt của bạn để bạn không phải duy trì
              trạng thái đăng nhập Vinipr và vì vậy, bạn có thể đăng nhập Vinipr
              dễ dàng hơn thông qua các ứng dụng cũng như trang web bên thứ ba.
            </li>
          </ul>
        </div>
        <div className="cookie-small-catalog small-catalog">
          Tính toàn vẹn của sản phẩm, trang web và bảo mật của ViniPR
        </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để giúp chúng tôi giữ cho tài khoản, dữ liệu
          của bạn và Sản phẩm của Vinipr an toàn, bảo mật.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie có thể giúp chúng tôi xác định và áp dụng các biện
              pháp bảo mật bổ sung khi ai đó cố gắng truy cập trái phép một tài
              khoản Vinipr, chẳng hạn như bằng cách đoán nhanh các mật khẩu khác
              nhau. Chúng tôi cũng sử dụng cookie để lưu trữ thông tin cho phép
              khôi phục tài khoản của bạn trong trường hợp bạn quên mật khẩu
              hoặc yêu cầu xác thực bổ sung nếu bạn cho chúng tôi biết tài khoản
              của mình đã bị hack.
            </li>
          </ul>
        </div>
        <div className="cookie-text text">
          Chúng tôi cũng sử dụng cookie để chống lại hoạt động vi phạm chính
          sách của mình hoặc bằng cách khác làm giảm khả năng cung cấp Sản phẩm
          của Vinipr của chúng tôi.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie giúp chúng tôi chống lại các cuộc tấn công spam và
              lừa đảo bằng cách giúp chúng tôi có thể xác định những máy tính
              được sử dụng để tạo ra số lượng lớn tài khoản Vinipr giả mạo.
              Chúng tôi cũng sử dụng cookie để phát hiện máy tính bị nhiễm phần
              mềm độc hại và thực hiện các bước nhằm ngăn chặn chúng gây thêm
              thiệt hại. Cookie cũng giúp chúng tôi ngăn những người chưa đủ
              tuổi đăng ký tài khoản Vinipr.
            </li>
          </ul>
        </div>
        <div className="cookie-small-catalog small-catalog">
          Các tính năng và dịch vụ của trang web
        </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để bật chức năng giúp cung cấp Sản phẩm của
          Vinipr.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie giúp chúng tôi lưu trữ các tùy chọn, biết thời điểm
              bạn đã xem hoặc tương tác với nội dung Sản phẩm của Vinipr, đồng
              thời cung cấp cho bạn nội dung và trải nghiệm được tùy chỉnh. Ví
              dụ: cookie cho phép chúng tôi đưa ra đề xuất cho bạn và người
              khác, đồng thời tùy chỉnh nội dung trên trang web bên thứ ba tích
              hợp với các plugin xã hội của chúng tôi. Nếu bạn là quản trị viên
              trang, cookie cho phép bạn chuyển giữa việc đăng từ tài khoản
              Vinipr cá nhân của mình và từ trang.
            </li>
          </ul>
        </div>
        <div className="cookie-text text">
          Chúng tôi cũng sử dụng cookie để giúp cung cấp cho bạn nội dung phù
          hợp với nơi của bạn.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Chúng tôi lưu trữ thông tin trong một cookie được đặt trên
              trình duyệt hoặc thiết bị của bạn, vì vậy, bạn sẽ nhìn thấy trang
              web bằng ngôn ngữ ưu tiên của mình.
            </li>
          </ul>
        </div>
        <div className="cookie-small-catalog small-catalog">
          Các tính năng và dịch vụ của trang web
        </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để bật chức năng giúp cung cấp Sản phẩm của
          Vinipr.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie giúp chúng tôi lưu trữ các tùy chọn, biết thời điểm
              bạn đã xem hoặc tương tác với nội dung Sản phẩm của Vinipr, đồng
              thời cung cấp cho bạn nội dung và trải nghiệm được tùy chỉnh. Ví
              dụ: cookie cho phép chúng tôi đưa ra đề xuất cho bạn và người
              khác, đồng thời tùy chỉnh nội dung trên trang web bên thứ ba tích
              hợp với các plugin xã hội của chúng tôi. Nếu bạn là quản trị viên
              trang, cookie cho phép bạn chuyển giữa việc đăng từ tài khoản
              Vinipr cá nhân của mình và từ trang.
            </li>
          </ul>
        </div>
        <div className="cookie-text text">
          Chúng tôi cũng sử dụng cookie để giúp cung cấp cho bạn nội dung phù
          hợp với nơi của bạn.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Chúng tôi lưu trữ thông tin trong một cookie được đặt trên
              trình duyệt hoặc thiết bị của bạn, vì vậy, bạn sẽ nhìn thấy trang
              web bằng ngôn ngữ ưu tiên của mình.
            </li>
          </ul>
        </div>
        <div className="cookie-small-catalog small-catalog">Hiệu quả</div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để mang đến cho bạn trải nghiệm tốt nhất có
          thể.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie giúp chúng tôi định tuyến lưu lượng truy cập giữa
              các máy chủ và hiểu tốc độ tải Sản phẩm của Vinipr đối với những
              người khác nhau. Cookie cũng giúp chúng tôi ghi lại tỷ lệ và kích
              thước màn hình, cửa sổ của bạn và biết bạn đã bật chế độ tương
              phản cao chưa để chúng tôi có thể hiển thị đúng các trang web cũng
              như ứng dụng của mình.
            </li>
          </ul>
        </div>
        <div className="cookie-small-catalog small-catalog">
          Phân tích và nghiên cứu
        </div>
        <div className="cookie-text text">
          Chúng tôi sử dụng cookie để hiểu rõ hơn cách mọi người sử dụng Sản
          phẩm của Vinipr để có thể cải thiện các sản phẩm đó.
        </div>
        <div className="cookie-text text">
          <ul>
            <li>
              Ví dụ: Cookie có thể giúp chúng tôi hiểu cách mọi người sử dụng
              Dịch vụ của Vinipr, phân tích xem phần nào trong Sản phẩm của
              Vinipr mọi người thấy hữu ích và hấp dẫn nhất cũng như xác định
              các tính năng có thể cải thiện.
            </li>
          </ul>
        </div>
        <div className="cookie-big-catalog big-catalog">
          Chúng tôi sử dụng cookie ở đâu?
        </div>
        <div className="cookie-text text">
          Chúng tôi có thể đặt cookie trên máy tính hoặc thiết bị của bạn và
          nhận thông tin được lưu trữ trong cookie, khi bạn sử dụng hoặc truy
          cập:
        </div>
        <ul>
          <li style={{ marginBottom: "10px" }}>Sản phẩm của Vinipr.</li>
          <li style={{ marginBottom: "10px" }}>
            Các sản phẩm do thành viên khác trong các Công ty của Vinipr cung
            cấp.
          </li>
          <li style={{ marginBottom: "10px" }}>
            Các trang web và ứng dụng do công ty khác cung cấp sử dụng Sản phẩm
            của Vinipr, bao gồm các công ty đưa Công nghệ của Vinipr vào trang
            web và ứng dụng của họ. Vinipr sử dụng cookie và nhận thông tin khi
            bạn truy cập các trang web cũng như ứng dụng đó, bao gồm thông tin
            thiết bị và thông tin về hoạt động của bạn mà không cần bạn phải
            hành động thêm. Điều này xảy ra cho dù bạn đã có tài khoản Vinipr
            hoặc đã đăng nhập hay chưa.
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default CookiePolicy;
