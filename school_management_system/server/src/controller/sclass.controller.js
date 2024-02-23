const Sclass = require("../models/sclass");

const sclassCreate = async (req, res) => {
  try {
    const newSclass = new Sclass({
      sclassName: req.body.sclassName,
      school: req.body.adminID,
    });
    const existingClassByName = await Sclass.findOne({
      sclassName: req.body.sclassName,
      school: req.body.adminID,
    });
    if (existingClassByName)
      res.send({ message: "Sorry this class name already exists!" });
    else {
      const result = await newSclass.save()
      res.send(result);
    }
  } catch (error) {
    res.send({ message: "Error creating the class" });
  }
};

module.exports = { sclassCreate };
