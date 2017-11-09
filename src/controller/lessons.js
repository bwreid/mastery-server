const { lessonModel: model } = require('../model') 
const fields = [ 'title', 'content' ]

const getAllLessons = (req, res, next) => {
  model.getAllLessons().then(lessons => {
    res.status(200).json({ lessons })
  })
}

const getOneLesson = (req, res, next) => {
  model.getOneLesson(req.params.id).then(lesson => {
    res.status(200).json({ lesson })
  }) 
}

const createLesson = (req, res, next) => {
  model.createLesson(req.body).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const updateLesson = (req, res, next) => {
  model.updateLesson(req.params.id, req.body).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const deleteLesson = (req, res, next) => {
  model.deleteLesson(req.params.id).then(result => {
    const [lesson] = result
    res.status(200).json({ lesson })
  })
}

const complete = (req, res, next) => {
  const errors = []
  fields.forEach(field => {
    if(!req.body.hasOwnProperty(field)) errors.push(`${field} is required`)
  })
  if(errors.length) next({ status: 400, message: 'There were errors', errors })
  else next()  
}

const prune = (req, res, next) => {
  Object.keys(req.body).forEach(key => {
    if(!fields.includes(key)) delete req.body[key]
  })
  next()
}

const exists = (req, res, next) => {
  model.getOneLesson(req.params.id).then(lesson => {
    if(!lesson) next({ status: 404, message: 'Not found' })
    else next()
  })
}

module.exports = {
  getAllLessons,
  getOneLesson,
  createLesson,
  updateLesson,
  deleteLesson,
  validations: {
    exists, prune, complete
  }
}