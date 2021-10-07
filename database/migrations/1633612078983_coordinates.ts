import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Coordinates extends BaseSchema {
  protected tableName = 'coordinates'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('latitude', 255).notNullable()
      table.string('longitude', 255).notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
