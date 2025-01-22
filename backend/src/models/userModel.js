import mongoose from "mongoose";

// Define the schema
const validUsersSchema = new mongoose.Schema(
    {
    
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            minlength: 6, // Use `minlength` instead of `min` for strings
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: false,
        },
    },
    {timestamps:true}
);

// Create and export the model
const ValidUsermodel = mongoose.model("validusers", validUsersSchema);
export default ValidUsermodel;
