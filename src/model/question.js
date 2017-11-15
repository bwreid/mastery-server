const knex = require('../db/connection')

const getAllQuestions = () => knex('mc_questions')

const getOneQuestion = (id) => knex('mc_questions')
  .select('*')
  .where('id', id)


module.exports = {
  getAllQuestions,
  getOneQuestion
}