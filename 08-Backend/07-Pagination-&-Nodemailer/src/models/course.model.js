import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 12,
    },
    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
