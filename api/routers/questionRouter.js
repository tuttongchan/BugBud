import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Question from '../models/questionModel.js';
const questionRouter = express.Router();

// GET ALL QUESTIONS
questionRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const questions = await Question.find({});
    res.send(questions.reverse());
  })
);

// GET QUESTION
questionRouter.get('/:id', async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).send({ message: 'Question Not Found' });
  }
});

// CREATE QUESTION
questionRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const question = await Question(req.body);
    const createdQuestion = await question.save();
    res.status(200).send(createdQuestion);
  })
);

// UPDATE QUESTION
questionRouter.put(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const questionId = req.params.id;
    const question = await Question.findById(questionId);
    if (question) {
      question.questionName = req.body.questionName;
      question.language = req.body.language;
      question.desc = req.body.desc;
      question.links = req.body.links;
      question.code = req.body.code;
      const updatedQuestion = await question.save();
      res.send({ message: 'Question Updated', question: updatedQuestion });
    } else {
      res.status(404).send({ message: 'Question Not Found' });
    }
  })
);

// DELETE QUESTION
questionRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const question = await Question.findById(req.params.id);
    if (question) {
      await question.delete();
      res.send({ message: 'Question has been deleted!' });
    }
  })
);

export default questionRouter;
