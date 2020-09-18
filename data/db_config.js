const knex = require("knex");

const knexConfig = require("../knexfile.js");

const configuration = knex(knexConfig.development);

module.exports = configuration;
