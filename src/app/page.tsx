export default function Home() {
  const links = [
    { label: "GitHub", href: "https://github.com/faender", hint: "Repos & Code" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andreas-f%C3%A4nder-8183ab379",
      hint: "Profil & Kontakt",
    },
    { label: "CV (PDF)", href: "/cv.pdf", hint: "Download" },
  ];

  const skills = [
    "FastAPI / REST",
    "RAG / LLM Apps",
    "Postgres / pgvector",
    "Docker Basics",
    "Auth / JWT",
    "Testing / Clean Code",
  ];

  const projects = [
    {
      title: "RAG Knowledge Base (in progress)",
      status: "Build",
      description:
        "Upload docs → vector search → Antworten mit Quellen. FastAPI + Postgres/pgvector.",
      highlights: ["FastAPI", "pgvector", "RAG"],
    },
    {
      title: "Project Placeholder",
      status: "Planned",
      description: "Kurze Beschreibung folgt. Dieses Projekt wird später ergänzt.",
      highlights: ["Coming soon"],
    },
    {
      title: "Another Project Placeholder",
      status: "Idea",
      description: "Platzhalter für ein zukünftiges Projekt. Details werden ergänzt.",
      highlights: ["TBD"],
    },
  ];

  const badgeByStatus = (status) => {
    if (status === "Build")
      return "border-[#E2BD6B]/30 bg-[#E2BD6B]/10 text-[#F8E2D4]";
    return "border-[#B984DB]/25 bg-white/5 text-[#F8E2D4]/70";
  };

  const cardByStatus = (status) => {
    if (status === "Build") return "border-[#B984DB]/25 bg-black/25 hover:border-[#E2BD6B]/30";
    return "border-dashed border-[#B984DB]/25 bg-black/15 hover:border-[#B984DB]/40";
  };

  return (
    <main className="min-h-dvh bg-red-500 text-white p-10">
      {/* Background glow (modern look) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#7209B7]/25 blur-3xl" />
        <div className="absolute -bottom-48 left-10 h-[520px] w-[520px] rounded-full bg-[#4D067B]/25 blur-3xl" />
        <div className="absolute -bottom-48 right-10 h-[520px] w-[520px] rounded-full bg-[#E2BD6B]/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/65 to-black/90" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Hero */}
        <header className="space-y-6">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B984DB]/30 bg-white/5 px-3 py-1 text-xs text-[#F8E2D4]/80">
            <span className="h-2 w-2 rounded-full bg-[#E2BD6B]" />
            Open for: AI / Backend • Full-time / Internship
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Andreas <span className="text-[#E2BD6B]">Fänder</span>
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-[#F8E2D4]/80">
              Ich studiere an der FH Campus Wien und beende meinen Bachelor in{" "}
              <span className="text-[#F8E2D4]">„Computer Science and Digital Communications“</span>{" "}
              Ende Juni. Aktuell suche ich eine Position als{" "}
              <span className="text-[#F8E2D4]">Software Developer</span>, vor allem im Bereich{" "}
              <span className="text-[#F8E2D4]">AI</span> oder als{" "}
              <span className="text-[#F8E2D4]">Backend Engineer</span>.
            </p>
          </div>

          {/* Info boxes */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#B984DB]/25 bg-white/5 p-5">
              <p className="text-sm text-[#F8E2D4]/65">Fokus</p>
              <p className="mt-1 text-lg font-medium">RAG • APIs • Daten</p>
              <p className="mt-2 text-sm text-[#F8E2D4]/65">
                Saubere Backends & AI-Features mit nachvollziehbaren Ergebnissen.
              </p>
            </div>

            <div className="rounded-2xl border border-[#B984DB]/25 bg-white/5 p-5">
              <p className="text-sm text-[#F8E2D4]/65">Standort</p>
              <p className="mt-1 text-lg font-medium">Wien (AT)</p>
              <p className="mt-2 text-sm text-[#F8E2D4]/65">
                Hybrid/remote möglich – je nach Team.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2BD6B]/25 bg-[#E2BD6B]/10 p-5">
              <p className="text-sm text-[#F8E2D4]/65">Kontakt</p>
              <p className="mt-1 text-lg font-medium">LinkedIn</p>
              <p className="mt-2 text-sm text-[#F8E2D4]/65">
                Schnellster Weg: LinkedIn oder CV-Kontaktdaten.
              </p>
            </div>
          </div>
        </header>

        {/* Content grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <aside className="space-y-6 lg:col-span-1">
            <section className="rounded-2xl border border-[#B984DB]/25 bg-white/5 p-6">
              <h2 className="text-sm font-semibold tracking-wide">Links</h2>
              <ul className="mt-4 space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      className="group flex items-center justify-between rounded-xl border border-transparent bg-white/0 px-3 py-2 transition hover:border-[#B984DB]/25 hover:bg-white/5"
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span className="font-medium">{l.label}</span>
                      <span className="text-xs text-[#F8E2D4]/60 group-hover:text-[#E2BD6B]">
                        {l.hint} →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-[#7209B7]/25 bg-[#7209B7]/10 p-4">
                <p className="text-xs font-semibold text-[#F8E2D4]/80">Kurzprofil</p>
                <p className="mt-1 text-sm text-[#F8E2D4]/70">
                  Ich baue gerne produktnahe Features, die man messen und erklären kann.
                </p>
              </div>
            </section>

            <section className="rounded-2xl border border-[#B984DB]/25 bg-white/5 p-6">
              <h2 className="text-sm font-semibold tracking-wide">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#B984DB]/25 bg-black/20 px-3 py-1 text-xs text-[#F8E2D4]/80"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* Right */}
          <section className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-[#B984DB]/25 bg-white/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-sm font-semibold tracking-wide">Projects</h2>
                  <p className="mt-2 text-sm text-[#F8E2D4]/65">
                    Ausgewählte Projekte – zwei davon sind Platzhalter für später.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4">
                {projects.map((p) => (
                  <div
                    key={p.title}
                    className={`rounded-2xl border p-5 transition ${cardByStatus(p.status)}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-base font-semibold">{p.title}</p>
                      <span
                        className={`rounded-full border px-3 py-1 text-xs ${badgeByStatus(
                          p.status
                        )}`}
                      >
                        {p.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-[#F8E2D4]/70">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-full bg-[#4D067B]/25 px-3 py-1 text-xs text-[#F8E2D4]/80"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-[#B984DB]/25 bg-gradient-to-r from-[#4D067B]/30 via-[#7209B7]/20 to-[#E2BD6B]/15 p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-base font-semibold">Let’s connect</h2>
                  <p className="mt-1 text-sm text-[#F8E2D4]/75">
                    Wenn du eine AI/Backend-Position offen hast, schreib mir gerne.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/andreas-f%C3%A4nder-8183ab379"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-[#E2BD6B] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
                  >
                    LinkedIn öffnen
                  </a>
                  <a
                    href="/cv.pdf"
                    className="rounded-xl border border-[#F8E2D4]/20 bg-black/30 px-4 py-2 text-sm font-semibold text-[#F8E2D4] transition hover:bg-black/40"
                  >
                    CV ansehen
                  </a>
                </div>
              </div>
            </section>
          </section>
        </div>

        <footer className="mt-12 border-t border-white/10 pt-6 text-xs text-[#F8E2D4]/55">
          © {new Date().getFullYear()} Faender • Palette: #4D067B • #7209B7 • #B984DB • #F8E2D4 • #E2BD6B • + Schwarz
        </footer>
      </div>
    </main>
  );
}
