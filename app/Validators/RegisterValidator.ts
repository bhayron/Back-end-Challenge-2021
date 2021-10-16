import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
    gender: schema.string(),
    title: schema.string(),
    first: schema.string(),
    last: schema.string(),
    number: schema.string(),
    name_loc: schema.string(),
    city: schema.string(),
    state: schema.string(),
    country: schema.string(),
    postcode: schema.string(),
    latitude: schema.string(),
    longitude: schema.string(),
    offset: schema.string(),
    description: schema.string(),
    uuid: schema.string(),
    username: schema.string(),
    salt: schema.string(),
    md5: schema.string(),
    sha1: schema.string(),
    sha256: schema.string(),
    date_dob: schema.string(),
    age_dob: schema.string(),
    date_reg: schema.string(),
    age_reg: schema.string(),
    phone: schema.string(),
    cell: schema.string(),
    value: schema.string(),
    large: schema.string(),
    medium: schema.string(),
    thumbnail: schema.string(),
    nat: schema.string(),
    status: schema.string.optional(),
  })

  public messages = {}
}
