const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'docker',
  port: 5432
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if (err) {
      throw err;
    }

    res.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers
};
