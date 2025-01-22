import jwt from "jsonwebtoken";

export const generateAccessToken = (payload) => {  
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY });
};

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY });
};

export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

export const validateUnexpectedFields = (extraFields, res) => {
  if (Object.keys(extraFields).length > 0) {
    return res.status(400).json({
        error: "Unexpected fields in request body.",
        unexpectedFields: Object.keys(extraFields)
    });
}
};
