import express from "express";
import connnetDB from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import NewJobSheetRoutes from "./Routes/NewJobSheetRoutes.js"

const serverapp = express();
dotenv.config(dotenv);
serverapp.use(cors());
serverapp.use(express.json());
serverapp.use(express.urlencoded());
serverapp.use(express.static("public"));

serverapp.use("/NewJobSheet",NewJobSheetRoutes);

serverapp.get("*",(req,res)=>{
res.send("404 page not found")
})

connnetDB()

const PORT = process.env.PORT || 3200;
serverapp.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
