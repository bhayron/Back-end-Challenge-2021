import test from 'japa'
import supertest from 'supertest'
import { UserFactory } from 'Database/factories'
import User from 'App/Models/User'

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

test.group('Welcome', () => {
  test('Ensure home page works', async (assert) => {
    const { text } = await supertest(BASE_URL).get('/').expect(200)
    assert.exists(text)
  })
  test('it shoud create an user', async (assert) => {
    const userPayload = {
      email: 'test@test.com',
      username: 'teste',
      password: '123456',
    }
    const { body } = await supertest(BASE_URL).post('/users/register').send(userPayload).expect(201)

    assert.exists(body)
  })

  test('it shoud create an user with model', async (assert) => {
    const user = new User()
    user.email = 'bhayron@mail.com'
    user.password = '12345678'
    await user.save()

    assert.exists(user.email)
    assert.exists(user.password)
  })

  test('ensure user password gets hashed during save', async (assert) => {
    const user = new User()
    user.email = 'bhayron@mail.com'
    user.password = '12345678'
    await user.save()

    assert.notEqual(user.password, '12345678')
  })
  test('it should authenticate an user', async (assert) => {
    const plainPassword = 'test'
    const { email } = await UserFactory.merge({ password: plainPassword }).create()
    const { body } = await supertest(BASE_URL)
      .post('/users/login')
      .send({ email, password: plainPassword })
      .expect(200)
    assert.exists(body)
  })
  test('it should get users', async (assert) => {
    const { body } = await supertest(BASE_URL).get('/users').expect(401)
    assert.exists(body)
  })
})
