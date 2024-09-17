import express from "express";
import { NewJobSheet } from "../Controller/NewJobSheetController.js";
import upload from "../middleware/image.multer.middleware.js";

const NewJobSheetRoutes = express.Router();

NewJobSheetRoutes.post("/NewJobSheet",NewJobSheet,upload);

export default NewJobSheetRoutes;
