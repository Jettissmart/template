import Knex from 'knex';
const knexConfig = require("./knexfile"); 
//the below is Query builder
//use KnexConfig development settings(by default if nothing in NODE_ENV) or in NODE_ENV
export const knex = Knex(knexConfig["development"|| process.env.NODE_ENV])
//process.env.NODE_ENV here, we can add(.env file) NODE_ENV= production when depoly

// async function addData(){
//  knex("case").insert(formData)
//   const staff = await knex.select("*").from ("staff").where("id",">","0");
//   console.log(staff);
//   //remeber to close knex after use
//   knex.destroy();
// }
// addData();

async function findQestions(){
    knex("questions").insert(formData)
     const q1 = await knex.select("*").from ("questions");
     console.log(q1);
     //remeber to close knex after use
     knex.destroy();
   }
   findQestions();