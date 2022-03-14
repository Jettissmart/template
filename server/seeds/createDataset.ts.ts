import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("questions").del();

    // Inserts seed entries
    await knex("questions").insert([
        { question: "q1",option_0:"" },
        { question: "q2" },
        { question: "q2" }
    ]);
};
