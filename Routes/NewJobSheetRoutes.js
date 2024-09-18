import express from "express";
import { getAllJobSheets, getProfileByClientId, NewJobSheet,updateJobSheet } from "../Controller/NewJobSheetController.js";
import upload from "../middleware/image.multer.middleware.js";

const NewJobSheetRoutes = express.Router();

NewJobSheetRoutes.post("/NewJobSheet",NewJobSheet,upload);
NewJobSheetRoutes.get("/getthedetails",getAllJobSheets);
NewJobSheetRoutes.put("/profile/",getProfileByClientId)
NewJobSheetRoutes.put("/updateJobSheet/:clientId",updateJobSheet);

export default NewJobSheetRoutes;
