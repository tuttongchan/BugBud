import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Image from '../models/imageModel';
const imageRouter = express.Router();

// GET ALL IMAGES
imageRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const images = await Image.find({});
    res.send(images);
  })
);

// GET IMAGE
imageRouter.get('/:id', async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (image) {
    res.status(200).json(image);
  } else {
    res.status(404).send({ message: 'Bug Not Found' });
  }
});

// CREATE IMAGE
imageRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const image = await Image(req.body);
    const createdImage = await image.save();
    res.status.send(createdImage);
  })
);

// UPDATE IMAGE
imageRouter.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);
    if (image) {
      image.bugName = req.body.bugName;
      image.desc = req.body.desc;
      image.image = req.body.image;
      const updatedImage = await image.save();
      res.send({ message: 'Image Updated', product: updatedImage });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

// DELETE IMAGE
imageRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const image = await Image.findById(req.params.id);
    if (image) {
      await image.delete();
      res.send({ message: 'Image has been deleted!' });
    }
  })
);

export default imageRouter;
