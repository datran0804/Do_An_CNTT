const express = require('express');
const Info = require('../models/Comics');
const { getAllComics, createComic, getComicById, updateComic, deleteComic } = require('../controllers/comicsController');
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
router.get('/', getAllComics);

// Route để tạo tài liệu mới
router.post('/', createComic);

// Route để lấy tài liệu theo ID
router.get('/:id', getComicById);

// Route để cập nhật tài liệu theo ID
router.put('/:id', updateComic);

// Route để xóa tài liệu theo ID
router.delete('/:id', deleteComic);

router.get('/search', async (req, res) => {
    try {
      const query = req.query.q; // Lấy giá trị từ query parameter 'q'
      const results = await Comic.find({
        title: { $regex: query, $options: 'i' } // Tìm kiếm theo tiêu đề (không phân biệt hoa thường)
      });
      res.json(results); // Trả về kết quả tìm kiếm
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
  });

module.exports = router;
