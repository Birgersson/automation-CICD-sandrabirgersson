import faker from 'faker'

module.exports = {
    base_url: 'http://localhost:3000',
    user1 : 'tester01',
    pw1 : 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',
    badusername : 'hej',
    badpw : 'hejhejhej',
    name : 'This is a name',
    email: 'Email@email.com',
    tele: '0123456789',
    randomname: faker.name.firstName(),
    randomemail: faker.internet.email(),
    randomtele: faker.phone.phoneNumber()
    


}