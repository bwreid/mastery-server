
exports.up = knex => {
  return knex.schema.createTable('teachers', table => {
    table.increments()
    table.string('first_name').notNullable().defaultsTo('')
    table.string('last_name').notNullable().defaultsTo('')
    table.string('preferred_name').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('teachers')