import Knex from 'knex';
const knexConfig = require("./knexfile");
const knex = Knex(knexConfig["development" || process.env.NODE_ENV]);
export default knex;