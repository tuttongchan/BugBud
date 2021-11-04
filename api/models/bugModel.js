import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema(
  {
    bugName: { type: String, required: false },
    language: { type: String, required: false },
    desc: { type: String, required: false },
    links: { type: String, required: false },
    code: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model('Bug', bugSchema);
export default Bug;
