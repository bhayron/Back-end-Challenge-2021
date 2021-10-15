import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { message: 'REST Back-end Challenge 20201209 Running' }
})

Route.group(() => {
  Route.get('users', 'UserController.index').middleware('auth')

  Route.post('users/login', 'UserController.login')

  Route.post('users/register', 'UserController.register')

  Route.get('users/show/:id', 'UserController.show').middleware('auth')

  Route.patch('users/update/:id', 'UserController.update').middleware('auth')

  Route.delete('users/:id', 'UserController.delete').middleware('auth')
})
