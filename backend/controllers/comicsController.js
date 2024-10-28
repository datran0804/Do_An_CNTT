// controllers/comicsController.js
const Comic = require('../models/Comics'); 

class ComicsController {
  // Lấy tất cả tài liệu trong collection 'comics'
  getAllComics = async (req, res) => {
    try {
      const comics = await Comic.find();
      res.status(200).json(comics);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
  };

  // Tạo tài liệu mới
  createComic = async (req, res) => {
    const comic = new Comic(req.body);
    try {
      const newComic = await comic.save();
      res.status(201).json({ message: 'Dữ liệu đã được lưu thành công!', data: newComic });
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi thêm: ' + error.message });
    }
  };

  // Các phương thức khác (sửa, xóa)
  getComicById = async (req, res) => {
    try {
      const comic = await Comic.findById(req.params.id);
      if (!comic) return res.status(404).json({ message: 'Không tìm thấy' });
      res.json(comic);
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
  };

  // Cập nhật tài liệu theo ID
  updateComic = async (req, res) => {
    try {
      const updatedComic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedComic) return res.status(404).json({ message: 'Không tìm thấy' });
      res.json(updatedComic);
    } catch (error) {
      res.status(400).json({ message: 'Lỗi khi cập nhật: ' + error.message });
    }
  };

  // Xóa tài liệu theo ID
  deleteComic = async (req, res) => {
    try {
      const deletedComic = await Comic.findByIdAndDelete(req.params.id);
      if (!deletedComic) return res.status(404).json({ message: 'Không tìm thấy' });
      res.json({ message: 'Xóa thành công' });
    } catch (error) {
      res.status(500).json({ message: 'Lỗi server: ' + error.message });
    }
  };
}

module.exports = new ComicsController();
