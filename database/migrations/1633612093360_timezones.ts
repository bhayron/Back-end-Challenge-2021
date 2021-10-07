import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Timezones extends BaseSchema {
  protected tableName = 'timezones'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('offset', 255).notNullable()
      table.string('description', 255).notNullable()

      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}