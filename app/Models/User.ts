import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gender: string
  //name
  @column()
  public title: string

  @column()
  public first: string

  @column()
  public last: string
  //location
  @column()
  public street: string

  @column()
  public city: string

  @column()
  public state: string

  @column()
  public postcode: string
  //coordinates
  @column()
  public latitude: string

  @column()
  public longitude: string
  //timezone
  @column()
  public offset: string

  @column()
  public description: string
  //login
  @column()
  public email: string
  //
  @column()
  public uuid: string

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public salt: string

  @column()
  public md5: string

  @column()
  public sha1: string

  @column()
  public sha256: string
  //dob
  @column()
  public date: DateTime

  @column()
  public age: string
  //
  @column()
  public phone: string

  @column()
  public cell: string

  @column()
  public name: string

  @column()
  public value: string
  //picture
  @column()
  public large: string

  @column()
  public medium: string

  @column()
  public thumbnail: string

  @column()
  public status: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public importedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
