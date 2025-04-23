import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customerName: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMode: {
    type: String,
    enum: ['Cash', 'Bank Transfer', 'Cheque', 'UPI'],
    required: true,
  },
  paymentProof: { type: String }, // Optional image URL
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Collection', collectionSchema);
