import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('gender', 255).notNullable()
      //name
      table.string('title', 255).notNullable()
      table.string('first', 255).notNullable()
      table.string('last', 255).notNullable()
      //location
      table.string('street', 255).notNullable()
      table.string('city', 255).notNullable()
      table.string('state', 255).notNullable()
      table.string('postcode', 255).notNullable()
      //coordinates
      table.string('latitude', 255).notNullable()
      table.string('longitude', 255).notNullable()
      //timezone
      table.string('offset', 255).notNullable()
      table.string('description', 255).notNullable()
      //login
      table.string('email', 255).notNullable()
      //
      table.string('uuid', 255).notNullable()
      table.string('username', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('salt', 255).notNullable()
      table.string('md5', 255).notNullable()
      table.string('sha1', 255).notNullable()
      table.string('sha256', 255).notNullable()
      table.string('sha1', 255).notNullable()
      table.string('sha256', 255).notNullable()
      //dob
      table.dateTime('date').notNullable()
      table.string('age', 30).notNullable()
      //
      table.string('phone', 50).notNullable()
      table.string('cell', 50).notNullable()
      //id
      table.string('name', 50).notNullable()
      table.string('value', 50).notNullable()
      //picture
      table.string('large', 50).notNullable()
      table.string('medium', 50).notNullable()
      table.string('thumbnail', 50).notNullable()

      table.enum('status', ['trash ', 'published']).defaultTo('published')
      table.string('remember_me_token').nullable()
      table.string('imported_at', 255).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
