const { classStudentModel: model } = require('../model')
const fields = ["preferred_name", "last_name"]

const getClassStudents = (req, res, next) => {
  model.getClassStudents(req.params.id).then(roster => {
    res.status(200).json({ roster })
  })
}

const getOneClassStudent = (req, res, next) => {
  model.getOneClassStudent(req.params.id, req.params.student_id).then(result => {
    res.status(200).json({ student: result })
  })
}

const createClassStudent = (req, res, next) => {
  model.createClassStudent(req.params.id, req.body).then(student => {
    res.status(200).json({ student })
  })
}

const updateClassStudent = (req, res, next) => {
  model.updateClassStudent(req.params.id, req.params.student_id, req.body).then(result => {
    res.status(200).json({ result })
  })
}

const deleteClassStudent = (req, res, next) => {
  model.deleteClassStudent(req.params.student_id).then(result => {
    res.status(200).json({ result })
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
  model.getOneClassStudent(req.params.id, req.params.student_id).then(result => {
    if(!result) next({ status: 404, message: 'Not found' })
    else next()
  })
}

module.exports = {
  getClassStudents,
  getOneClassStudent,
  createClassStudent,
  updateClassStudent,
  deleteClassStudent,
  validations: {
    prune, exists, complete
  }
}
