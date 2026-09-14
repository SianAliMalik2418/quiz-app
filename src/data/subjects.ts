import { computer } from "@/data/computer";
import { geography } from "@/data/geography";
import { history } from "@/data/history";
import { science } from "@/data/science";
import type { Chapter, Subject } from "@/lib/types";

export const COMBINED_CHAPTER_ID = "combined-revision";

function pickEvenly<T>(arr: T[], count: number): T[] {
  if (arr.length <= count) return arr;
  const step = arr.length / count;
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[Math.floor(i * step)]);
  }
  return result;
}

function buildCombinedChapter(subject: Subject): Chapter | null {
  if (subject.chapters.length < 2) return null;
  const questions =
    subject.combinedQuestions ??
    subject.chapters.flatMap((c) => pickEvenly(c.questions, 8));
  return {
    id: COMBINED_CHAPTER_ID,
    title: "Combined Revision (All Chapters)",
    questions,
  };
}

export const subjects: Subject[] = [geography, science, computer, history].map((subject) => {
  const combined = buildCombinedChapter(subject);
  return combined ? { ...subject, chapters: [...subject.chapters, combined] } : subject;
});

export function getSubject(subjectId: string): Subject | undefined {
  return subjects.find((s) => s.id === subjectId);
}

export function getChapter(subjectId: string, chapterId: string) {
  const subject = getSubject(subjectId);
  if (!subject) return undefined;
  const chapter = subject.chapters.find((c) => c.id === chapterId);
  return chapter ? { subject, chapter } : undefined;
}
