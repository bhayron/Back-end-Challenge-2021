import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {

  public async run () {
    await User.createMany([
      {
        gender: 'male',
        title: 'Mr',
        first: 'Ryan',
        last: 'Park',
        number: '9651',
        nameLoc: 'Regent Ave',
        city: 'Victoria',
        state: 'Ontario',
        country: 'Canada',
        postcode: 'Z4I 8O5',
        latitude: '-2.1233',
        longitude: '-147.3165',
        offset: '+3:30',
        description: 'Tehran',
        email: 'johndoe@example.com',
        uuid: '6e3461f5-02c5-4ee6-8945-6231a930a1d5',
        username: 'organictiger127',
        password: 'secret',
        salt: 'zEroaDtr',
        md5: '310482021a96286d3bc55f98733b5980',
        sha1: '957d7366d54002cc2cba2da31bbe543b2c31d91e',
        sha256: 'ae8b0fd839d83bbfa07e8c5f5e3cba3a42a237dc3c9b50fd262b7aeef1aa042a',
        dateDob: '1950-02-07T13:50:30.926Z',
        ageDob: '71',
        dateReg: '2003-09-13T23:04:14.138Z',
        ageReg: '18',
        phone: '911-867-1907',
        cell: '044-012-8478',
        name: '',
        value: 'null',
        large: 'https://randomuser.me/api/portraits/men/93.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/93.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/93.jpg',
        nat: 'CA'
      },
    ])
  }

}
