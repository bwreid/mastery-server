const knex = require('../db/connection')

const getAllClasses = () => knex('classes')

const getOneClass = (id) => knex('classes')
  .where('classes.id', id)
  .select('classes.id AS class_id', 'teachers.id AS teacher_id', 'classes.name AS name', 'teachers.preferred_name AS teacher_name')
  .join('teachers', 'classes.teacher_id', 'teachers.id')

const createClass = (body) => knex('classes')
  .insert(body)
  .returning('*')

const updateClass = (id, body) => knex('classes')
  .where('id', id)
  .update(body)
  .returning('*')

module.exports = {
  getAllClasses,
  getOneClass,
  createClass,
  updateClass
}