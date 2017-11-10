const express = require('express')
const router = express.Router()
const { classesController: ctrl } = require('../controller')

router.get('/', ctrl.getAllClasses)
router.get('/:id', ctrl.getOneClass)

module.exports = router