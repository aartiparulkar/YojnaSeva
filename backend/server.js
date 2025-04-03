require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");


const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

  // Use Auth Routes
app.use("/api/auth", authRoutes);


// Prediction Route
app.post("/predict", async (req, res) => {
    try {
        const response = await axios.post("http://127.0.0.1:5001/predict", req.body);
        res.json(response.data);
    } catch (error) {
        console.error("Prediction Error: ", error.message || error);
        res.status(500).json({ error: "Prediction failed" });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
