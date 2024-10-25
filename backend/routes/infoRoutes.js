const express = require('express');
const { getAllInfo, createInfo, getInfoById, updateInfo, deleteInfo } = require('../controllers/infoController');
const router = express.Router();


// function getFormattedDate() {
//   const date = new Date();
  
//   // Múi giờ Việt Nam là UTC+7, thêm 7 giờ vào
//   const vietnamTime = new Date(date.getTime() + 7 * 60 * 60 * 1000);
  
//   const yy = vietnamTime.getFullYear().toString().slice(-2);
//   const mm = (vietnamTime.getMonth() + 1).toString().padStart(2, '0');
//   const dd = vietnamTime.getDate().toString().padStart(2, '0');
//   const hour = vietnamTime.getHours().toString().padStart(2, '0');
//   const min = vietnamTime.getMinutes().toString().padStart(2, '0');
//   const sec = vietnamTime.getSeconds().toString().padStart(2, '0');
  
//   const formattedDate = `${yy}/${mm}/${dd} ${hour}:${min}:${sec}`;
  
//   return {
//     formattedDate,  
//     dateObject: vietnamTime 
//   };
// }


// Lấy danh sách truyện
router.get('/', getAllInfo);

// Route để tạo tài liệu mới
router.post('/', createInfo);

// Route để lấy tài liệu theo ID
router.get('/:id', getInfoById);

// Route để cập nhật tài liệu theo ID
router.put('/:id', updateInfo);

// Route để xóa tài liệu theo ID
router.delete('/:id', deleteInfo);

module.exports = router;
