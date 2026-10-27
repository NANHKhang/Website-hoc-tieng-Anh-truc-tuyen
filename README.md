# EnglishHub - Website Học Tiếng Anh Trực Tuyến

Ứng dụng học tiếng Anh trực tuyến tối giản được xây dựng với **React (JavaScript)** và **Tailwind CSS**, phát triển trên nền **Vite**.

---

## 🛠️ Công nghệ sử dụng

- **React 18** (JavaScript / JSX)
- **Vite 6** (Bộ công cụ build và dev server siêu tốc)
- **Tailwind CSS 3** (Tiện ích CSS định dạng giao diện)
- **Lucide React** (Bộ biểu tượng giao diện hiện đại)

---

## 📁 Cấu trúc thư mục ban đầu

```text
├── public/                 # Tệp tĩnh công khai
├── src/
│   ├── components/         # Các components giao diện tái sử dụng
│   │   ├── Navbar.jsx      # Thanh điều hướng trên cùng
│   │   ├── DailyWord.jsx   # Widget từ vựng tương tác hàng ngày
│   │   ├── SkillCard.jsx   # Thẻ chuyên mục kỹ năng học
│   │   └── Footer.jsx      # Chân trang website
│   ├── App.jsx             # Giao diện chính của ứng dụng
│   ├── index.css           # Cấu hình Tailwind CSS directives
│   └── main.jsx            # Điểm khởi chạy React DOM
├── index.html              # Tệp HTML mẫu
├── package.json            # Quản lý thư viện và scripts
├── postcss.config.js       # Cấu hình PostCSS cho Tailwind
├── tailwind.config.js      # Cấu hình Tailwind CSS theme & content
└── vite.config.js          # Cấu hình Vite bundler
```

---

## 🚀 Hướng dẫn khởi chạy

### 1. Cài đặt các gói phụ thuộc (nếu chưa cài):
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev server):
```bash
npm run dev
```
Trình duyệt sẽ mở tại địa chỉ mặc định `http://localhost:5173`.

### 3. Build sản phẩm:
```bash
npm run build
```

---

## 📌 Ghi chú
Dự án hiện đang ở cấu trúc tối giản ban đầu (không bao gồm database, xác thực đăng nhập hay các tính năng quản trị viên phức tạp).
