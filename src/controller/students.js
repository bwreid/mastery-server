const { studentModel: model} = require('../model')
const fields = ['preferred_name', 'last_name']

const getAllStudents = (req, res, next) => {
  model.getAllStudents().then(students => {
    res.status(200).json({ students })
  })
}

const getOneStudent = (req, res, next) => {
  model.getOneStudent(req.params.id).then(student => {
    res.status(200).json({ student })
  })
}

const createNewStudent = (req, res, next) => {
  model.createNewStudent(req.body).then(result => {
    const [student] = result
    res.status(200).json({ student })
  })
}

const updateStudent = (req, res, next) => {
  model.updateStudent(req.params.id, req.body).then(result => {
    const [student] = result
    res.status(200).json({ student })
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
  model.getOneStudent(req.params.id).then(student => {
    if(!student) next({ status: 404, message: 'Not found' })
    else next()
  })
}

module.exports = {
  getAllStudents,
  getOneStudent,
  createNewStudent,
  updateStudent,
  validations: {
    exists, complete, prune
  }
}