import mongoose from 'mongoose';

const dayEndReportSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  attendanceStatus: { type: String },
  totalVisits: { type: Number },
  placedOrders: { type: Boolean },
  collectionsDone: { type: Boolean },
  expensesLogged: { type: Boolean },
  remarks: { type: String },
}, { timestamps: true });

export default mongoose.model('DayEndReport', dayEndReportSchema);
