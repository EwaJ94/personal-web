import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import pkg from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const { json } = pkg;
const app = express();
app.use(cors());
app.use(json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REACT_APP_MAIL, 
    pass: process.env.REACT_APP_PASSWORD
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP připojení selhalo:", error);
  } else {
    console.log("SMTP připojení úspěšné!");
  }
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "ewa.urbasova@gmail.com",
    subject: `Nová zpráva od ${name}`,
    text: `Zpráva od: ${name} (${email})\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Email nešel odeslat.");
    } else {
      console.log("Email odeslán: " + info.response);
      res.status(200).send("Email odeslán.");
    }
  });
});

app.listen(5000, () => {
  console.log("Server běží na http://localhost:5000");
});