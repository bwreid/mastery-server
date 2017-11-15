const knex = require('../db/connection')

const getAllQuestions = () => knex('mc_questions')

const getOneQuestion = (id) => knex('mc_questions')
  .select('*')
  .where('id', id)

const updateQuestion = (id, body) => knex('mc_questions')
  .where('id', id)
  .update(body)
  .returning('*')

const deleteQuestion = (id) => knex('mc_questions')
  .where('id', id)
  .returning('*')
  .del()

module.exports = {
  getAllQuestions,
  getOneQuestion,
  updateQuestion,
  deleteQuestion
}