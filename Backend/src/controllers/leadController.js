const Lead = require("../models/leadModel");

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLead = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const newLead = await Lead.create({ name, phone });
    res.status(201).json(newLead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const updatedLead = await Lead.findByIdAndUpdate(id, { name, phone }, { new: true });
    
    if (!updatedLead) {
      return res.status(404).json({ message: "Lead not found" });
    }
    
    res.json(updatedLead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

