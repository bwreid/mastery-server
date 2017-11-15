const { questionModel: model } = require('../model')

const getAllQuestions = (req, res, next) => {
  model.getAllQuestions().then(questions => {
    res.status(200).json({ questions })
  })
}

const getOneQuestion = (req, res, next) => {
  model.getOneQuestion(req.params.id).then(question => {
    res.status(200).json({ question })
  })
}

const updateQuestion = (req, res, next) => {
  model.updateQuestion(req.params.id, req.body).then(question => {
    res.status(200).json({ question })
  })
}

const deleteQuestion = (req, res, next) => {
  model.deleteQuestion(req.params.id).then(question => {
    res.status(200).json({ question })
  })
}

module.exports = {
  getAllQuestions,
  getOneQuestion,
  updateQuestion,
  deleteQuestion
}