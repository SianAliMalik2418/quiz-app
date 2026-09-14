import type { MCQ } from "@/lib/types";

function shuffleQuestion(q: MCQ): MCQ {
  const order = [0, 1, 2, 3];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const options = order.map((i) => q.options[i]) as MCQ["options"];
  const correctIndex = order.indexOf(q.correctIndex) as MCQ["correctIndex"];
  return { ...q, options, correctIndex };
}

export function shuffleQuestions(questions: MCQ[]): MCQ[] {
  return questions.map(shuffleQuestion);
}
