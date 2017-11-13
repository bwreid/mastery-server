const express = require('express')
const router = express.Router()
const { classesController: ctrl } = require('../controller')

router.get('/', ctrl.getAllClasses)
router.get('/:id', ctrl.getOneClass)
router.post('/', ctrl.validations.complete, ctrl.validations.prune, ctrl.createClass)
router.put('/:id', ctrl.validations.exists, ctrl.validations.complete, ctrl.validations.prune, ctrl.updateClass)
router.delete('/:id', ctrl.validations.exists, ctrl.deleteClass)

module.exports = router