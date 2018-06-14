
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: 'waiyaki',
    password: null,
    database: 'todos-test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
};
