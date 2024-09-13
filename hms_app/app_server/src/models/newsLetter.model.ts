import { model, Schema } from "mongoose";

const newsletterSchema = new Schema<{email:string}>({
  email: {
    type: String,
  },
});

const NewsLetterModel = model<{email:string}>("newsLetter", newsletterSchema, "newsletter");
export default NewsLetterModel