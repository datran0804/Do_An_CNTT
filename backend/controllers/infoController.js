// controllers/infoController.js
const Info = require('../models/comics');

// Lấy tất cả tài liệu trong collection 'info'
const getAllInfo = async (req, res) => {
  try {
    const infos = await Info.find();
    res.status(200).json(infos);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server: ' + error.message });
  }
};

// Tạo tài liệu mới
const createInfo = async (req, res) => {
  const info = new Info(req.body);
  try {
    const newInfo = await info.save();
    res.status(201).json({ message: 'Dữ liệu đã được lưu thành công!', data: newInfo });
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi thêm: ' + error.message });
  }
};

// Các phương thức khác (sửa, xóa)
const getInfoById = async (req, res) => {
  try {
    const info = await Info.findById(req.params.id);
    if (!info) return res.status(404).json({ message: 'Không tìm thấy' });
    res.json(info);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server: ' + error.message });
  }
};

// Cập nhật tài liệu theo ID
const updateInfo = async (req, res) => {
  try {
    const updatedInfo = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedInfo) return res.status(404).json({ message: 'Không tìm thấy' });
    res.json(updatedInfo);
  } catch (error) {
    res.status(400).json({ message: 'Lỗi khi cập nhật: ' + error.message });
  }
};

// Xóa tài liệu theo ID
const deleteInfo = async (req, res) => {
  try {
    const deletedInfo = await Info.findByIdAndDelete(req.params.id);
    if (!deletedInfo) return res.status(404).json({ message: 'Không tìm thấy' });
    res.json({ message: 'Xóa thành công' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server: ' + error.message });
  }
};

module.exports = { getAllInfo, createInfo, getInfoById, updateInfo, deleteInfo };
