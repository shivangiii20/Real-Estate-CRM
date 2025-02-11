const Property = require("../models/propertyModel");

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const { type, location, size, budget, availability } = req.body;
    const newProperty = await Property.create({ type, location, size, budget, availability });
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



