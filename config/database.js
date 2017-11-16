module.exports = {
    development: {
    url: 'postgres://admin:admin@localhost:5432/starter_dev',
    dialect: 'postgres'
  },
    production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    test: {
    url: process.env.DATABASE_URL || 'postgres://admin:admin@localhost:5432/starter_dev',
    dialect: 'postgres'
  }
};