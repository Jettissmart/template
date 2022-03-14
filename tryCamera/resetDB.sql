CREATE TABLE "users"(
    "id" INTEGER NOT NULL,
    "username" INTEGER NOT NULL,
    "password" INTEGER NOT NULL,
    "chronic_disease" VARCHAR(255) NULL,
    "gender" VARCHAR(255) NOT NULL,
    "birthday" DATE NOT NULL,
    "delivery_address" INTEGER NULL,
    "mobile" INTEGER NOT NULL,
    "email" VARCHAR(255) NULL,
    "registered_number" INTEGER NULL,
    "role" INTEGER NULL,
    "registered_at" TIMESTAMP(0) WITH TIME zone NOT NULL,
    "updated_at" TIMESTAMP(0) WITH TIME zone NOT NULL,
    "other_info" TEXT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
CREATE TABLE "questions"(
    "id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "option_0" VARCHAR(255) NULL,
    "option_1" VARCHAR(255) NULL,
    "option_2" VARCHAR(255) NULL,
    "option_3" VARCHAR(255) NULL,
    "option_4" VARCHAR(255) NULL,
    "option_5" VARCHAR(255) NULL,
    "type" VARCHAR(255) NOT NULL,
    "remark" TEXT NULL,
    "created_at" DATE NOT NULL
);
ALTER TABLE
    "questions" ADD PRIMARY KEY("id");
CREATE TABLE "diagnosis"(
    "id" INTEGER NOT NULL,
    "diagnosis_results" INTEGER NOT NULL,
    "prescription" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "report_id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone NOT NULL
);
ALTER TABLE
    "diagnosis" ADD PRIMARY KEY("id");
CREATE TABLE "case"(
    "id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "question_id" INTEGER NOT NULL,
    "answer" INTEGER NOT NULL,
    "created_at" INTEGER NOT NULL
);
ALTER TABLE
    "case" ADD PRIMARY KEY("id");
CREATE TABLE "ai_result"(
    "id" INTEGER NOT NULL,
    "predict_constitution" VARCHAR(255) NOT NULL,
    "predict_drug" TEXT NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "reported_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(0) WITH TIME zone NOT NULL
);
ALTER TABLE
    "ai_result" ADD PRIMARY KEY("id");
CREATE TABLE "report"(
    "id" INTEGER NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "doctor_id" INTEGER NOT NULL,
    "qna_list" INTEGER NOT NULL,
    "ai_result_id" INTEGER NOT NULL,
    "diagnosis_id" INTEGER NOT NULL,
    "status" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "report" ADD PRIMARY KEY("id");
ALTER TABLE
    "diagnosis" ADD CONSTRAINT "diagnosis_doctor_id_foreign" FOREIGN KEY("doctor_id") REFERENCES "users"("id");
ALTER TABLE
    "diagnosis" ADD CONSTRAINT "diagnosis_patient_id_foreign" FOREIGN KEY("patient_id") REFERENCES "users"("id");
ALTER TABLE
    "case" ADD CONSTRAINT "case_patient_id_foreign" FOREIGN KEY("patient_id") REFERENCES "users"("id");
ALTER TABLE
    "case" ADD CONSTRAINT "case_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");
ALTER TABLE
    "report" ADD CONSTRAINT "report_diagnosis_id_foreign" FOREIGN KEY("diagnosis_id") REFERENCES "diagnosis"("id");
ALTER TABLE
    "report" ADD CONSTRAINT "report_ai_result_id_foreign" FOREIGN KEY("ai_result_id") REFERENCES "ai_result"("id");
ALTER TABLE
    "ai_result" ADD CONSTRAINT "ai_result_reported_id_foreign" FOREIGN KEY("reported_id") REFERENCES "report"("id");