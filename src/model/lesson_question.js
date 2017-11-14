const knex = require('../db/connection')

const getAllLessonQuestions = (lessonId) => {
  return knex('mc_questions')
    .select('id', 'lesson_id', 'question')
    .where('lesson_id', lessonId)
    .union(function() {
      this.select('id', 'lesson_id', 'question')
        .from('sa_questions')
        .where('lesson_id', lessonId)
    })
}

const getAllMCQuestions = (lessonId) => {
  return knex('mc_questions')
    .select('*')
    .where('lesson_id', lessonId)
}

const getAllSAQuestions = (lessonId) => {
  return knex('sa_questions')
    .select('*')
    .where('lesson_id', lessonId)
}

const getOneMCQuestion = (lessonId, questionId) => {
  return knex('mc_questions')
    .select('*')
    .where('lesson_id', lessonId)
    .andWhere('id', questionId)
}

const getOneSAQuestion = (lessonId, questionId) => {
  return knex('sa_questions')
    .select('*')
    .where('lesson_id', lessonId)
    .andWhere('id', questionId)
}

module.exports = {
  getAllLessonQuestions,
  getAllMCQuestions, 
  getAllSAQuestions,
  getOneMCQuestion,
  getOneSAQuestion,
}
