/* eslint-disable @typescript-eslint/naming-convention */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Database from '@ioc:Adonis/Lucid/Database'
import RegisterValidator from 'App/Validators/RegisterValidator'
import UpdateValidator from 'App/Validators/UpdateValidator'

export default class UserController {
  public async index({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('per_page', 5)
    const name = request.input('name')

    const user = (
      name
        ? await Database.from('users').where('users.first', name).paginate(page, perPage)
        : await Database.from('users').paginate(page, perPage)
    ).toJSON()

    const data = user.data
    const meta = user.meta

    const users = data.map((item) => {
      const {
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
      } = item

      const result = {
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
        status,
        nat,
      }

      return result
    })

    return response.json({ results: users, info: meta })
  }
  public async register({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(RegisterValidator)

    const user = await User.create(validatedData)

    const token = await auth.login(user)

    return response.status(201).json({ data: token })
  }

  public async login({ request, auth, response }: HttpContextContract) {
    const { email, password } = request.all()
    //console.log(email, password)

    try {
      const token = await auth.attempt(email, password, { expiresIn: '2 days' })

      return response.ok({ data: token, email: email })
    } catch (error) {
      return response.badRequest({ message: "We couldn't verify your credentials." })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.query().where('id', params.id).firstOrFail()
    const data = user.toJSON()
    const {
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
    } = data

    const result = {
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
      status,
      nat,
    }

    return response.json(result)
  }
  public async update({ request, params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    const validatedData = await request.validate(UpdateValidator)

    user.merge(validatedData)
    await user.save()

    return response.json(user)
  }
  public async delete({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return response.status(200).json({ message: 'User deleted with success' })
  }
}
