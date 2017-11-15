const { lessonQuestionModel: model } = require('../model')
const fields = {
  mc: ['lesson_id', 'question', 'answer_a', 'answer_b', 'answer_c', 'answer_d', 'answer'],
  sa: ['lesson_id', 'question', 'answer']
}

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

const createMCQuestion = (req, res, next) => {
  model.createMCQuestion(req.params.id, req.body).then(question => {
    res.status(200).json({ question })
  })
}

const mcComplete = (req, res, next) => {
  const errors = []
  fields.mc.forEach(field => {
    if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
  })
  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()  
}

const mcPrune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if(!fields.mc.includes(key)) delete req.body[key]
  })
  next()
}

const createSAQuestion = (req, res, next) => {
  model.createSAQuestion(req.params.id, req.body).then(question => {
    res.status(200).json({ question })
  })
}

const saComplete = (req, res, next) => {
  const errors = []
  fields.sa.forEach(field => {
    if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
  })
  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()  
}

const saPrune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if(!fields.sa.includes(key)) delete req.body[key]
  })
  next()
}

module.exports = {
  getAllLessonQuestions,
  getAllMCQuestions,
  getAllSAQuestions,
  getMCQuestion,
  getSAQuestion,
  createMCQuestion,
  createSAQuestion,
  validations: {
    mcComplete, mcPrune, saComplete, saPrune
  }
}