import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectname: String,
    technologies: String,
    websites: String,
    github: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Home || mongoose.models("Project", ProjectSchema);

export default Project;
