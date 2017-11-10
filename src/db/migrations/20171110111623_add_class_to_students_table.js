
exports.up = knex => {
  return knex.schema.alterTable('students', table => {
    table.integer('class_id').notNullable().defaultsTo(0)
    table.foreign('class_id').references('classes.id')
  }) 
}

exports.down = knex => {
  return knex.schema.alterTable('students', table => {
    table.dropColumn('class_id')
  })
}
