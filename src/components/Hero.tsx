import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, Cpu } from "lucide-react";
import { profile, stats } from "@/data/portfolio";
import { Reveal, SmartImage } from "@/components/Media";

const ROLES = [
  "AI Engineer",
  "LLM & RAG Engineer",
  "Machine Learning Developer",
  "Computer Vision Engineer",
  "Agentic AI Builder",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const full = ROLES[i % ROLES.length] ?? "";
    const t = setTimeout(
      () => {
        if (!del) {
          setText(full.slice(0, text.length + 1));
          if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(full.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? 40 : 75,
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="gradient-text font-display">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-primary" />
    </span>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return (
    <span className="font-display text-3xl font-bold gradient-text sm:text-4xl">
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_20%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan/25 blur-[110px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-violet/25 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-primary backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" /> AI system online
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-lime backdrop-blur">
                Open to opportunities
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] sm:text-7xl">
              MUZAMMIL
              <br />
              <span className="gradient-text">HUSSAIN</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
              <Typewriter />
            </p>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-line)] px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.04]"
              >
                Explore my work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="panel p-4 transition-transform hover:-translate-y-1">
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--cyan),var(--violet),var(--amber),var(--cyan))] opacity-30 blur-2xl" />
            <div className="panel relative overflow-hidden p-5 animate-float">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
                <SmartImage
                  src={profile.avatar}
                  alt="Muzammil Hussain"
                  label="profile.jpg"
                  className="h-full w-full"
                  imgClassName="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-border bg-background/70 px-3 py-2 backdrop-blur">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                    <Cpu className="h-3.5 w-3.5" /> Neural core
                  </span>
                  <span className="font-mono text-[10px] text-lime">ONLINE</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-lg border border-border bg-surface px-2 py-1.5 text-center">RAG · LLM</span>
                <span className="rounded-lg border border-border bg-surface px-2 py-1.5 text-center">Vision · NLP</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-16 overflow-hidden border-y border-border bg-surface/40 py-3">
        <div className="flex w-max animate-ticker gap-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-8">
              {["Python", "PyTorch", "LangChain", "FastAPI", "ChromaDB", "Ollama", "Hugging Face", "React", "Docker", "PostgreSQL", "RAG", "Agentic AI"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-8">
                    {t} <span className="text-primary">◆</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
