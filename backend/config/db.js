// db.js
const mongoose = require('mongoose');

// Thay đổi chuỗi kết nối theo thông tin của bạn
const uri = 'mongodb+srv://vudat:vudat@cluster0.axa9w.mongodb.net/dat?retryWrites=true&w=majority&appName=Cluster0'; 

const connectDB = async () => {
  try {
    mongoose.set('useCreateIndex', true);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Kết nối thành công tới MongoDB');
  } catch (error) {
    console.error('Kết nối thất bại:', error.message);
    process.exit(1); // Dừng ứng dụng nếu kết nối không thành công
  }
};

module.exports = connectDB;
