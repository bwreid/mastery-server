const { classModel: model } = require('../model')

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

module.exports = {
  getAllClasses,
  getOneClass
}