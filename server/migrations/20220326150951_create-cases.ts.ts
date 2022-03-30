import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // check if the table exists 
    const hasTable = await knex.schema.hasTable('cases');
    if (!hasTable) {
        await knex.schema.createTable('cases', (table) => {
            table.increments('id'); //id
            table.integer('patient_id'); //id for the form when there are several forms
            table.integer('form_id'); //id for the form when there are several forms
            table.jsonb('answers');// patient answer for each form submission
            table.string('doctor_name');
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
    } else {
        return Promise.resolve();
    }
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('cases');
}

