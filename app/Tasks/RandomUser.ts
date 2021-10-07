import Logger from '@ioc:Adonis/Core/Logger'
import { BaseTask } from 'adonis5-scheduler/build'
import Database from '@ioc:Adonis/Lucid/Database'
const fetch = require('node-fetch')

export default class TaskToCheckSomething extends BaseTask {
  public static get schedule() {
    return '*/1 * * * * *'
  }

  public static get useLock() {
    return false
  }

  public async handle() {

    const { default: User } = await import('App/Models/User')
    console.log('starting task to create a random users between 1 day')
    const amountOfUsers = Math.ceil(Math.random() * 10)
    fetch(`https://randomuser.me/api?results=${amountOfUsers}`)
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

          //await User.createMany(formattedUsers)

    // const axios = require('axios')

    // await axios('https://randomuser.me/api/?results=2').then((response) => {
    //   console.log(response)
    //   return response
    // })

    // const users = await Database.query().from('users').select('*')

    const ms = new Date().getTime()
    Logger.info('handle start', ms)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    Logger.info('handle end', ms)
  }
}
