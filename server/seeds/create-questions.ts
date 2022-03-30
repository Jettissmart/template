import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
      // Deletes ALL existing entries
      await knex("question_list").del();

      // Inserts seed entries
      await knex("question_list").insert([
          {form_id:1,code:"COVID_test", title:"test result", type:"options",description:"What is your COVID-19 test result?", 
          options:[{code:"positive",value:"positive"}, {code:"negative",value:"negative"},{code:"no test result", value:"I have not received the test result yet"}, {code:"not test", value:"I did not take a test"}, {code:"recovered", value:"I have just recovered from COVID"}]},
      ]);
};


// { question: "What is your COVID-19 test result?",option_0:"positive test result", option_1:"negative test result", option_2:"I have not received the test result yet",option_3:"I did not take a test", type:"multiple choice"},
//           { question: "cough",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "runny nose",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "headache",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "sore throat",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "muscle aches",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "vomiting",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "diarrhea",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "abdominal pain",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "difficulty breathing",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "chest pain",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "loss of taste or smell",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "new confusion",option_0:"0", option_1:"1", option_2:"2",option_3:"3",option_4:"4", type:"multiple choice", remark:"level"  },
//           { question: "body temperature",option_0:"35.8-37.2", option_1:"37.3-38", option_2:"38.1-39",option_3:"39.1-41",option_4:"41.1 or higher ", type:"multiple choice", remark:"temperature range"  },
//           { question: "phlegm amount",option_0:"no phlegm", option_1:"little clear phlegm", option_2:"lot of clear phlegm",option_3:"little thick phlegm",option_4:"lot of thick phlegm", type:"multiple choice", remark:"amount"  },
//           { question: "phlegm out",option_0:"no phlegm", option_1:"can spit", option_2:"cannot cough out", type:"multiple choice", remark:"cough out phlegm"},
//           { question: "phlegm color",option_0:"no phlegm", option_1:"white", option_2:"yellow",option_3:"green",option_4:"phlegm with blood", type:"multiple choice"  },
//           { question: "feeling cold",option_0:"no", option_1:"yes", type:"multiple choice"  },
//           { question: "fatigue",option_0:"no", option_1:"yes", option_2:"yellow",option_3:"green",option_4:"phlegm with blood", type:"multiple choice"  },
//           { question: "take a tongue top photo", type:"image file name", remark:"upload image file"  },