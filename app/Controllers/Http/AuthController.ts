import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async index({}: HttpContextContract) {
    const user = await User.all()

    return user
  }
}
