// Bước 1: Import các gói cần thiết
const express = require('express');
const app = express();
const port = 3000; // Chọn cổng để chạy server

// Bước 2: Middleware (Nếu bạn muốn xử lý JSON requests)
app.use(express.json());

// Bước 3: Định nghĩa các route (Ví dụ một route đơn giản)
app.get('/', (req, res) => {
  res.send('Hello World!'); // Trả về câu trả lời khi truy cập đường dẫn '/'
});

// Thêm một route khác (Ví dụ trả về thông tin JSON)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Đây là API trả về JSON', status: 200 });
});

// Bước 4: Lắng nghe cổng và khởi chạy server
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
