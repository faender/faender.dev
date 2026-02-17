export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">Faender</h1>
        <p className="text-base text-neutral-600">
          AI / Backend Engineer — building practical LLM systems.
        </p>
      </header>

      <section className="mt-10 space-y-3">
        <h2 className="text-lg font-medium">Links</h2>
        <ul className="space-y-2 text-neutral-700">
          <li>
            <a className="underline underline-offset-4" href="https://github.com/faender" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4" href="#" target="_blank" rel="noreferrer">
              LinkedIn (add)
            </a>
          </li>
          <li>
            <a className="underline underline-offset-4" href="/cv.pdf">
              CV (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section className="mt-12 space-y-3">
        <h2 className="text-lg font-medium">Projects</h2>
        <div className="rounded-2xl border p-5">
          <p className="font-medium">RAG Knowledge Base (in progress)</p>
          <p className="mt-1 text-sm text-neutral-600">
            Upload docs → vector search → answers with sources. FastAPI + Postgres/pgvector.
          </p>
        </div>
      </section>

      <footer className="mt-14 text-sm text-neutral-500">
        © {new Date().getFullYear()} Faender
      </footer>
    </main>
  );
}
