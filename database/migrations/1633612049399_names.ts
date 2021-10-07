import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Names extends BaseSchema {
  protected tableName = 'names'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 55).notNullable()
      table.string('first', 55).notNullable()
      table.string('last', 55).notNullable()

      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
