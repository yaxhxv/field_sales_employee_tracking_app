import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String,
    enum: ['Travel', 'Food', 'Stay', 'Misc'],
    required: true,
  },
  amount: { type: Number, required: true },
  receiptImage: { type: String }, // URL to image
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Expense', expenseSchema);
