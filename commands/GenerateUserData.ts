import { BaseCommand } from '@adonisjs/core/build/standalone'
const cron = require('node-cron')
const fetch = require('node-fetch')

export default class GenerateUserData extends BaseCommand {
  public static commandName = 'generate:user_data'

  public static description = ''

  public static settings = {
    loadApp: true,

    stayAlive: true,
  }

  public async run() {
    //const { default: User } = await import('App/Models/User')
    console.log('starting task to create a random users between 1 day')
    cron.schedule('*/5 * * * * *', () => {
      const amountOfUsers = 2

      fetch(`https://randomuser.me/api?results=${amountOfUsers}`)
        .then((response) => response.json())
        .then(async (userJsonResponse) => {
          const { results } = userJsonResponse
          console.log(results)

          const formattedUsers = results.map((user) => {
            return {
              playerId: user.login.username,
              nickname: `${user.name.title} ${user.name.first} ${user.name.last}`,
              avatarUrl: `${user.picture.thumbnail}`,
              score: Math.ceil(Math.random() * 100),
            }
          })

          // console.log('New users list:', formattedUsers)
          // console.log(`Created ${amountOfUsers} new users and inserted them into the DB`)

          // await User.createMany(formattedUsers)
        })
        .catch((error) => console.error('error', error))
    })

    this.logger.info('Hello world!')
  }
}
