
exports.seed = knex => {
  return knex('classes').del().then(() => {
    return knex('classes').insert([
      { id: 1, name: 'Tigers', teacher_id: 1 },
      { id: 2, name: 'Panthers', teacher_id: 2 },
      { id: 3, name: 'Falcons', teacher_id: 3 }
    ])
  })
  .then(() => {
    return knex.raw(`SELECT setval('classes_id_seq', (SELECT MAX(id) FROM classes));`)
  })
};
