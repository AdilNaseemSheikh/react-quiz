import React from "react";
import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, points, questions, answer } = useQuiz();

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, curr) => acc + curr.points,
    0
  );
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + +(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
