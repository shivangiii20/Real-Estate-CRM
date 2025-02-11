const express = require("express");
const router = express.Router();
const leadController = require("../controllers/leadController");

router.get("/", leadController.getLeads);
router.post("/create", leadController.createLead);
router.put("/:id", leadController.updateLead);


module.exports = router;
