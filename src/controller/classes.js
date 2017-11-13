const { classModel: model } = require('../model')
const fields = ['name', 'teacher_id']

const getAllClasses = (req, res, next) => {
  model.getAllClasses().then(classes => {  
    res.status(200).json({ classes })
  })
}

const getOneClass = (req, res, next) => {
  model.getOneClass(req.params.id).then(group => {
    res.status(200).json({ group })
  })
}

const createClass = (req, res, next) => {
  model.createClass(req.body).then(group => {
    res.status(200).json({ group })
  })
}

const updateClass = (req, res, next) => {
  model.updateClass(req.params.id, req.body).then(group => {
    res.status(200).json({ group })
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
  model.getOneClass(req.params.id).then(course => {
    next()
  }).catch(error => {
    next({ status: 404, error })
  })
}

module.exports = {
  getAllClasses,
  getOneClass,
  createClass,
  updateClass,
  validations: {
    complete, prune, exists
  }
}