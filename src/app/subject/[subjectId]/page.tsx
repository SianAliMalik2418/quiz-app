import Link from "next/link";
import { notFound } from "next/navigation";
import { getSubject } from "@/data/subjects";
import ChapterList from "@/components/ChapterList";

export default async function SubjectPage(
  props: PageProps<"/subject/[subjectId]">
) {
  const { subjectId } = await props.params;
  const subject = getSubject(subjectId);
  if (!subject) notFound();

  return (
    <main className="flex flex-1 flex-col gap-6">
      <header className="flex items-center gap-3 pt-4">
        <Link href="/" className="text-xl text-slate-400">
          ‹
        </Link>
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <span className="text-4xl">{subject.emoji}</span> {subject.title}
        </h1>
      </header>

      {subject.chapters.length === 0 ? (
        <p className="text-sm text-slate-500">
          No chapters added yet. Send the chapter content to add quizzes here.
        </p>
      ) : (
        <ChapterList subjectId={subject.id} chapters={subject.chapters} />
      )}
    </main>
  );
}
