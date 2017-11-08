
exports.up = knex => {
  return knex.schema.createTable('students', table => {
    table.increments()
    table.string('preferred_name').notNullable().defaultsTo('')
    table.string('last_name').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('students')