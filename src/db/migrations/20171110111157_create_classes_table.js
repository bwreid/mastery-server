
exports.up = knex => {
  return knex.schema.createTable('classes', table => {
    table.increments()
    table.string('name').notNullable().defaultsTo('')
    table.integer('teacher_id').notNullable()
    table.foreign('teacher_id').references('teachers.id')
    table.timestamps(true, true)
  })
};

exports.down = knex => knex.schema.dropTable('classes')
