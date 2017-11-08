
exports.up = knex => {
  return knex.schema.createTable('courses', table => {
    table.increments()
    table.string('title').notNullable().defaultsTo('')
    table.text('description').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('courses')
