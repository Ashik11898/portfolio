import  ProfileModel from "../models/profileModel.js"
import ValidUsermodel from "../models/userModel.js"; 
import Ajv from "ajv";
import { profileSchema } from "../validations/profileSchema.js";

const ajv = new Ajv();

export const addResumeData = async (req, res) => {
    const { technical_skills, experience, education, personal,userid } = req.body;

    const validate = ajv.compile(profileSchema);
    const isValid = validate(req.body);
   
    if (!isValid) {
        let pathKey = validate.errors[0]?.instancePath
        return res.status(400).json({ path:pathKey, message: validate.errors[0].message });
    }
   
    // Check if the user exists
    const user = await ValidUsermodel.find({ _id: userid });
    if (!user.length) return res.status(400).json({ msg: "Invalid user" });

    // Check if the ProfileData exists
    const isProfileData = await ProfileModel.find({userid})

    await ProfileModel.updateOne(
        { userid },
        {$set: { technical_skills, experience, education, personal },},
        { upsert: true }
      );
      
      const statusCode = isProfileData.length > 0 ? 200 : 201;
      const message = isProfileData.length > 0 ? 'Profile updated successfully' : 'Profile created successfully';
      
      return res.status(statusCode).json({ message });
      
};
