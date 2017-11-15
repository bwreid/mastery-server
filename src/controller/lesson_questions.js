const { lessonQuestionModel: model } = require('../model')
const fields = ['lesson_id', 'question', 'answer_a', 'answer_b', 'answer_c', 'answer_d', 'answer']

const getAllLessonQuestions = (req, res, next) => {
  model.getAllLessonQuestions(req.params.id).then(questions => {
    res.status(200).json({ questions })
  })
}
const getQuestion = (req, res, next) => {
  model.getOneQuestion(req.params.id, req.params.questionId).then(question => {
    res.status(200).json({ question })
  })
}

const createQuestion = (req, res, next) => {
  model.createQuestion(req.params.id, req.body).then(question => {
    res.status(200).json({ question })
  })
}

const updateQuestion = (req, res, next) => {
  model.updateQuestion(req.params.id, req.params.questionId, req.body).then(question => {
    res.status(200).json({ question })
  })
}

const mcComplete = (req, res, next) => {
  const errors = []
  fields.forEach(field => {
    if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
  })
  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()  
}

const mcPrune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if(!fields.includes(key)) delete req.body[key]
  })
  next()
}


module.exports = {
  getAllLessonQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  validations: {
    mcComplete, mcPrune
  }
}