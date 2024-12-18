import Student from "../models/students.model.js";
import Course from "../models/course.model.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

// nodemailer config
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "andrew31@ethereal.email",
    pass: "HwSd9QbQPpN4E1dVXZ",
  },
});

const addStudent = async (req, res) => {
  const { fullName, email, enrolledCourse } = req.body;

  if (!fullName)
    return res.status(400).json({
      message: "fullname is required",
    });
  if (!email)
    return res.status(400).json({
      message: "email is required",
    });

  const student = await Student.create({
    fullName,
    email,
    enrolledCourse,
  });

  const course = await Course.findByIdAndUpdate(enrolledCourse, {
    $push: { enrolledStudents: student._id },
  });

  res.json({ message: "student added successfully" });
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not valid Id" });
  }

  const student = await Student.findById(id).populate("enrolledCourse");
  if (!student) {
    res.status(404).json({
      message: "no todo found!",
    });
    return;
  }

  res.status(200).json(student);
};

// pagination
const getAllStudent = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 3;

  const skip = (page - 1) * limit;

  const students = await Student.find({}).skip(skip).limit(limit);
  res.json({ data: students, length: students.length });
};

const sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Andrew Nikolaus 👻" <andrew31@ethereal.email>', // sender address
    to: "mabdullah2037@gmail.com", // list of receivers
    subject: "Congratulation! Benizar income support (SINDH BANK)✔",
    text: "Mubarak ho appka benazir income support ma 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03221767616 ma bhejain or inaam hasil krain", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send("email sent");
};

export { addStudent, getStudent, getAllStudent, sendEmail };
