import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable('users');
    if(!hasTable){
        return await knex.schema.createTable('users',(table)=>{
                table.increments();
                table.string('username').notNullable();
                table.string('password'); //varchar
                table.string('chronic_disease');
                table.string('gender');
                table.date('birthday');
                table.string('delivery_address');
                table.integer('mobile');
                table.string('email');
                table.integer('registered_number');
                table.string('role');
                table.text('other_info'); 
                table.timestamps(false,true); //create both created_at ,updated_at

        });
    }else{
        return Promise.resolve();
    }
};


//row back 還原上一步 drop the above table
export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users');
}

