import { computer } from "@/data/computer";
import { geography } from "@/data/geography";
import { science } from "@/data/science";
import type { Subject } from "@/lib/types";

export const subjects: Subject[] = [geography, science, computer];

export function getSubject(subjectId: string): Subject | undefined {
  return subjects.find((s) => s.id === subjectId);
}

export function getChapter(subjectId: string, chapterId: string) {
  const subject = getSubject(subjectId);
  if (!subject) return undefined;
  const chapter = subject.chapters.find((c) => c.id === chapterId);
  return chapter ? { subject, chapter } : undefined;
}
