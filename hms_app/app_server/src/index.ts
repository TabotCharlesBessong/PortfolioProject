import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

dotenv.config()

const URI = process.env.MONGO_URI as string
const port = process.env.PORT as string

const app = express()

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5137"],
  })
);

mongoose
  .connect(URI)
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`The server is running on port number ${port}....`);
});