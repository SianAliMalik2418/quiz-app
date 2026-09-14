# Exam Quiz App

A mobile-first Next.js quiz app built for a 7th-grade student's final exams. Interactive
MCQ quizzes for Computer, Geography, Science, and History — no database, no auth, no
backend. All content lives in static TypeScript data files and the app runs entirely
client-side (with server components for routing/layout only).

## Who this is for and why

The user (a parent) is helping their child revise for unseen final exam papers covering
Computer, Geography, Science, and History. Content comes from photos of the child's
Oxford University Press textbook chapters, uploaded to `~/Downloads/chapters-contents/`
in per-subject, per-chapter folders (as zip archives of WhatsApp-exported page photos).

**Full coverage is the explicit requirement**: every fact, definition, table, and diagram
label from a chapter must be turned into an MCQ — not just the highlights. When exercise
pages in the textbook show reference MCQs with marked answers, use them to calibrate style
and difficulty, but the bulk of each chapter's questions should be freshly written to cover
material the textbook's own exercises don't test.

## Repo / deployment

- GitHub: https://github.com/SianAliMalik2418/quiz-app (owner's account, not the assistant's)
- Deployed on the user's own Vercel account (they deploy it themselves after `git push`
  to `main` — do not attempt to deploy via the Vercel MCP for this project, that hit
  permission/SSO issues before and isn't needed since the user has it linked already)
- No CI — `git push origin main` is the full release process

## Adding a new chapter (the actual workflow)

1. The user drops chapter photos into `~/Downloads/chapters-contents/<subject>/ch-N/` —
   usually as a `.zip` (sometimes without the `.zip` extension; check with `file`).
2. Extract with `unzip -o -q <archive> -d ch-N/extracted`.
3. Read every extracted image with the Read tool (they're jpegs, viewable directly).
   Batch reads in parallel (5-6 per tool call) to move through a chapter quickly. Expect
   10-20 images per chapter. Watch for duplicate/near-duplicate photos of the same page.
4. Extract every fact, table, definition, and labelled diagram — this is the source of
   truth for MCQs. If the chapter's own exercise pages show MCQs with marked/circled
   correct answers, note the style but don't rely on being able to read faint pencil ticks
   reliably — when in doubt, reason from the textbook prose instead.
5. Write MCQs directly into the subject's data file (see "Data model" below). Aim for
   full coverage over a fixed question count — chapters have ranged from ~30 to ~65
   questions depending on how much content they contain. Do not pad with filler questions
   just to hit a round number, and do not skip facts to stay under one.
6. Add or update `combinedQuestions` on the subject (see below) once the subject has
   2+ chapters.
7. Run `npx tsc --noEmit` and `npx next build` before considering the work done — this
   catches malformed MCQ objects immediately.
8. Commit and push. Tell the user to redeploy (or that push-to-deploy will pick it up,
   if they've since set that up) — don't attempt a Vercel deploy yourself for this repo.

## Data model

- `src/lib/types.ts` — `MCQ` (`question`, 4-tuple `options`, `correctIndex`), `Chapter`,
  `Subject` (has optional `combinedQuestions?: MCQ[]`).
- `src/data/<subject>.ts` — one file per subject (`computer.ts`, `geography.ts`,
  `science.ts`, `history.ts`), each exporting a `Subject` object with a `chapters` array
  and (once the subject has multiple chapters) a hand-picked `combinedQuestions` array.
- `src/data/subjects.ts` — registers all subjects in the `subjects` array (add new
  subjects here) and auto-appends a "Combined Revision" chapter to any subject with 2+
  chapters, built from `combinedQuestions` if present.

### Combined Revision — must be curated, not sampled

**Do not auto-sample chapter questions for the combined revision set.** An earlier version
used even-spaced sampling across chapters (`pickEvenly`), and the user caught that this
produced a heavy bias — most sampled questions happened to have their correct answer as
option A. Combined revision must be a hand-written `combinedQuestions` array on the
subject: pick the highest-yield fact from each topic and reword many questions fresh
rather than copy-pasting the chapter version verbatim, so it reads as genuine synthesis,
not a rehash. `buildCombinedChapter` in `subjects.ts` falls back to sampling only when a
subject has no curated set yet — treat that fallback as a placeholder to replace, not a
long-term acceptable state.

### Answer options must be randomized at runtime, not by hand

Never hand-order options so the correct answer sits in a particular slot — even
unintentional patterns (e.g. correct-answer-is-always-first) are a real bug the user has
hit and flagged before. This is handled for you: `src/lib/shuffle.ts` shuffles each
question's options (and remaps `correctIndex`) with Fisher-Yates, and `QuizRunner` reruns
it on mount and on every "Retry Quiz" press, so option order is randomized every attempt.
When writing MCQ data, put the correct answer in whatever option slot reads most
naturally — don't try to manually balance positions, the runtime shuffle makes that moot.

## UI conventions

- Mobile-first, kid-friendly: big emoji icons (subject emoji at `text-5xl`/`text-4xl`,
  numbered chapter badges via `CHAPTER_ICONS` in `ChapterList.tsx`, 🔥 for Combined
  Revision with an amber highlight).
- Correct/incorrect sound effects are synthesized in-browser via the Web Audio API
  (`src/lib/sound.ts`) — no external audio files, deliberately, to avoid licensing/hosting
  concerns. Keep it that way unless asked otherwise.
- Scores persist per subject/chapter in `localStorage` (`src/lib/scores.ts`) — no backend.
- Tailwind v4, no dark mode (the boilerplate's `prefers-color-scheme` block was removed
  from `globals.css` on purpose — it fought with the light-only design and produced
  low-contrast text; don't reintroduce it without deliberately redesigning for dark mode).

## Next.js 16 specifics (this repo, not general Next.js knowledge)

- Route params are `Promise`s: `await props.params` in page components.
- Typed routes: use `PageProps<'/exact/route'>` / `LayoutProps<'/exact/route'>` from the
  global types generated into `.next/types/routes.d.ts` — these regenerate on `next dev`
  or `next build`, so a fresh route folder needs a build/dev run before `tsc` sees its
  types.
- See `node_modules/next/dist/docs/` for anything else version-specific — training data
  on Next.js APIs may be stale for this version.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
