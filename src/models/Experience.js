import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  position: String,
  company: String,
  duration: String,
},  { timestamps: true });

const Experience =
  mongoose.models.Home || mongoose.models("Experience", ExperienceSchema);

export default Experience;
