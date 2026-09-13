"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Chapter } from "@/lib/types";
import { getScore } from "@/lib/scores";

export default function ChapterList({
  subjectId,
  chapters,
}: {
  subjectId: string;
  chapters: Chapter[];
}) {
  const [scores, setScores] = useState<Record<string, { best: number; total: number } | null>>(
    {}
  );

  useEffect(() => {
    const next: Record<string, { best: number; total: number } | null> = {};
    for (const chapter of chapters) {
      const record = getScore(subjectId, chapter.id);
      next[chapter.id] = record ? { best: record.best, total: record.total } : null;
    }
    setScores(next);
  }, [subjectId, chapters]);

  return (
    <div className="flex flex-col gap-4">
      {chapters.map((chapter) => {
        const score = scores[chapter.id];
        return (
          <Link
            key={chapter.id}
            href={`/subject/${subjectId}/${chapter.id}`}
            className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 active:scale-[0.98] transition"
          >
            <div>
              <div className="font-semibold">{chapter.title}</div>
              <div className="text-sm text-slate-500">
                {chapter.questions.length} questions
                {score ? ` · Best: ${score.best}/${score.total}` : ""}
              </div>
            </div>
            <span className="text-slate-400">›</span>
          </Link>
        );
      })}
    </div>
  );
}
