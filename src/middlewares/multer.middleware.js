import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, "/public/temp");
  },
  filename: function (req, file, cd) {
    cb(null, file.originalname);
  },
});

export const upload = multer({ storage });