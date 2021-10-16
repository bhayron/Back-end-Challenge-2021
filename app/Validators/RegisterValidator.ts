import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional(),
    email: schema.string({}, [rules.email(), rules.unique({ table: 'users', column: 'email' })]),
    password: schema.string(),
    gender: schema.string.optional(),
    title: schema.string.optional(),
    first: schema.string.optional(),
    last: schema.string.optional(),
    number: schema.string.optional(),
    name_loc: schema.string.optional(),
    city: schema.string.optional(),
    state: schema.string.optional(),
    country: schema.string.optional(),
    postcode: schema.string.optional(),
    latitude: schema.string.optional(),
    longitude: schema.string.optional(),
    offset: schema.string.optional(),
    description: schema.string.optional(),
    uuid: schema.string.optional(),
    username: schema.string.optional(),
    salt: schema.string.optional(),
    md5: schema.string.optional(),
    sha1: schema.string.optional(),
    sha256: schema.string.optional(),
    date_dob: schema.string.optional(),
    age_dob: schema.string.optional(),
    date_reg: schema.string.optional(),
    age_reg: schema.string.optional(),
    phone: schema.string.optional(),
    cell: schema.string.optional(),
    value: schema.string.optional(),
    large: schema.string.optional(),
    medium: schema.string.optional(),
    thumbnail: schema.string.optional(),
    nat: schema.string.optional(),
    status: schema.string.optional(),
  })

  public messages = {}
}
