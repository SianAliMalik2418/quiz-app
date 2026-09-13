import Link from "next/link";
import { subjects } from "@/data/subjects";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6">
      <header className="pt-4 text-center">
        <h1 className="text-2xl font-bold">Final Exam Quiz</h1>
        <p className="mt-1 text-sm text-slate-500">Pick a subject to practice</p>
      </header>

      <div className="flex flex-col gap-4">
        {subjects.map((subject) => {
          const totalQuestions = subject.chapters.reduce(
            (sum, c) => sum + c.questions.length,
            0
          );
          return (
            <Link
              key={subject.id}
              href={`/subject/${subject.id}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 active:scale-[0.98] transition"
            >
              <span className="text-3xl">{subject.emoji}</span>
              <div className="flex-1">
                <div className="text-lg font-semibold">{subject.title}</div>
                <div className="text-sm text-slate-500">
                  {subject.chapters.length} chapter
                  {subject.chapters.length === 1 ? "" : "s"} · {totalQuestions} questions
                </div>
              </div>
              <span className="text-slate-400">›</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
