import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // check if the table exists 
    const hasTable = await knex.schema.hasTable('question_list');
    if (!hasTable) {
        await knex.schema.createTable('question_list', (table) => {
            table.increments('id'); //id
            table.integer('form_id'); //id for the form when there are several forms
            table.string('code');
            table.string('title');
            table.string('type'); //MC, long question, short question
            table.text('description');
            table.specificType('options','JSON ARRAY');
            table.integer('min');
            table.integer('max');
            table.timestamps(false,true); //create both created_at ,updated_at
        });
    } else {
        return Promise.resolve();
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('question_list');
}

