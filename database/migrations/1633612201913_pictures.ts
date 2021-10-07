import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Pictures extends BaseSchema {
  protected tableName = 'pictures'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('large', 255).notNullable()
      table.string('medium', 255).notNullable()
      table.string('thumbnail', 255).notNullable()

      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
