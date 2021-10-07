import Logger from '@ioc:Adonis/Core/Logger'
import { BaseTask } from 'adonis5-scheduler/build'

export default class TaskToCheckSomething extends BaseTask {
  public static get schedule() {
    return '*/10 * * * * *'
  }

  public static get useLock() {
    return false
  }

  public async handle() {
    const ms = new Date().getTime()
    Logger.info('handle start', ms)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    Logger.info('handle end', ms)
  }
}
