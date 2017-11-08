const knex = require('../db/connection')

const getAllTeachers = () => knex('teachers')

module.exports = {
  getAllTeachers
}