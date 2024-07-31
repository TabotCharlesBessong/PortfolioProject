import Teacher from "../models/teacher.model.js";

export const getAllTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.status(200).json({
    success: true,
    teachers,
  });
};
export const createTeacher = async (req, res) => {
  const teacher = new Teacher({
    name: req.body.name,
    email: req.body.email,
    subject: req.body.subject,
  });
  try {
    const newTeacher = await teacher.save();
    res.status(201).json({sucess:true,message:"Teacher Created",newTeacher});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
