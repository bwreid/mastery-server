const { 
  teacherModel: model,
  classModel: dependencyModel
} = require('../model')

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

const updateTeacher = (req, res, next) => {
  model.updateTeacher(req.params.id, req.body).then(result => {
    const [teacher] = result
    res.status(200).json({ teacher })
  })
}

const deleteTeacher = (req, res, next) => {
  model.deleteTeacher(req.params.id).then(result => {
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
  model.getOneTeacher(req.params.id).then(teacher => {
    if(!teacher) next({ status: 404, message: 'Not found' })
    else next()
  })
}

const dependents = (req, res, next) => {
  dependencyModel.getAllClasses().then(classes => {
    if(classes.find(item => item.teacher_id === parseInt(req.params.id))) {
      return next({ status: 400, message: 'Cannot delete teacher currently assigned to classes' })
    } 
    else return next()
  })
}

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
  validations: {
    prune, complete, exists, dependents
  }
}