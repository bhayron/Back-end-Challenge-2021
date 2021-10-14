import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('per_page', 5)

    const users = (await Database.from('users').paginate(page, perPage)).toJSON()

    const dados = users.data

    dados.map((item) => {
      const {
        id,
        player_id,
        nickname,
        avatar_url,
        score,
        status,
        imported_t,
        created_at,
        updated_at,
        ...data
      } = item
      const resultados = {
        id,
        player_id,
        nickname,
        avatar_url,
        name: { player_id, nickname },
        score,
        date: { imported_t, created_at, updated_at },
      }

      console.log(resultados)
    })

    //return response.ok({ data: { user: users } })
    return response.ok(users)
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
