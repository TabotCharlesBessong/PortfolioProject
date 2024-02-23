const mongoose = require("mongoose")

const SclassSchema = new mongoose.Schema({
  sclassName:{
    type:String,
    required:true
  },
  school:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Admin"
  }
},{timestamps:true})

module.exports = mongoose.model("Sclass",SclassSchema)