import express from "express";
import { getAllJobSheets, NewJobSheet,updateJobSheet } from "../Controller/NewJobSheetController.js";
import upload from "../middleware/image.multer.middleware.js";

const NewJobSheetRoutes = express.Router();

NewJobSheetRoutes.post("/NewJobSheet",NewJobSheet,upload);
NewJobSheetRoutes.get("/getthedetails",getAllJobSheets);
NewJobSheetRoutes.get("/updateJobSheet",updateJobSheet);

export default NewJobSheetRoutes;
