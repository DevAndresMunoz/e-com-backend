const { faker } = require("@faker-js/faker");

const userData = [];

for (let i = 0; i < 100; i++) {
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
        dateOfBirth: faker.date.birthdate(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        postalCode: faker.location.zipCode(),
        role: 'user',
        profilePicURL: faker.image.url(),
        createdAt: '',
        updatedAt: ''
    }
    userData.push(user);
}

module.exports(userData);

