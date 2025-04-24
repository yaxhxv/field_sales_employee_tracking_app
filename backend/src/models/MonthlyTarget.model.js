import mongoose from 'mongoose';

const targetSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    month: {type: String, required: true}, // e.g. "2025-04"
    category: {type: String}, // Optional: region/product/etc.
    targetAmount: {type: Number, required: true},
    achievedAmount: {type: Number, default: 0},
  },
  {timestamps: true},
);

export default mongoose.model('Target', targetSchema);
