import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // check if the table exists 
    const hasTable = await knex.schema.hasTable('question_list');
    if (!hasTable) {
        await knex.schema.createTable('question_list', (table) => {
            table.increments(); //id
            table.integer('form_id'); //id
            table.string('code');
            table.string('title');
            table.string('type'); //MC, long question, short question
            table.text('description');
            table.string('options');
            table.integer('min');
            table.integer('max');
        });
    } else {
        return Promise.resolve();
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('question_list');
}

