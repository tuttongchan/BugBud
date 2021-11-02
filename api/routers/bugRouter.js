import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Bug from '../models/bugModel.js';
const bugRouter = express.Router();

// GET ALL BUGS
bugRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const bugs = await Bug.find({});
    res.send(bugs.reverse());
  })
);

// GET BUG
bugRouter.get('/:id', async (req, res) => {
  const bug = await Bug.findById(req.params.id);
  if (bug) {
    res.status(200).json(bug);
  } else {
    res.status(404).send({ message: 'Bug Not Found' });
  }
});

// CREATE BUG
bugRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const bug = await Bug(req.body);
    const createdBug = await bug.save();
    res.status(200).send(createdBug);
  })
);

// UPDATE BUG
bugRouter.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const bugId = req.params.id;
    const bug = await Bug.findById(bugId);
    if (bug) {
      bug.bugName = req.body.bugName;
      bug.type = req.body.type;
      bug.desc = req.body.desc;
      bug.links = req.body.links;
      bug.code = req.body.code;
      const updatedBug = await bug.save();
      res.send({ message: 'Bug Updated', product: updatedBug });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

// DELETE BUG
bugRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const bug = await Bug.findById(req.params.id);
    if (bug) {
      await bug.delete();
      res.send({ message: 'Bug has been deleted!' });
    }
  })
);

export default bugRouter;
