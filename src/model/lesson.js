const knex = require('../db/connection')

const getAllLessons = () => knex('lessons')

const getOneLesson = (id) => knex('lessons')
  .where('id', id)
  .first()

const createLesson = (body) => knex('lessons')
  .insert(body)
  .returning('*')

const updateLesson = (id, body) => knex('lessons')
  .where('id', id)
  .update(body)
  .returning('*')

const deleteLesson = (id) => knex('lessons')
  .where('id', id)
  .returning('*')
  .del()

module.exports = {
  getAllLessons,
  getOneLesson,
  createLesson,
  updateLesson,
  deleteLesson,
}