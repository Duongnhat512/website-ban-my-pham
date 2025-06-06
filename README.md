# 💄 Hasaki Clone - Fullstack E-Commerce Website

Dự án clone website thương mại điện tử Hasaki.vn, sử dụng ReactJS cho frontend, NestJS/Node.js Express cho backend và PostgreSQL làm cơ sở dữ liệu.

## 🧰 Công nghệ sử dụng

### Frontend
- ReactJS + Vite
- TailwindCSS / Material UI
- Axios
- React Router DOM
- Redux Toolkit (hoặc Context API)
- React Query (tuỳ chọn)

### Backend
- NestJS hoặc ExpressJS
- TypeORM / Prisma
- PostgreSQL
- Passport + JWT Auth
- Swagger (tài liệu API)

### Khác
- Docker (tuỳ chọn)
- Nodemailer (gửi email)
- Mailtrap / SendGrid (test email)
- GitHub Actions (CI/CD - nếu có)

---

## 📂 Cấu trúc thư mục

### `client/` – React Frontend
```
client/
├── src/
│   ├── pages/
│   ├── components/
│   ├── redux/ (hoặc context/)
│   ├── services/ (API calls)
│   └── App.jsx
```

### `server/` – Backend (NestJS hoặc Express)
```
server/
├── src/
│   ├── modules/
│   │   ├── auth/
│   │   ├── users/
│   │   ├── products/
│   │   ├── orders/
│   │   └── ...
│   ├── main.ts
│   └── app.module.ts
```

---

## ⚙️ Cài đặt & Chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/your-username/hasaki-clone.git
cd hasaki-clone
```

### 2. Cài frontend
```bash
cd client
npm install
npm run dev
```

### 3. Cài backend
```bash
cd server
npm install
# Cấu hình .env và database
npm run start:dev
```

---

## 🛒 Chức năng chính

### Người dùng
- Đăng ký, đăng nhập, quản lý tài khoản
- Xem sản phẩm, lọc theo danh mục, thương hiệu, giá
- Thêm vào giỏ hàng, đặt hàng, thanh toán
- Xem lịch sử đơn hàng

### Admin
- CRUD sản phẩm, danh mục, thương hiệu
- Quản lý đơn hàng, người dùng
- Dashboard thống kê

---

## 🔐 Xác thực
- JWT Authentication (Access token & Refresh token)
- Phân quyền: người dùng và admin
- Bảo mật với bcrypt

---

## 📦 Cơ sở dữ liệu (PostgreSQL)

### Một số bảng chính:
- `users`
- `products`
- `categories`
- `orders`
- `order_items`
- `cart_items`
- `brands`
- `reviews`
- `admins`

---

## 📄 Tài liệu API

Chạy backend rồi truy cập:
```
http://localhost:3000/api
```

---

## 📝 Ghi chú
- Có thể mở rộng thêm hệ thống đánh giá sản phẩm, wishlist, flash sale...
- Đảm bảo CORS đúng khi kết nối frontend – backend.

---

## 📌 TODO
- [x] Xây dựng UI
- [x] API auth & product
- [ ] Tích hợp thanh toán (giả lập)
- [ ] Dashboard admin
- [ ] Docker hoá & CI/CD

---

## 📧 Liên hệ
> Tác giả: [Tên bạn]  
> Email: [email@example.com]  
> Github: [github.com/your-username]
