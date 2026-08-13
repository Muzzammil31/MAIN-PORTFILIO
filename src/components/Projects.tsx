import { useState } from "react";
import { ArrowUpRight, X, Layers, Target, Sparkles, User } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { Reveal, SmartImage, Thumb, Lightbox } from "@/components/Media";
import { SectionHeader } from "@/components/SectionHeader";

const accentClass: Record<Project["accent"], string> = {
  cyan: "from-cyan/25",
  violet: "from-violet/25",
  amber: "from-amber/25",
  lime: "from-lime/25",
};

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [box, setBox] = useState<{ images: string[]; index: number; caption: string } | null>(null);
  const active = projects.find((p) => p.id === openId) ?? null;

  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(60%_50%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeader
          index="03"
          kicker="Systems"
          title="AI PROJECT LAB"
          subtitle="Each card is a working system. Open one to inspect the problem, architecture, features, screenshots and my exact contribution."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <article className="group panel relative h-full overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:glow-ring">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accentClass[p.accent]} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <button
                  type="button"
                  onClick={() => setBox({ images: p.images, index: 0, caption: p.title })}
                  className="relative block aspect-video w-full overflow-hidden border-b border-border"
                  aria-label={`Preview ${p.title}`}
                >
                  <SmartImage
                    src={p.images[0] ?? ""}
                    alt={p.title}
                    label="Add project image"
                    className="h-full w-full"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[10px] tracking-widest text-primary backdrop-blur">
                    {p.code}
                  </span>
                </button>

                <div className="relative p-5">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                        {s}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] text-primary">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setOpenId(p.id)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                  >
                    Inspect system <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[75] flex items-start justify-center overflow-y-auto bg-background/90 p-4 py-10 backdrop-blur-xl"
          onClick={() => setOpenId(null)}
        >
          <div className="panel relative w-full max-w-4xl animate-rise p-0" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpenId(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-border bg-background/80 backdrop-blur transition-colors hover:bg-surface-2"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[21/9] overflow-hidden rounded-t-2xl border-b border-border">
              <SmartImage
                src={active.images[0] ?? ""}
                alt={active.title}
                label="Add project image"
                className="h-full w-full"
                imgClassName="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">{active.code}</span>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{active.title}</h3>
                <p className="text-sm text-muted-foreground">{active.tagline}</p>
              </div>
            </div>

            <div className="grid gap-6 p-6 md:grid-cols-2">
              <Block icon={<Target className="h-4 w-4" />} title="Problem">
                <p className="text-sm text-muted-foreground">{active.problem}</p>
              </Block>
              <Block icon={<Layers className="h-4 w-4" />} title="Architecture">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {active.architecture.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block icon={<Sparkles className="h-4 w-4" />} title="Key features">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {active.features.map((a) => (
                    <li key={a} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block icon={<User className="h-4 w-4" />} title="My contribution">
                <p className="text-sm text-muted-foreground">{active.contribution}</p>
              </Block>

              <div className="md:col-span-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Gallery — click to enlarge</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {active.images.map((img, i) => (
                    <Thumb
                      key={img}
                      src={img}
                      alt={`${active.title} screenshot ${i + 1}`}
                      onOpen={() => setBox({ images: active.images, index: i, caption: active.title })}
                    />
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {active.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {box && (
        <Lightbox
          images={box.images}
          index={box.index}
          caption={box.caption}
          onClose={() => setBox(null)}
          onIndex={(i) => setBox({ ...box, index: i })}
        />
      )}
    </section>
  );
}

function Block({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface/60 p-4">
      <div className="mb-2 flex items-center gap-2 text-primary">
        {icon}
        <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em]">{title}</h4>
      </div>
      {children}
    </div>
  );
}
