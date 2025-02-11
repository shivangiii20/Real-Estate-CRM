const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  type: { type: String, enum: ["Residential", "Commercial", "Land"], required: true },
  location: { type: String, required: true },
  size: { type: String },
  budget: { type: Number, required: true },
  availability: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);
