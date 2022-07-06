const nodemailer = require("nodemailer");
import config from "../config";

const generateTransporter = () => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.mailUser, // generated ethereal user
      pass: config.mailPass, // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    }
  });
  return transporter;
}


export const sendCustomEmail = async (mailOptions) => {
  let transporter = generateTransporter();
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}