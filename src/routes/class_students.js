const express = require('express')
const router = express.Router({ mergeParams: true })
const { classStudentsController: ctrl } = require('../controller')

router.get('/', ctrl.getClassStudents)

module.exports = router