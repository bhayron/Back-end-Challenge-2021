import Logger from '@ioc:Adonis/Core/Logger'
import { BaseTask } from 'adonis5-scheduler/build'

import User from 'App/Models/User'

const fetch = require('node-fetch')

export default class TaskToCheckSomething extends BaseTask {
  public static get schedule() {
    return '*/70 * * * * *'
  }

  public static get useLock() {
    return false
  }

  public async handle() {
    const amountOfUsers = 200
    const pagesToLoad = 10

    for (let i = 0; i < pagesToLoad; i++) {
      fetch(`https://randomuser.me/api/?results=${amountOfUsers}&page=${i + 1}`)
        .then((response) => response.json())
        .then(async (userJsonResponse) => {
          const { results } = userJsonResponse
          const formattedUsers = results.map((user) => {
            return {
              playerId: user.login.username,
              nickname: `${user.name.title} ${user.name.first} ${user.name.last}`,
              avatarUrl: `${user.picture.thumbnail}`,
              score: Math.ceil(Math.random() * 100),
            }
          })
          console.log('New users list:', formattedUsers)
          console.log(`Created ${amountOfUsers} new users and inserted them into the DB`)
          await User.createMany(formattedUsers)
        })
        .catch((error) => console.error('error', error))
      const ms = new Date().getTime()
      Logger.info('Start', ms)

      await new Promise((resolve) => setTimeout(resolve, 3000))
      Logger.info('End', ms)
    }
  }
}
