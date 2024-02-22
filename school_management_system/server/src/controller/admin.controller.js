const bcrypt = require("bcrypt");
const admin = require("../models/admin");

const adminRegister = async (req, res) => {
  try {
    const { name, email, password, schoolName } = req.body;

    // Check if the admin already exists
    const existingAdmin = await admin.findOne({ email });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ error: `Admin with email address ${email} already exists` });
    }

    const existingSchool = await admin.findOne({ schoolName });
    if (existingSchool) {
      return res
        .status(400)
        .json({ error: `School with name ${schoolName} already exists` });
    }

    // Hash the password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new admin
    const newAdmin = new admin({
      name,
      email,
      password: hashedPassword,
      schoolName,
    });
    await newAdmin.save();

    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {adminRegister}
