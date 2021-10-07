import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('gender', 20).notNullable()

      table.integer('name_id').unsigned().references('id').inTable('names').onDelete('CASCADE')
      table
        .integer('location_id')
        .unsigned()
        .references('id')
        .inTable('locations')
        .onDelete('CASCADE')
      table
        .integer('coordinates_id')
        .unsigned()
        .references('id')
        .inTable('coordinates')
        .onDelete('CASCADE')
      table
        .integer('timezone_id')
        .unsigned()
        .references('id')
        .inTable('timezones')
        .onDelete('CASCADE')
      table.string('email', 255).notNullable()
      table.integer('login_id').unsigned().references('id').inTable('logins').onDelete('CASCADE')
      table.integer('dob_id').unsigned().references('id').inTable('dobs').onDelete('CASCADE')
      table
        .integer('registered_id')
        .unsigned()
        .references('id')
        .inTable('registereds')
        .onDelete('CASCADE')
      table.string('phone', 55).notNullable()
      table.string('cell', 55).notNullable()
      table.integer('id_id').unsigned().references('id').inTable('ids').onDelete('CASCADE')
      table
        .integer('picture_id')
        .unsigned()
        .references('id')
        .inTable('pictures')
        .onDelete('CASCADE')

      table.string('nat', 55).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
