import React, { Component } from "react";
import HeaderInfo from "./general/header-info.jsx";
import "./qna.css";
import "./general/general-style.css";

const qnas = [
  {
    id: 1,
    title: "Sử dụng ViniPR",
    text: "Chào mừng bạn đến với ViniPR! ViniPR là một nền tảng xuất bản, nơi mọi người có thể đọc những câu chuyện quan trọng, sâu sắc về các chủ đề quan trọng nhất đối với họ và chia sẻ ý tưởng với thế giới.",
  },
  {
    id: 2,
    title: "Tạo tài khoản miễn phí",
    text: "Bằng cách tạo tài khoản miễn phí của mình, bạn có thể theo dõi các tác giả và ấn phẩm yêu thích của mình, tương tác với các câu chuyện của họ, đánh dấu trang để xem sau, xuất bản các bài đăng của riêng bạn và nhiều hơn thế nữa.",
  },
  {
    id: 3,
    title: "Đọc các câu chuyện từ các tác giả và ấn phẩm yêu thích của bạn",
    text: "Là một độc giả trên ViniPR, bạn có thể đọc các câu chuyện của hàng nghìn tác giả và tương tác với họ bằng cách click vào các bài viết của họ để đọc bài và chia sẻ bài viết của họ, để lại những câu trả lời có ý nghĩa và đánh dấu những đoạn văn yêu thích của bạn. Đừng quên tùy chỉnh sở thích của bạn bằng cách theo dõi các chủ đề, tác giả và ấn phẩm trên nền tảng mà bạn quan tâm. Điều này để đảm bảo rằng bạn nhận được các đề xuất phù hợp với sở thích của mình. Bạn có thể điều chỉnh sở thích của mình bất cứ lúc nào.",
  },
  {
    id: 4,
    title: "Viết cho nội dung trái tim của bạn",
    text: "Là một nhà văn trên ViniPR, bạn có thể chia sẻ câu chuyện của mình với thế giới bằng trình chỉnh sửa dễ sử dụng của chúng tôi. Xuất bản trên nền tảng là miễn phí và những câu chuyện bạn xuất bản có thể được phân phối cho những người theo dõi bạn, cũng như hàng triệu độc giả theo dõi các chủ đề có liên quan",
  },
  {
    id: 5,
    title: "Làm thế nào để thiết lập các ứng dụng đăng nhập xã hội?",
    text: "Đối với Đăng nhập mạng xã hội, bạn sẽ cần tạo ứng dụng trên Facebook / Google+ / Sau đó tiến hành đăng nhập tài khoản theo link tại đây: https://vinipr.vn/",
  },
  {
    id: 6,
    title: "Đăng nhập vào tài khoản chính của bạn",
    text: "Nếu bạn biết địa chỉ email nào được liên kết với tài khoản chính của mình, bạn sẽ cần đăng xuất khỏi tài khoản hiện tại và đăng nhập vào tài khoản chính của mình.",
  },
  {
    id: 7,
    title: "Tôi gặp sự cố, Tôi có thể nhận hỗ trợ bằng cách nào?",
    text: "Nếu bạn cần hỗ trợ hoặc nếu bạn gặp bất kỳ vấn đề nào, vui lòng liên hệ với chúng tôi qua mục PHẢN HỒI Xin lưu ý rằng phản hồi của chúng tôi có thể mất đến 2 ngày làm việc",
  },
  {
    id: 8,
    title: "Hỗ trợ bao gồm những gì?",
    text: "Sẵn sàng trả lời các câu hỏi, Trả lời các câu hỏi kỹ thuật về các tính năng của mặt hàng, Hỗ trợ với các lỗi và sự cố được báo cáo, Trợ giúp với nội dung của bên thứ 3 đi kèm.Mọi yêu cầu tùy chỉnh sẽ bị bỏ qua. Vui lòng đảm bảo đọc thêm về chính sách hỗ trợ",
  },
  {
    id: 9,
    title:
      "Hỗ trợ Tôi đã gửi một yêu cầu, nhưng không có phản hồi, tại sao? gồm những gì?",
    text: "Nếu chúng tôi không trả lời bạn hơn 2 ngày, chỉ cần gửi lại tin nhắn của bạn và tôi sẽ liên hệ với bạn ngay khi có thể.",
  },
];

function QnA() {
  return (
    <React.Fragment>
      <HeaderInfo />
      <div className="qna-container container">
        <div className="qna-title title">
          <i className="fa fa-paper-plane"></i> Câu hỏi thường gặp
        </div>
        <span>
          --------------------------------------------------------------------------------------------------------------------------------------------
        </span>
        {qnas.map((qna) => (
          <div key={qna.id}>
            <div className="qna-big-catalog big-catalog">{qna.title}</div>
            <div className="qna-text text">{qna.text}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default QnA;
