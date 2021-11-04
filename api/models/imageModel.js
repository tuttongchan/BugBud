import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    imageName: { type: String, required: false },
    desc: { type: String, required: false },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model('Image', imageSchema);
export default Image;
