const knex = require('../db/connection')

const getAllTeachers = () => knex('teachers')

const getOneTeacher = (id) => knex('teachers')
  .where('id', id)
  .first()

module.exports = {
  getAllTeachers,
  getOneTeacher
}