const { unitLessonModel: model } = require('../model')
const fields = ['title', 'content']

const getAllUnitLessons = (req, res, next) => {
  model.getAllUnitLessons(req.params.id).then(lessons => {
    res.status(200).json({ lessons })
  })
}

const getOneUnitLesson = (req, res, next) => {
  model.getOneUnitLesson(req.params.id, req.params.lesson_id).then(lesson => {
    res.status(200).json({ lesson })
  })
}

const createUnitLesson = (req, res, next) => {
  model.createUnitLesson(req.params.id, req.body).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const updateUnitLesson = (req, res, next) => {
  model.updateUnitLesson(req.params.id, req.params.lesson_id, req.body).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const deleteUnitLesson = (req, res, next) => {
  model.deleteUnitLesson(req.params.id, req.params.lesson_id).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const exists = (req, res, next) => {
  model.getOneUnitLesson(req.params.id, req.params.lesson_id).then(result => {
    if(!result.hasOwnProperty('id')) {
      next({ status: 404, message: 'Not found' })  
    } else {
      next()  
    }
  })
  .catch(error => {
    next({ status: 404, message: 'Not found' })
  })
}

const complete = (req, res, next) => {
  const errors = []
  fields.forEach(field => {
    if(!req.body.hasOwnProperty(field)) {
      errors.push(`${field} is required`)
    }
  })

  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()
}

const prune = (req, res, next) => {
  Object.keys(req.body).forEach(field => {
    if(!fields.includes(field)) delete req.body.field
  })
  next()
}

module.exports = {
  getAllUnitLessons,
  getOneUnitLesson,
  createUnitLesson,
  updateUnitLesson,
  deleteUnitLesson,
  validations: {
    exists, prune, complete
  }
}