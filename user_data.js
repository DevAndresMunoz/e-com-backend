const { faker } = require("@faker-js/faker");
const pool = require('./config/db');

const seedUsers = async () => {
    const users = [];
    for (let i = 0; i < 100; i++) {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        const phoneNumber = faker.phone.number({ style: 'national' });
        const dateOfBirth = faker.date.birthdate();
        const address = faker.location.streetAddress();
        const city = faker.location.city();
        const state = faker.location.state();
        const country = faker.location.country();
        const postalCode = faker.location.zipCode();
        const role = 'user';
        const profilePicURL = faker.image.url();
        const createdAt = new Date;
        const updatedAt = new Date;
        users.push({
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
            , updatedAt
        })
    };

    try {
        const client = await pool.connect();
        for (const user of users) {
            console.log(user);
            await client.query(
                `INSERT INTO users (
                first_name
                , last_name
                , email
                , password
                , phone_number
                , date_of_birth
                , address
                , city
                , state
                , country
                , postal_code
                , role
                , profile_picture_url
                , created_at
                , updated_at)
                VALUES  (
                    $1
                    , $2
                    , $3
                    , $4
                    , $5
                    , $6
                    , $7
                    , $8
                    , $9
                    , $10
                    , $11
                    , $12
                    , $13
                    , $14
                    , $15
                    )`
                , [
                    user.firstName
                    , user.lastName
                    , user.email
                    , user.password
                    , user.phoneNumber
                    , user.dateOfBirth
                    , user.address
                    , user.city
                    , user.state
                    , user.country
                    , user.postalCode
                    , user.role
                    , user.profilePicURL
                    , user.createdAt
                    , user.updatedAt
                ] 
            );
        }
        console.log("Users seeded successfully");
        client.release();
    } catch (err) {
        console.error("Error seeding users:", err);
    }
};

seedUsers();

