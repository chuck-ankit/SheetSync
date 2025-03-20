import mongoose from 'mongoose';

const columnSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: {
    type: String,
    enum: ['text', 'date'],
    default: 'text',
  },
  isCustom: {
    type: Boolean,
    default: false,
  },
});

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  columns: [columnSchema],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

tableSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('Table', tableSchema); 