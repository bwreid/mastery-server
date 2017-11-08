const { teacherModel: model } = require('../model')
const fields = ['first_name', 'last_name', 'preferred_name']

const getAllTeachers = (req, res, next) => {
  model.getAllTeachers().then(teachers => {
    res.status(200).json({ teachers })
  }) 
}

const getOneTeacher = (req, res, next) => {
  model.getOneTeacher(req.params.id).then(teacher => {
    res.status(200).json({ teacher })
  })
}

const createTeacher = (req, res, next) => {
  model.createTeacher(req.body).then(result => {
    const [teacher] = result
    res.status(200).json({ teacher })
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
  model.getOneTeacher(req.params.id).then(course => {
    next()
  }).catch(error => {
    next({ status: 404, error })
  })
}

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  validations: {
    prune, complete, exists
  }
}