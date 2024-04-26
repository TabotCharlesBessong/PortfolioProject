const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "ebezebeatrice@gmail.com",
      pass: "hsxpyeudylwxfubh",
    },
  });
  const mailOptions = {
    from: process.env.VERIFICATION_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
