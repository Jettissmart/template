import Knex from 'knex';
const knexConfig = require("./knexfile"); 
//the below is Query builder
//use KnexConfig development settings(by default if nothing in NODE_ENV) or in NODE_ENV
export const knex = Knex(knexConfig["development"|| process.env.NODE_ENV])
//process.env.NODE_ENV here, we can add(.env file) NODE_ENV= production when depoly
