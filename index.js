const express = require("express");
const cors = require("cors");
const _ = require("lodash");
const answers = require("./questions.json");

const app = express();
app.use(cors());

app.get("/questions", (req, res) => {
  const RandomNonRepeating = (min, max) => {
    arr = [];
    for (i = 0; i < max; i++) {
      x = Math.floor(Math.random() * max) + min;
      if (arr.includes(x) == true) {
        i = i - 1;
      } else {
        if (x > max == false) {
          arr.push(x);
        }
      }
    }
    return arr;
  };
  let math_non_repeating = RandomNonRepeating(0, 7);
  let math_index = math_non_repeating.slice(0, 5);
  let writing_non_repeating = RandomNonRepeating(0, 7);
  let writing_index = writing_non_repeating.slice(0, 5);
  let math_questions = answers.math;
  let writing_questions = answers.writing;
  let math_index_questions = _.at(math_questions, math_index);
  let writing_index_questions = _.at(writing_questions, writing_index);
  res.json(math_index_questions.concat(writing_index_questions));
});

module.exports = app;
