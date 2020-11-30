const fs = require("fs");
const pg = require("pg");

require("dotenv").config();

pg.defaults.ssl = {
  rejectUnauthorized: true,
  ca: fs.readFileSync("./ssl/ca-certificate.crt"),
};

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev.sqlite",
    },
    migrations: {
      directory: "./db/migrations",
    },
    useNullAsDefault: true,
  },

  staging: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./db/migrations",
    },
  },
};
