import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofexperience: String,
    yearofexperience: String,
    noofclient: String,
    skills: String,
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.models("About", AboutSchema);

export default About;
