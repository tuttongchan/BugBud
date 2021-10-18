import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Bug from '../models/bugModel.js';

const bugRouter = express.Router();
// GET BUG
bugRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const bugs = await Bug.find({});
    res.send(bugs);
  })
);

// CREATE BUG
bugRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const bug = await Bug(req.body);
    const createdBug = await bug.save();
    res.send(createdBug);
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
      const updatedBug = await bug.save();
      res.send(updatedBug);
    } else {
      res.status(404).send('Product Not Found');
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
      res.send('Post has been deleted!');
    }
  })
);

export default bugRouter;
