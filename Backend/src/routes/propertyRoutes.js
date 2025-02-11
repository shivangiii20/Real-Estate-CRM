const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");

router.get("/", propertyController.getProperties);
router.post("/create", propertyController.createProperty);
router.put("/:id", propertyController.updateProperty);


module.exports = router;
