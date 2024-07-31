import Student  from "../models/student.model.js"


  export const getAllStudents = async (req, res) => {
    const students = await Student.find();
    res.status(200).json({
      success: true,
      students,
    });
  }
  export const createStudent = async (req, res) => {
    console.log(req.body);
    const { name, registrationNumber, grade } = req.body;
    if (!name || !registrationNumber || !grade) {
      return next("Please Fill Full Form!", 400);
    }
    await Student.create({ name, registrationNumber, grade });
    res.status(200).json({
      success: true,
      message: "Student Created!",
    });
  }

