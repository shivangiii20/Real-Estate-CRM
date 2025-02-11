const express = require('express') //dependency //class
const bodyParser = require('body-parser') //dependeny
const cors = require('cors') //dependency
const db = require('./src/db/index.js') //
const leadRoutes = require('./src/routes/leadRoutes.js')
const propertyRoutes = require('./src/routes/propertyRoutes.js')
const app = express()  //objects
const apiPort = 8888

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use("/api/leads", leadRoutes);
app.use("/api/properties", propertyRoutes);
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))