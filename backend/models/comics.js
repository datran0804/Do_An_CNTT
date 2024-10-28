const mongoose = require('mongoose');
const Counter = require('./Counter');

// Đổi tên schema từ infoSchema sang comicsSchema
const comicsSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: { type: String, required: true },
  vol: { type: String, required: true },
  ch: { type: String, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
}, { timestamps: true });

// Hàm lấy giá trị ID tiếp theo
async function getNextSequenceValue(sequenceName) {
    const sequenceDocument = await Counter.findOneAndUpdate(
      { name: sequenceName },
      { $inc: { sequenceValue: 1 } },
      { new: true, upsert: true }
    );
  
    return sequenceDocument.sequenceValue;
}

// Middleware để tự động gán id
comicsSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.id = await getNextSequenceValue('comicsId');
  }
  next();
});

const Comic = mongoose.model('comics', comicsSchema);

module.exports = Comic;
