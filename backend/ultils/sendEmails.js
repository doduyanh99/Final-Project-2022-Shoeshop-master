const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "anhddgcd17043@fpt.edu.vn",
      pass: "Congatheki22!",
    },
  });

  const mailOptions = {
    form: "anhddgcd17043@fpt.edu.vn",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;