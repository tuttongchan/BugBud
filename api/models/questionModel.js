import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    questionName: { type: String, required: false },
    desc: { type: String, required: false },
    questionOne: { type: String, required: false },
    answerOne: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model('Image', questionSchema);
export default Question;