
exports.up = knex => {
  return knex.schema.createTable('units', table => {
    table.increments()
    table.integer('course_id').notNullable().defaultsTo(0)
    table.foreign('course_id').references('courses.id')
    table.string('title').notNullable().defaultsTo('')
    table.string('summary').notNullable().defaultsTo('')
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTable('units')
