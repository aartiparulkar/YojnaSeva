require("dotenv").config();
const mongoose = require("mongoose");
const csvtojson = require("csvtojson");
const Scheme = require("./models/Schemes"); // Ensure correct file name

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Convert CSV to JSON and insert into MongoDB
const importData = async () => {
  try {
    const schemes = await csvtojson().fromFile("./data/schemes.csv");

    // Clean data before inserting
    const cleanedSchemes = schemes.map((row) => ({
      scheme_name: row.scheme_name,
      scheme_type: row.scheme_type,
      disability_type: row.disability_type,
      min_aid: Number(row.min_aid.replace(/,/g, "")), // Remove commas and convert to number
      max_aid: Number(row.max_aid.replace(/,/g, "")), // Remove commas and convert to number
      aid_description: row.aid_description,
      income_limit: row.income_limit,
      disability_percent: row.disability_percent,
      category: row.category,
      age: row.age,
      distribution_method: row.distribution_method,
      frequency: row.frequency,
      application_process: row.application_process,
      link: row.link,
      scheme_under: row.scheme_under,
      region: row.region,
      locomotor_aid: row.locomotor_aid,
      visual_aid: row.visual_aid,
      hearing_aid: row.hearing_aid,
      mental_aid: row.mental_aid,
    }));

    await Scheme.insertMany(cleanedSchemes);
    console.log("Schemes Imported Successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error Importing Schemes:", error);
    mongoose.connection.close();
  }
};

importData();
