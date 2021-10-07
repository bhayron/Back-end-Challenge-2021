import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ids extends BaseSchema {
  protected tableName = 'ids'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.string('name', 255).notNullable()
      table.string('value', 20).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
