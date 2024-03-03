import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default:
        "https://yt3.ggpht.com/yti/ANjgQV9-6fuOGSPBD61fKCsisWJtFtaLjR9D26pekaShFw=s108-c-k-c0x00ffffff-no-rj",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
