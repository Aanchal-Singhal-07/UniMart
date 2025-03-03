require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ✅ MongoDB Connection with Error Handling
mongoose
  .connect("mongodb://127.0.0.1:27017/unimartDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully!"))
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit if MongoDB connection fails
  });

// ✅ Define Schema
const FormSchema = new mongoose.Schema({
  name: String,
  age: Number,
  hostel: String,
  phone: String,
  course: String,
  objectForSale: String,
  amountExpected: Number,
  photo: String,
});

const FormModel = mongoose.model("Form", FormSchema);

// ✅ Multer Storage for File Upload
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ API Routes
app.post("/submit", upload.single("photo"), async (req, res) => {
  try {
    console.log("Received form data:", req.body); // Debugging
    console.log("Received file:", req.file); // Debugging

    const formData = new FormModel({
      name: req.body.name,
      age: req.body.age,
      hostel: req.body.hostel,
      phone: req.body.phone,
      course: req.body.course,
      objectForSale: req.body.objectForSale,
      amountExpected: req.body.amountExpected,
      photo: req.file ? req.file.filename : "",
    });

    await formData.save();
    res.json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving data:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ Start Server
const PORT = 7878;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
app.get("/getData", async (req, res) => {
  try {
    const data = await FormModel.find();
    res.json(data);
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({ error: error.message });
  }
});
