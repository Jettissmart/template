import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    const hasTable = await knex.schema.hasTable('users');
    if(!hasTable){
        return await knex.schema.createTable('users',(table)=>{
                table.increments('id');
                table.string('username', 32).unique().notNullable();
                table.string('password_hash',60); //varchar 60 for hash length
                table.string('chronic_disease');
                table.string('gender');
                table.date('birthday');
                table.string('delivery_address');
                table.integer('mobile');
                table.string('email',255);
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

