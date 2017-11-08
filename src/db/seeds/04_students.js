
exports.seed = knex => {
  return knex('teachers').del()
    .then(() => {
      // Inserts seed entries
      return knex('students').insert([
        { id: 1, preferred_name: 'Katie', last_name: 'Francis' },
        { id: 2, preferred_name: 'Bobby', last_name: 'McDonald' },
        { id: 3, preferred_name: 'Jake', last_name: 'Curtis' }
      ])
    }).then(() => {
      return knex.raw(`SELECT setval('students_id_seq', (SELECT MAX(id) FROM students));`)
    })
}