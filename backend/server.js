// server.js
const express = require('express');
const connectDB = require('./config/db'); // Import kết nối MongoDB
const infoRoutes = require('./routes/infoRoutes'); // Import routes cho info

const app = express();

const cors = require('cors');
app.use(cors());


// Kết nối tới MongoDB
connectDB();

// Middleware để phân tích cú pháp JSON
app.use(express.json());

// Sử dụng route cho các yêu cầu liên quan tới "info"
app.use('/api/info', infoRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
