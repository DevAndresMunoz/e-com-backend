const { faker } = require("@faker-js/faker");
const pool = require('./config/db');

// const userData = [];

const seedUsers = async () => {
    for (let i = 0; i < 100; i++) {
       await pool.query(`INSERT INTO users (
        firstName
        , lastName
        , email
        , password
        , phoneNumber
        , dateOfBirth
        , address
        , city
        , state
        , country
        , postalCode
        , role
        , profilePicURL
        , createdAt
        , updatedAt)
        VALUES (
        faker.person.firstName()
        , ${faker.person.lastName()}
        , ${faker.internet.email()}
        , ${faker.internet.password()}
        , ${faker.phone.number()}
        , ${faker.date.birthdate()}
        , ${faker.location.streetAddress()}
        , ${faker.location.city()}
        , ${faker.location.state()}
        , ${faker.location.country()}
        , ${faker.location.zipCode()}
        , "user"
        , ${faker.image.url()}
        , ""
        , ""
        )`)};
}

seedUsers();

