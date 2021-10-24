import mongoose from 'mongoose';

const bugSchema = new mongoose.Schema(
  {
    bugName: { type: String, required: true },
    language: { type: String, required: true },
    desc: { type: String, required: true },
    links: { type: String, required: true },
    code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Bug = mongoose.model('Bug', bugSchema);
export default Bug;
