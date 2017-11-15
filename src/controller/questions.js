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

module.exports = {
  getAllQuestions,
  getOneQuestion
}