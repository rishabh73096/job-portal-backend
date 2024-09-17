import express from "express";
import connnetDB from "./database/db.js";
import dotenv from "dotenv";
import cors from "cors";
import NewJobSheetRoutes from "./Routes/NewJobSheetRoutes.js"

const serverapp = express();
dotenv.config(dotenv);
serverapp.use(cors());

// json converted in json formet
serverapp.use(express.json());

// urlencoded use remove search bar space in website
serverapp.use(express.urlencoded());

// import here serve static content
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
