const knex = require('../db/connection')

const getAllClasses = () => knex('classes')

const getOneClass = (id) => knex('classes')
  .where('classes.id', id)
  .select('*')
  .join('teachers', 'classes.teacher_id', 'teachers.id')

const createClass = (body) => knex('classes')
  .insert(body)
  .returning('*')
  
module.exports = {
  getAllClasses,
  getOneClass,
  createClass
}