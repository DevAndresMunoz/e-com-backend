const pool = require('../config/db'); // Import the pool

const queryDatabase = async () => {
  try {
    // Example query
    const res = await pool.query('SELECT * FROM users');
    console.log(res.rows);
  } catch (err) {
    console.error('Error executing query:', err.stack);
  } finally {
    await pool.end();
  }
};

queryDatabase();