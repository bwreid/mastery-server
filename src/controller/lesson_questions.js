const { lessonQuestionModel: model } = require('../model')

const getAllLessonQuestions = (req, res, next) => {
  model.getAllLessonQuestions(req.params.id).then(questions => {
    res.status(200).json({ questions })
  })
}

const getAllSAQuestions = (req, res, next) => {
  model.getAllSAQuestions(req.params.id).then(questions => {
    res.status(200).json({ questions })
  })
}

const getAllMCQuestions = (req, res, next) => {
  model.getAllMCQuestions(req.params.id).then(questions => {
    res.status(200).json({ questions })
  })
}

const getMCQuestion = (req, res, next) => {
  model.getOneMCQuestion(req.params.id, req.params.questionId).then(question => {
    res.status(200).json({ question })
  })
}

const getSAQuestion = (req, res, next) => {
  model.getOneSAQuestion(req.params.id, req.params.questionId).then(question => {
    res.status(200).json({ question })
  })
}

module.exports = {
  getAllLessonQuestions,
  getAllMCQuestions,
  getAllSAQuestions,
  getMCQuestion,
  getSAQuestion,
}