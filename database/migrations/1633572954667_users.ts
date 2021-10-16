import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('gender', 50)
      //name
      table.string('title', 50)
      table.string('first', 50)
      table.string('last', 50)
      //location
      table.string('number', 100)
      table.string('name_loc', 100)
      table.string('city', 100)
      table.string('state', 100)
      table.string('country', 100)
      table.string('postcode', 100)
      //coordinates
      table.string('latitude', 100)
      table.string('longitude', 100)
      //timezone
      table.string('offset', 100)
      table.string('description', 100)
      //login
      table.string('email', 50).notNullable()
      //
      table.string('uuid', 100)
      table.string('username', 30)
      table.string('password', 255)
      table.string('salt', 255)
      table.string('md5', 255)
      table.string('sha1', 255)
      table.string('sha256', 255)
      //dob
      table.string('date_dob', 30)
      table.string('age_dob', 30)
      //registered
      table.string('date_reg', 30)
      table.string('age_reg', 30)
      //
      table.string('phone', 50)
      table.string('cell', 50)
      //id
      table.string('name', 50)
      table.string('value', 50)
      //picture
      table.string('large', 100)
      table.string('medium', 100)
      table.string('thumbnail', 100)

      table.string('nat', 50)

      table.enum('status', ['trash ', 'published']).defaultTo('published')
      table.string('remember_me_token').nullable()
      table.string('imported_at', 50)
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
