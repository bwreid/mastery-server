const knex = require('../db/connection')

const getAllClasses = () => knex('classes')

const getOneClass = (id) => knex('classes')
  .where('classes.id', id)
  .select('*')
  .join('teachers', 'classes.teacher_id', 'teachers.id')

module.exports = {
  getAllClasses,
  getOneClass
}