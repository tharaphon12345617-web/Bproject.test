import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
  company: String,
  position: String,
  period: String,
  responsibilities: String,
});

const ProfileSchema = new mongoose.Schema({
  userId: String,
  age: Number,
  gender: String,
  experience: Number,
  skills: [String],
  certificates: [String],
  workHistory: [WorkSchema],
  available: { type: Boolean, default: true },
  image: String,
});

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema)