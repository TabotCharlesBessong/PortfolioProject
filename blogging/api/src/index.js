const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(express.json({limit:'10mb'}))
app.use(cors())

mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to the database successfully")).catch((err) => console.log("Error connecting to the database"))

app.listen(PORT,() => {
  console.log(`The server is running at port number ${PORT}.... `)
})
