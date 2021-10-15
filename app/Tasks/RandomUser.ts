import Logger from '@ioc:Adonis/Core/Logger'
import { BaseTask } from 'adonis5-scheduler/build'

import User from 'App/Models/User'

const fetch = require('node-fetch')

export default class TaskToCheckSomething extends BaseTask {
  public static get schedule() {
    //return '*/70 * 3 * * *'
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
              //name
              gender: user.gender,

              title: user.name.title,
              first: user.name.first,
              last: user.name.last,
              //location
              number: user.location.street.number,
              nameLoc: user.location.street.name,
              city: user.location.city,
              state: user.location.state,
              country: user.location.country,
              postcode: user.location.postcode,
              //coordinates
              latitude: user.location.coordinates.latitude,
              longitude: user.location.coordinates.longitude,
              //timezone
              offset: user.location.timezone.offset,
              description: user.location.timezone.description,
              //
              email: user.email,
              //login
              uuid: user.login.uuid,
              username: user.login.username,
              password: user.login.password,
              salt: user.login.salt,
              md5: user.login.md5,
              sha1: user.login.sha1,
              sha256: user.login.sha256,
              //dob
              dateDob: user.dob.date,
              ageDob: user.dob.age,
              //dob
              dateReg: user.registered.date,
              ageReg: user.registered.age,
              //
              phone: user.phone,
              cell: user.cell,
              //id
              name: user.id.name,
              value: user.id.value,
              //picture
              large: user.picture.large,
              medium: user.picture.medium,
              thumbnail: user.picture.thumbnail,
              //nat
              nat: user.nat,
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
