import express from "express"
import cors from "cors";
import dotenv from 'dotenv';
import { connectDB } from "./utils/dbConfig.js";
import resumeRoutes from "./routes/resumeRoutes.js"
import loginRoutes from "./routes/loginRoutes.js"
// Initialize the Express app
const app = express();

app.use(express.json());
app.use(cors({origin: ["http://localhost:5000","http://localhost:5173"], credentials: true}));
dotenv.config();

app.use("/portfolio",resumeRoutes);
app.use("/portfolio_api", loginRoutes);





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
  connectDB()
});
