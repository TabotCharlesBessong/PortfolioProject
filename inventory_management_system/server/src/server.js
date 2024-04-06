const connectDB = require("./config/database");
const app = require("./index")

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT,() => {
  console.log(`The server is live and running on port number ${PORT}....`)
})

console.log("Hello world!");