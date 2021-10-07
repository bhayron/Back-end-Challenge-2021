import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'

export default class AuthController {
  public async index({}: HttpContextContract) {
    const user = await User.all()

    return user
  }
  public async register({ request, auth, response }: HttpContextContract) {
    console.log(request)

    const validatedData = await request.validate(RegisterValidator)

    const user = await User.create(validatedData)

    const token = await auth.login(user)

    return response.ok({ data: token })
  }
  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()
    //console.log(email, password)

    try {
      const token = await auth.attempt(email, password)

      return response.ok({ data: token })
    } catch (error) {
      return response.badRequest({ message: "We couldn't verify your credentials." })
    }
  }
}
