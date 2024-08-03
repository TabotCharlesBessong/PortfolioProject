import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  grade: {
    type: String,
    required: true,
  },
});

const Class = mongoose.model("Classes", classSchema);
export default Class
