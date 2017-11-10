const { classModel: model } = require('../model')

const getAllClasses = (req, res, next) => {
  model.getAllClasses().then(classes => {  
    res.status(200).json({ classes })
  })
}

module.exports = {
  getAllClasses
}