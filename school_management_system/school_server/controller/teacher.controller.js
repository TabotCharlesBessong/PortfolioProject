import { handleValidationError } from "../middlewares/errorHandler.js";
import Teacher from "../models/teacher.model.js";

export const getAllTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      success: true,
      teachers,
    });   
  } catch (error) {
    next(error)
  }
};
export const createTeacher = async (req, res,next) => {
  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
  });
  if (!teacher) {
    handleValidationError("Please Fill Full Form!", 400);
  }
  try {
    const newTeacher = await teacher.save();
    res.status(201).json({sucess:true,message:"Teacher Created",newTeacher});
  } catch (err) {
    res.status(400).json({ message: err.message });
    next(err)
  }
};
