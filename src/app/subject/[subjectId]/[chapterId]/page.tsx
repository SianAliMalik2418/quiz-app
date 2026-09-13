import { notFound } from "next/navigation";
import { getChapter } from "@/data/subjects";
import QuizRunner from "@/components/QuizRunner";

export default async function ChapterQuizPage(
  props: PageProps<"/subject/[subjectId]/[chapterId]">
) {
  const { subjectId, chapterId } = await props.params;
  const result = getChapter(subjectId, chapterId);
  if (!result) notFound();

  const { subject, chapter } = result;

  return (
    <QuizRunner
      subjectId={subject.id}
      subjectTitle={subject.title}
      chapter={chapter}
    />
  );
}
