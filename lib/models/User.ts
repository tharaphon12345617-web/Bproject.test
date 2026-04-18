import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  level: { type: String, required: true },
  phone: { type: String, required: true },
  province: { type: String, required: true },

  // 👇 เพิ่มตรงนี้
  role: {
    type: String,
    default: "user", // user | admin
  },

  age: Number,
  gender: String,
  experience: Number,
  certificates: [String],
  skills: [String],

  workHistory: [
    {
      company: String,
      role: String,
      years: String,
      responsibility: String,
    },
  ],

  profileImage: String,
  isSafetyOfficer: { type: Boolean, default: false },
  safetyOfficerLicense: String,
  safetyOfficerCertificate: String,
  safetyOfficerLevel: String,
  isApproved: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  otpCode: String,
  otpExpiresAt: Date,
  otpRefreshCount: { type: Number, default: 0 },
},
{ timestamps: true });

export default mongoose.models.User || mongoose.model("User", UserSchema);