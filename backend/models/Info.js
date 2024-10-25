const mongoose = require('mongoose');
const Counter = require('./Counter');

const infoSchema = new mongoose.Schema({
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
infoSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.id = await getNextSequenceValue('infoId'); // Gọi hàm để lấy id mới
  }
  next();
});

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;
