# 💄 Hasaki Clone - Fullstack E-Commerce Website

Dự án clone website thương mại điện tử Hasaki.vn, sử dụng ReactJS cho frontend, Node.js Express cho backend và PostgreSQL làm cơ sở dữ liệu.

## 🧰 Công nghệ sử dụng

### Frontend
- NextJS
- TailwindCSS
- Axios
- React Router DOM
- Zustand 


### Backend
- ExpressJS
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
FE/
├── client/                      # Frontend Next.js app (nếu tách riêng, hoặc có thể ở root)
│   ├── app/                     # Next.js App Router (Next 13+)
│   │   ├── layout.tsx           # Layout chung toàn app
│   │   ├── page.tsx             # Trang chủ
│   │   ├── products/            # Folder trang sản phẩm
│   │   │   ├── page.tsx         # Danh sách sản phẩm
│   │   │   └── [id]/page.tsx    # Chi tiết sản phẩm
│   │   ├── cart/                # Giỏ hàng
│   │   │   └── page.tsx
│   │   ├── auth/                # Đăng nhập, đăng ký
│   │   │   ├── login/page.tsx
│   │   │   └── register/page.tsx
│   │   ├── profile/             # Trang người dùng
│   │   └── checkout/            # Thanh toán
│   ├── components/              # Các component UI tái sử dụng
│   │   ├── ProductCard.tsx
│   │   ├── Navbar.tsx
│   │   └── ...
│   ├── stores/                  # Zustand stores quản lý trạng thái
│   │   ├── cartStore.ts
│   │   └── userStore.ts
│   ├── services/                # API client, fetch logic
│   │   └── productApi.ts
│   ├── utils/                   # Các hàm tiện ích (format tiền, validate, ...)
│   ├── hooks/                   # Custom React hooks
│   ├── public/                  # Ảnh, fonts, favicon,...
│   ├── styles/                  # CSS / Tailwind config
│   ├── next.config.js           # Cấu hình Next.js
│   ├── tailwind.config.js       # Cấu hình TailwindCSS
│   └── tsconfig.json            # Cấu hình TypeScript
│

### `server/` – Backend
```
├── server/                      # Backend Node.js Express
│   ├── src/
│   │   ├── controllers/         # Xử lý logic controller (route handlers)
│   │   ├── routes/              # Định nghĩa route
│   │   ├── middlewares/         # Middleware
│   │   ├── services/            # Logic nghiệp vụ riêng (giao tiếp DB, API)
│   │   ├── prisma/              # Prisma client
│   │   │   └── client.ts        # Prisma client instance
│   │   ├── utils/               # Hàm tiện ích backend
│   │   ├── app.ts               # Tạo app express
│   │   └── server.ts            # Khởi chạy server
│   ├── prisma/
│   │   ├── schema.prisma        # Định nghĩa schema DB Prisma
│   │   └── migrations/          # Migrations Prisma
│   ├── .env                    # Biến môi trường (db, jwt, ...)
│   ├── package.json
│   └── tsconfig.json
│
├── docker-compose.yml           # Docker dev/production (nếu cần)
├── .gitignore
├── README.md
└── package.json   

---

## ⚙️ Cài đặt & Chạy dự án

### 1. Clone repo
```bash
git clone https://github.com/Duongnhat512/website-ban-my-pham.git

```

### 2. Cài frontend
```bash
cd FE
npm install
npm run dev
```

### 3. Cài backend
```bash
cd BE
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
- [ ] Xây dựng UI
- [ ] API auth & product
- [ ] Tích hợp thanh toán (giả lập)
- [ ] Dashboard admin
- [ ] Docker hoá & CI/CD

---

## 📧 Liên hệ
> Tác giả: Trần Ngọc Phát hoặc Nguyễn Nhất Dương  
> Email: tnphat203@gmail.com hoặc duongnhat512@gmail.com  
> Github: [httpgithub.com/tnphat203](https://github.com/tnphat203) hoặc [github.com/duongnhat512](https://github.com/Duongnhat512)
