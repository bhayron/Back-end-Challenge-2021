import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Locations extends BaseSchema {
  protected tableName = 'locations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('street', 55).notNullable()
      table.string('city', 55).notNullable()
      table.string('state', 55).notNullable()
      table.string('postcode', 55).notNullable()
      table.integer('cprdomate_id').unsigned().notNullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
