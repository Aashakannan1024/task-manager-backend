import connectDB from "./config/db.config";
import express, { Request, Response } from "express";
import cors from "cors";

 
 
const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));
connectDB();
 
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hiii" });
});
 

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});