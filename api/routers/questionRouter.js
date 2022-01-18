import express from 'express';
import expressAsyncHandler from 'express-async-handler';
// import Bug from '../models/bugModel.js';
import Question from '../models/questionModel.js';
// const bugRouter = express.Router();
const questionRouter = express.Router();

// GET ALL BUGS
// bugRouter.get(
//   '/',
//   expressAsyncHandler(async (req, res) => {
//     const bugs = await Bug.find({});
//     res.send(bugs.reverse());
//   })
// );

// GET ALL QUESTIONS
questionRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const questions = await Question.find({});
    res.send(questions);
  })
);

// CREATE BUG
// bugRouter.post(
//   '/',
//   expressAsyncHandler(async (req, res) => {
//     const bug = await Bug(req.body);
//     const createdBug = await bug.save();
//     res.status(200).send(createdBug);
//   })
// );

// CREATE QUESTION
questionRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const question = await Question(req.body);
    const createdQuestion = await question.save();
    res.status(200).send(createdQuestion);
  })
);

export default questionRouter;
