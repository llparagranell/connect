const express = require("express");
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(cors());
const dotenv = require("dotenv");

dotenv.config();

app.use("/api/users", require("./routes/userRoutes"));

mongoose
  .connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err, "something went wrong"));


const multer = require("multer");
const Post = require("./models/post");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
    const image = req.file.filename;
    const name = req.body.name;
    const text = req.body.text;
     try {
      await Post.create({
        image,
        name,
        text
      })
          res.json({ status: "ok" });
     } catch (error) {
      res.json({ status: error });
     }

})

app.get("/get-image", async (req, res) => {
  try {
    Post.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {
    res.json({ status: error });
  }
});

app.listen(5000, console.log("server started on 5000"));
