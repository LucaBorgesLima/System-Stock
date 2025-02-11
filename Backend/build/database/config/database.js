"use strict";
require("dotenv/config");

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;


if (!DB_NAME || !DB_USER || !DB_PASS || !DB_HOST) {
    throw new Error("error in database config");
};

const config = {
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    host: DB_HOST,
    dialect: 'mysql'
};

module.exports = config;