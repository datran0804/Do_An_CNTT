const express = require('express');
const router = express.Router();

const infoController = require('../controllers/infoController')


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
router.get('/', infoController.getAllInfo);

// Route để tạo tài liệu mới
router.post('/', infoController.createInfo);

// Route để lấy tài liệu theo ID
router.get('/:id', infoController.getInfoById);

// Route để cập nhật tài liệu theo ID
router.put('/:id', infoController.updateInfo);

// Route để xóa tài liệu theo ID
router.delete('/:id', infoController.deleteInfo);

module.exports = router;
