const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const adminRouter = require("./routes/admin.router")
const studentRouter = require("./routes/student.router")
const sclassRouter = require("./routes/sclass.router")

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(express.json({limit:'10mb'}))
app.use(cors())
app.use("/api/admin",adminRouter)
app.use("/api/student",studentRouter)
app.use("/api/sclass",sclassRouter)

mongoose.connect(process.env.MONGO_URI).then(console.log("Connected to the database successfully")).catch((err) => console.log("Error connecting to the database"))

app.listen(PORT,() => {
  console.log(`The server is running at port number ${PORT}.... `)
})
