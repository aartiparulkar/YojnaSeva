const mongoose = require("mongoose");

const SchemeSchema = new mongoose.Schema({
  scheme_name: { type: String, required: true },
  scheme_type: String,
  disability_type: String,
  min_aid: Number,
  max_aid: Number,
  aid_description: String,
  income_limit: String,
  disability_percent: String,
  category: String,
  age: String,
  distribution_method: String,
  frequency: String,
  application_process: String,
  link: String,
  scheme_under: String,
  region: String,
  locomotor_aid: String,
  visual_aid: String,
  hearing_aid: String,
  mental_aid: String,
});

module.exports = mongoose.model("Scheme", SchemeSchema);
