
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
//await knex.schema.createTable("user", (table)=>{
//     table.increments();
//     table.toString("username").notNullable();
// })
await knex.raw(`CREATE TABLE "users"(
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "chronic_disease" VARCHAR(255) NULL,
    "gender" VARCHAR(255) NOT NULL,
    "birthday" DATE NOT NULL,
    "delivery_address" VARCHAR(255) NULL,
    "mobile" INTEGER NOT NULL,
    "email" VARCHAR(255) NULL,
    "registered_number" INTEGER NULL,
    "role" VARCHAR(255) NULL,
    "registered_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP ,
    "updated_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP ,
    "other_info" TEXT NULL
);`)



await knex.raw(`CREATE TABLE "questions"(
    "id" SERIAL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "option_0" VARCHAR(255) NULL,
    "option_1" VARCHAR(255) NULL,
    "option_2" VARCHAR(255) NULL,
    "option_3" VARCHAR(255) NULL,
    "option_4" VARCHAR(255) NULL,
    "option_5" VARCHAR(255) NULL,
    "type" VARCHAR(255) NOT NULL,
    "remark" TEXT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP
);`)


await knex.raw(`CREATE TABLE "diagnosis"(
    "id" SERIAL PRIMARY KEY,
    "diagnosis_results" INTEGER NOT NULL,
    "prescription" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "report_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP
);`)


await knex.raw(`CREATE TABLE "case"(
    "id" SERIAL PRIMARY KEY,
    "patient_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP
);`)

await knex.raw(`CREATE TABLE "ai_result"(
    "id" SERIAL PRIMARY KEY,
    "predict_constitution" VARCHAR(255) NOT NULL,
    "predict_drug" TEXT NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "report_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP
);`)

await knex.raw(`CREATE TABLE "report"(
    "id" SERIAL PRIMARY KEY,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "qna_list" INTEGER NOT NULL,
    "ai_result_id" INTEGER NOT NULL,
    "diagnosis_id" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL,
     "created_at" TIMESTAMP(0) WITH TIME zone DEFAULT CURRENT_TIMESTAMP
);`)

await knex.raw(`ALTER TABLE
"diagnosis" ADD CONSTRAINT "diagnosis_doctor_id_foreign" FOREIGN KEY("doctor_id") REFERENCES "users"("id");`)
await knex.raw(`ALTER TABLE
"diagnosis" ADD CONSTRAINT "diagnosis_patient_id_foreign" FOREIGN KEY("patient_id") REFERENCES "users"("id");`)
await knex.raw(`ALTER TABLE
    "case" ADD CONSTRAINT "case_patient_id_foreign" FOREIGN KEY("patient_id") REFERENCES "users"("id");`)


await knex.raw(`ALTER TABLE "case" ADD CONSTRAINT "case_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");`)
await knex.raw(`ALTER TABLE "report" ADD CONSTRAINT "report_diagnosis_id_foreign" FOREIGN KEY("diagnosis_id") REFERENCES "diagnosis"("id");`)
await knex.raw(`ALTER TABLE "report" ADD CONSTRAINT "report_ai_result_id_foreign" FOREIGN KEY("ai_result_id") REFERENCES "ai_result"("id");`)
await knex.raw(`ALTER TABLE "ai_result" ADD CONSTRAINT "ai_result_report_id_foreign" FOREIGN KEY("report_id") REFERENCES "report"("id");`)



}




export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTableIfExists('questions')
    await knex.schema.dropTableIfExists('diagnosis')
    await knex.schema.dropTableIfExists('ai_result')
    await knex.schema.dropTableIfExists('report')
    await knex.schema.dropTableIfExists('case')
    await knex.schema.dropTableIfExists('users')
}

