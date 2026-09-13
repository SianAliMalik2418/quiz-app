export type ScoreRecord = {
  best: number;
  last: number;
  total: number;
};

function key(subjectId: string, chapterId: string) {
  return `quiz-score:${subjectId}:${chapterId}`;
}

export function getScore(subjectId: string, chapterId: string): ScoreRecord | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(key(subjectId, chapterId));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ScoreRecord;
  } catch {
    return null;
  }
}

export function saveScore(subjectId: string, chapterId: string, score: number, total: number) {
  if (typeof window === "undefined") return;
  const existing = getScore(subjectId, chapterId);
  const record: ScoreRecord = {
    best: Math.max(existing?.best ?? 0, score),
    last: score,
    total,
  };
  window.localStorage.setItem(key(subjectId, chapterId), JSON.stringify(record));
}
