import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('gender', 50).notNullable()
      //name
      table.string('title', 50).notNullable()
      table.string('first', 50).notNullable()
      table.string('last', 50).notNullable()
      //location
      table.string('number', 100).notNullable()
      table.string('name_loc', 100).notNullable()
      table.string('city', 100).notNullable()
      table.string('state', 100).notNullable()
      table.string('country', 100).notNullable()
      table.string('postcode', 100).notNullable()
      //coordinates
      table.string('latitude', 100).notNullable()
      table.string('longitude', 100).notNullable()
      //timezone
      table.string('offset', 100).notNullable()
      table.string('description', 100).notNullable()
      //login
      table.string('email', 50).notNullable()
      //
      table.string('uuid', 100).notNullable()
      table.string('username', 30).notNullable()
      table.string('password', 255).notNullable()
      table.string('salt', 255).notNullable()
      table.string('md5', 255).notNullable()
      table.string('sha1', 255).notNullable()
      table.string('sha256', 255).notNullable()
      //dob
      table.string('date_dob', 30).notNullable()
      table.string('age_dob', 30).notNullable()
      //registered
      table.string('date_reg', 30).notNullable()
      table.string('age_reg', 30).notNullable()
      //
      table.string('phone', 50).notNullable()
      table.string('cell', 50).notNullable()
      //id
      table.string('name', 50)
      table.string('value', 50)
      //picture
      table.string('large', 100).notNullable()
      table.string('medium', 100).notNullable()
      table.string('thumbnail', 100).notNullable()

      table.string('nat', 50).notNullable()

      table.enum('status', ['trash ', 'published']).defaultTo('published')
      table.string('remember_me_token').nullable()
      table.string('imported_at', 50).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
