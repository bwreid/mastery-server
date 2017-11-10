
exports.seed = knex => {
  return knex('teachers').insert([
    { id: 1, first_name: 'Mary', last_name: 'Johnson', preferred_name: 'Mrs. Johnson' },
    { id: 2, first_name: 'David', last_name: 'Smith', preferred_name: 'Mr. Smith' },
    { id: 3, first_name: 'Alice', last_name: 'Baker', preferred_name: 'Ms. Baker' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('teachers_id_seq', (SELECT MAX(id) FROM teachers));`)
  })
}
