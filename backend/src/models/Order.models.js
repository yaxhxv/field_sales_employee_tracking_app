import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customerName: { type: String, required: true },
  products: [
    {
      name: String,
      quantity: Number,
      price: Number,
    }
  ],
  deliveryDate: { type: Date },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Delivered'],
    default: 'Pending',
  },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
