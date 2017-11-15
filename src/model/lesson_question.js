const knex = require('../db/connection')

const getAllLessonQuestions = (lessonId) => {
  return knex('mc_questions')
    .select('*')
    .where('lesson_id', lessonId)
}

const getOneQuestion = (lessonId, questionId) => {
  return knex('mc_questions')
    .select('*')
    .where('lesson_id', lessonId)
    .andWhere('id', questionId)
}

const createQuestion = (lessonId, question ) => {
  return knex('mc_questions')
    .insert(question)
    .returning('*')
}

const updateQuestion = (lessonId, questionId, question) => {
  return knex('mc_questions')
    .where('lesson_id', lessonId)
    .andWhere('id', questionId)
    .update(question)
    .returning('*')
}

const deleteQuestion = (lessonId, questionId, question) =>{
  return knex('mc_questions')
    .where('lesson_id', lessonId)
    .andWhere('id', questionId)
    .returning('*')
    .del()
}

module.exports = {
  getAllLessonQuestions,
  getOneQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion
}
