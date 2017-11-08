const knex = require('../db/connection')

const getAllTeachers = () => knex('teachers')

const getOneTeacher = (id) => knex('teachers')
  .where('id', id)
  .first()

const createTeacher = (body) => knex('teachers')
  .insert(body)
  .returning('*')

const updateTeacher = (id, body) => knex('teachers')
  .where('id', id)
  .update(body)
  .returning('*')

module.exports = {
  getAllTeachers,
  getOneTeacher,
  createTeacher,
  updateTeacher
}