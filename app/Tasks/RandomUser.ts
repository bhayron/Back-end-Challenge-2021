import Logger from '@ioc:Adonis/Core/Logger'
import { BaseTask } from 'adonis5-scheduler/build'
import Database from '@ioc:Adonis/Lucid/Database'

export default class TaskToCheckSomething extends BaseTask {
  public static get schedule() {
    return '*/1 * * * * *'
  }

  public static get useLock() {
    return false
  }

  public async handle() {
    const fetch = require('node-fetch')

    const url = 'https://randomuser.me/api/?results=5'

    fetch(url)
      .then((result) => result.json())
      .then((data) => {
        console.log(data) // object {text:"hello world"}
      })

    const users = await Database.query().from('users').select('*')

    const ms = new Date().getTime()
    Logger.info('handle start', ms)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    Logger.info('handle end', ms)
  }
}
