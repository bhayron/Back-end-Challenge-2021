import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Registereds extends BaseSchema {
  protected tableName = 'registereds'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().notNullable()
      table.string('date', 255).notNullable()
      table.string('age', 20).notNullable()

      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
