const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const ErrorHandler = require("./utils/ErrorHandler")

const app = express()
dotenv.config()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin:"*"}))

app.use("/",express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true,limit:"50mb"}))

app.use(ErrorHandler)

module.exports = app