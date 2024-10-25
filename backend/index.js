const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/infoRoutes');

const app = express();
const PORT = 3000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/comic')
  .then(() => console.log('Kết nối MongoDB thành công'))

  .catch((err) => console.error('Không thể kết nối MongoDB', err));


// Middleware
app.use(bodyParser.json());
app.use('/info', userRoutes);

// Route mặc định
app.get('/', (req, res) => {
    res.send('API is running');
});

// Lắng nghe server
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
