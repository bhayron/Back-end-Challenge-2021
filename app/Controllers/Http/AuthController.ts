/* eslint-disable @typescript-eslint/naming-convention */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterValidator from 'App/Validators/RegisterValidator'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('per_page', 1)

    const users = (await Database.from('users').paginate(page, perPage)).toJSON()

    const dados = await users.data

    dados.map((item) => {
      const {
        id,
        gender,
        title,
        first,
        last,
        number,
        name_loc,
        city,
        state,
        country,
        postcode,
        latitude,
        longitude,
        offset,
        description,
        email,
        uuid,
        username,
        password,
        salt,
        md5,
        sha1,
        sha256,
        date_dob,
        age_dob,
        date_reg,
        age_reg,
        phone,
        cell,
        name,
        value,
        large,
        medium,
        thumbnail,
        nat,
        status,
        ...rest
      } = item

      const resultados = {
        gender,
        name: { title, first, last },
        location: {
          street: { number, name_loc },
          city,
          state,
          country,
          postcode,
          coordinates: { latitude, longitude },
          timezone: { offset, description },
        },
        email,
        login: {
          uuid,
          username,
          password,
          salt,
          md5,
          sha1,
          sha256,
        },
        dob: {
          date_dob,
          age_dob,
        },
        registered: {
          date_reg,
          age_reg,
        },
        phone,
        cell,
        id: {
          name,
          value,
        },
        picture: {
          large,
          medium,
          thumbnail,
        },
        nat,
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
