import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { generateAccessToken, generateRefreshToken,validateEmail,validateUnexpectedFields } from "../utils/tokenUtils.js";
import ValidUsermodel from "../models/userModel.js"

export const handleLogin = async(req, res) => {
  const { email, password,...extraFields } = req.body;
  validateUnexpectedFields(extraFields,res);
  const user =  await ValidUsermodel.findOne({email});
  const isValidPassword = user && await bcrypt.compare(password, user.password);

  if(!user || !isValidPassword){return res.status(401).json({ message: "Invalid credentials" });}

    const accessToken = generateAccessToken({ password, email });
    const refreshToken = generateRefreshToken({ email });

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({ isValid: true, name: user.username, accessToken,userdata:user });
  
};

//access token verification
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("access token error expired");
      
      return res.status(403).json({ message: "UnAuthorized" });
    }
   console.log("access token verified");
   
   req.user = decoded;
   next();
  });


};

export const verifyRefreshToken = (req, res) => {
  const cookies = req.cookies.jwt;
 
  if (!cookies) return res.status(401).json({ message: "No token provided, user needs to login" });

  jwt.verify(cookies, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "refresh Token expired" });
    const accessToken = generateAccessToken({ email: decoded.email, password: decoded.password });
    res.status(200).json({ accessToken });
  });



};

export const addingEmployes = async(req, res) => {
  console.log("req.body",req.body);
  
  let { email, password, confirmpassword, fullname, gender,...extraFields } = req.body;
  validateUnexpectedFields(extraFields,res);

  if(!email || !password || !confirmpassword || !fullname || !gender){
    return res.status(400).json({ message: "please fill the fields" });
  }
  if(!validateEmail(email)){
    return res.status(400).json({ message: "Invalid email Id" });
  }

  if(password !== confirmpassword){
      return res.status(400).json({ message: "password does not match" });
  }
  if(password.length < 6){
    return res.status(400).json({ message: "Password should be minimum 6 characters " });
  }
  if (gender !== "female" && gender !== "male" && gender !== "other"){
    return res.status(400).json({ message: "Invalid Gender Type " });
  }

  const userExists = await ValidUsermodel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "email already exists" });
  }
  
  const saltRounds = 6;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  let payload = {fullname,email,"password":hashedPassword,gender,"role":"user"}
  const userAdded = await ValidUsermodel.create(payload)
  res.status(201).send({"mesage":"Employee Register Succesfully","data":userAdded});
};


