import { Document, model, Schema } from "mongoose";

export interface newsLetter extends Document{
  subject: string
  message: string
}

const newsletterSchema = new Schema<newsLetter>({
  subject: {
    type: String,
    required: true
  },
  message:{
    type:String,
    required:true
  }
});

const NewsLetterModel = model<{email:string}>("newsLetter", newsletterSchema, "newsletter");
export default NewsLetterModel