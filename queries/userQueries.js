const pool = require('../config/db'); // Import the pool

const queryDatabase = async () => {
  try {
    // Example query
    const res = await pool.query('SELECT * FROM users');
    console.log('Database Time:', res.rows[0]);
  } catch (err) {
    console.error('Error executing query:', err.stack);
  } finally {
    await pool.end(); // Close the connection pool
  }
};

queryDatabase();