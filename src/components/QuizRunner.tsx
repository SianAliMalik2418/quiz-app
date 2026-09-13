"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Chapter } from "@/lib/types";
import { saveScore } from "@/lib/scores";

export default function QuizRunner({
  subjectId,
  subjectTitle,
  chapter,
}: {
  subjectId: string;
  subjectTitle: string;
  chapter: Chapter;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(chapter.questions.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const question = chapter.questions[index];
  const total = chapter.questions.length;
  const isLast = index === total - 1;

  const progressPct = useMemo(() => Math.round((index / total) * 100), [index, total]);

  function handleSelect(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    const isCorrect = optionIndex === question.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
  }

  function handleNext() {
    if (isLast) {
      saveScore(subjectId, chapter.id, score, total);
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function handleRetry() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers(new Array(total).fill(null));
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="flex flex-1 flex-col gap-6">
        <header className="pt-4 text-center">
          <h1 className="text-xl font-bold">Quiz Complete!</h1>
          <p className="text-sm text-slate-500">
            {subjectTitle} · {chapter.title}
          </p>
        </header>

        <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="text-4xl font-extrabold text-indigo-600">
            {score}/{total}
          </div>
          <div className="text-sm text-slate-500">
            {Math.round((score / total) * 100)}% correct
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {chapter.questions.map((q, i) => {
            const userAnswer = answers[i];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={i}
                className={`rounded-xl p-4 text-sm ring-1 ${
                  isCorrect
                    ? "bg-green-50 ring-green-200"
                    : "bg-red-50 ring-red-200"
                }`}
              >
                <div className="font-medium">
                  {i + 1}. {q.question}
                </div>
                {!isCorrect && (
                  <div className="mt-1 text-slate-600">
                    Your answer: {userAnswer !== null ? q.options[userAnswer] : "—"}
                    <br />
                    Correct answer: {q.options[q.correctIndex]}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <button
            onClick={handleRetry}
            className="w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white active:scale-[0.98] transition"
          >
            Retry Quiz
          </button>
          <Link
            href={`/subject/${subjectId}`}
            className="w-full rounded-xl bg-white py-3 text-center font-semibold text-slate-700 ring-1 ring-slate-200 active:scale-[0.98] transition"
          >
            Back to Chapters
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-5">
      <header className="flex items-center gap-3 pt-4">
        <Link href={`/subject/${subjectId}`} className="text-xl text-slate-400">
          ‹
        </Link>
        <div className="flex-1">
          <div className="text-xs text-slate-500">{chapter.title}</div>
          <div className="text-sm font-semibold">
            Question {index + 1} of {total}
          </div>
        </div>
        <div className="text-sm font-semibold text-indigo-600">Score: {score}</div>
      </header>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-indigo-600 transition-all"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
        <p className="text-lg font-medium">{question.question}</p>
      </div>

      <div className="flex flex-col gap-3">
        {question.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrectOption = i === question.correctIndex;
          let style = "bg-white ring-slate-200 active:scale-[0.98]";
          if (selected !== null) {
            if (isCorrectOption) {
              style = "bg-green-50 ring-green-400";
            } else if (isSelected) {
              style = "bg-red-50 ring-red-400";
            } else {
              style = "bg-white ring-slate-200 opacity-60";
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={selected !== null}
              className={`rounded-xl p-4 text-left text-sm font-medium ring-1 transition ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          onClick={handleNext}
          className="mt-auto w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white active:scale-[0.98] transition"
        >
          {isLast ? "See Results" : "Next Question"}
        </button>
      )}
    </main>
  );
}
