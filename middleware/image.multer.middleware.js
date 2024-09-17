import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "./public/uploads", 
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); 
  },
});


const upload = multer({
  storage: storage,
}).fields([
  { name: "imageDocument", maxCount: 1 }, 
  { name: "uploadInventory", maxCount: 1 }, 
]);

export default upload;
