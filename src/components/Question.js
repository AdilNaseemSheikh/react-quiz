import React from "react";
import Options from "./options";
import { useQuiz } from "../contexts/QuizContext";

function Question() {
  const { questions, answer, dispatch, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      {/* prop drilling can be avoided here but it's not a big deal */}
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
