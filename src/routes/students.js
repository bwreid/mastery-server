const express = require('express')
const router = express.Router()
const { studentsController: ctrl } = require('../controller')

router.get('/', ctrl.getAllStudents)

module.exports = router