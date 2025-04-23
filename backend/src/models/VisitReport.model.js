import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customerName: { type: String, required: true },
  visitType: {
    type: String,
    enum: ['New Business', 'Follow-up', 'Issue Resolution'],
    required: true,
  },
  notes: { type: String },
  location: {
    lat: Number,
    lng: Number,
  },
  images: [String], // Array of image URLs
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model('Visit', visitSchema);
