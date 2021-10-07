import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'REST Back-end Challenge 20201209 Running' }
})

Route.get('users', 'AuthController.index')

Route.post('users/register', 'AuthController.register')
