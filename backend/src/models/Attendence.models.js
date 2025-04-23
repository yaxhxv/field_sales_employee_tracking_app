import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  punchIn: { type: Date },
  punchOut: { type: Date },
  punchInLocation: {
    lat: Number,
    lng: Number,
  },
  punchOutLocation: {
    lat: Number,
    lng: Number,
  },
}, { timestamps: true });

export default mongoose.model('Attendance', attendanceSchema);
