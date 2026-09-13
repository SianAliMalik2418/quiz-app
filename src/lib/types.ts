export type MCQ = {
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
};

export type Chapter = {
  id: string;
  title: string;
  questions: MCQ[];
};

export type Subject = {
  id: string;
  title: string;
  emoji: string;
  chapters: Chapter[];
  /** Hand-picked, most-important questions for exam-day revision (not a random sample). */
  combinedQuestions?: MCQ[];
};
