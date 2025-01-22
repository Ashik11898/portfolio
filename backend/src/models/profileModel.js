import mongoose from "mongoose";

// Project schema
const projectSchema = new mongoose.Schema({
  name: { type: String, required: false },
  responsibilities: { type: [String], default: [] },
  technologies: { type: [String], default: [] },
});

// Experience schema
const experienceSchema = new mongoose.Schema({
  company: { type: String, required: false },
  location: { type: String, required: false },
  role: { type: String, required: false },
  duration: { type: String, required: false },
  projects: { type: [projectSchema], default: [] },
});

// Education schema
const educationSchema = new mongoose.Schema({
  degree: { type: String, required: false },
  institution: { type: String, required: false },
  duration: { type: String, required: false },
});

// Personal schema
const personalSchema = new mongoose.Schema({
  name: { type: String, required: false },
  experience: { type: String, required: false },
  one_line: { type: String, required: false },
  role: { type: [String], default: [] },
  role_heading: { type: [String], default: [] },
});

// Profile schema
const profileSchema = new mongoose.Schema({
  userid: { type: String, unique: true, required: true },  // Custom ID field
  technical_skills: { type: [String], default: [] },
  experience: { type: [experienceSchema], default: [] },
  education: { type: [educationSchema], default: [] },
  personal: { type: personalSchema, default: {} },
});

// Create the model
const ProfileModel = mongoose.model('resumeData', profileSchema);

export default ProfileModel;
