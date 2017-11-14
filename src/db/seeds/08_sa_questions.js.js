
exports.seed = knex => {
  return knex('sa_questions').del().then(() => {
    return knex('sa_questions').insert([
      { id: 1, lesson_id: 1, 
          question: 'What is the approximate diameter of the earth?', 
          answer: '7,917 miles' },
      { id: 2, lesson_id: 1, 
          question: 'How many Earth can fit in the Sun?', 
          answer: 'one million' },
      { id: 3, lesson_id: 1, 
          question: 'What is the mantle made of?', 
          answer: 'Magma (or molten rock)' }
    ])
  })
  .then(() => {
    return knex.raw(`SELECT setval('sa_questions_id_seq', (SELECT MAX(id) FROM sa_questions));`)
  })
}
