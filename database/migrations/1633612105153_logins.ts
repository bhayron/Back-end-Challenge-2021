import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Logins extends BaseSchema {
  protected tableName = 'logins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.string('uuid', 255).notNullable()
      table.string('username', 255).notNullable()
      table.string('password', 255).notNullable()
      table.string('salt', 255).notNullable()
      table.string('md5', 255).notNullable()
      table.string('sha1', 255).notNullable()
      table.string('sha256', 255).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
