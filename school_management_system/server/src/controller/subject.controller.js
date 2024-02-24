const Subject = require("../models/subject");

const subjectCreate = async (req, res) => {
  try {
    const subjects = req.body.subjects.map((subject) => ({
      subName: subject.subName,
      subCode: subject.subCode,
      sessions: subject.sessions,
    }));

    const existingSubjectBySubCode = await Subject.findOne({
      "subCode": subjects[0].subCode,
      school: req.body.adminID,
    });

    if (existingSubjectBySubCode) {
      res.send({
        message: "Sorry this subcode must be unique as it already exists",
      });
    } else {
      const newSubjects = subjects.map((subject) => ({
        ...subject,
        sclassName: req.body.sclassName,
        school: req.body.adminID,
      }));

      const result = await Subject.insertMany(newSubjects);
      res.send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {subjectCreate}