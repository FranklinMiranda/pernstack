const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pernstack',
  password: 'Emp2030!',
  port: 5432,
});

module.exports = pool;
