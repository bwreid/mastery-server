const { courseModel: model,
        courseUnitModel: dependencyModel
 } = require('../model')

const fields = ['title', 'description']

const getAllCourses = (req, res, next) => {
  model.getAllCourses().then(courses => {
    res.status(200).json({ courses })
  })
}

const getOneCourse = (req, res, next) => {
  model.getOneCourse(req.params.id).then(course => {
    res.status(200).json({ course })
  })
}

const createCourse = (req, res, next) => {
  model.createCourse(req.body).then(response => {
    const [course] = response
    res.status(200).json({ course })
  })
}

const updateCourse = (req, res, next) => {
  model.updateCourse(req.params.id, req.body).then(course => {
    res.status(200).json({ course })
  })
}

const deleteCourse = (req, res, next) => {
  model.deleteCourse(req.params.id).then(course => {
    res.status(200).json({ course })
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
  model.getOneCourse(req.params.id).then(course => {
    next()
  }).catch(error => {
    next({ status: 404, error })
  })
}

const dependents = (req, res, next) => {
  dependencyModel.getAllCourseUnits(req.params.id).then(units => {
    if(units.length > 0) return next ({ status: 400, message: 'Cannot delete course with dependent units' })
    else return next()
  })
}

module.exports = {
  getAllCourses,
  getOneCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  validations: {
    complete, prune, exists, dependents
  }
}
