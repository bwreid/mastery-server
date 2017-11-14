
exports.seed = knex => {
  return knex('mc_questions').del().then(() => {
    return knex('mc_questions').insert([
      { id: 1, lesson_id: 1, 
          question: 'What scale measures the hardness of minerals?', 
            answer_a: 'The Modified Moment Scale', 
            answer_b: 'The Burgess Scale', 
            answer_c: 'The Mohs Scale', 
            answer_d: 'A lizard scale', 
          answer: 'c' },
      { id: 2, lesson_id: 1, 
          question: 'What is Earth\'s inner core primarily composed of?', 
            answer_a: 'Molten iron', 
            answer_b: 'Solid iron', 
            answer_c: 'Gooey chocolate', 
            answer_d: 'Liquid rock (magma)', 
          answer: 'b' },
      { id: 3, lesson_id: 1, 
          question: 'Which of the following is the hardest mineral known?', 
            answer_a: 'Talc', 
            answer_b: 'Soapstone', 
            answer_c: 'Emerald', 
            answer_d: 'Diamond', 
          answer: 'd' }
    ])
  })
  .then(() => {
    return knex.raw(`SELECT setval('mc_questions_id_seq', (SELECT MAX(id) FROM mc_questions));`)
  })
}
