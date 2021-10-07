import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      // table.string('gender', 20).notNullable()

      // table.string('password', 180).notNullable()
      // table.string('nat', 55).notNullable()

      table.string('player_id', 255).notNullable()
      table.string('nickname', 255).notNullable()
      table.string('avatar_url', 255).notNullable()
      table.integer('score', 255).notNullable()

      table.enum('status', ['trash ', 'published']).defaultTo('published')
      table.string('imported_t', 255).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
