
exports.seed = knex => {
  return knex('students').insert([
    { id: 1, preferred_name: 'Katie', last_name: 'Francis', class_id: 1 },
    { id: 2, preferred_name: 'Bobby', last_name: 'McDonald', class_id: 1 },
    { id: 3, preferred_name: 'Jake', last_name: 'Curtis', class_id: 1 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));`)
  })
}