#npm install swiper
cài đặt thư viện swiper để dùng carousel

#npm install react-countup react-intersection-observer
cài đặt để dùng count up

#npm install react-router-dom
cài đặt để thiết lập bộ định tuyến, chuyển giữa các trang

#npm install @emailjs/browser
Đăng ký tài khoản: Truy cập EmailJS.com và tạo một tài khoản miễn phí.

Thêm Dịch vụ Email:

Trong dashboard, vào mục Email Services -> Add New Service.

Chọn Gmail (hoặc dịch vụ email bạn đang dùng).

Nhấn Connect Account và đăng nhập vào tài khoản Google của bạn để cấp quyền.

Lưu lại Service ID của bạn.

Tạo Mẫu Email:

Vào mục Email Templates -> Create New Template.

Phần Subject, bạn có thể đặt là: New message from {{name}}

Phần Content, bạn soạn nội dung email bạn muốn nhận. Các biến trong dấu {{ }} sẽ được thay thế bằng dữ liệu từ form.

## 2. Lỗi Missing Dependency (TS2307: Cannot find module 'motion/react')
npm install -D @types/node
(-D hoặc --save-dev sẽ cài nó như một dependency cho môi trường phát triển, đây là cách làm đúng cho các gói type).
