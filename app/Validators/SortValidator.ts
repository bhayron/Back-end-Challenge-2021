import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SortValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    sort_by: schema.enum.optional(['id', 'gener', 'email', 'title']),
    order: schema.enum.optional(['asc', 'desc'] as const),
  })

  public messages = {}
}
