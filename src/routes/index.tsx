import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  X,
  Clock,
  Home,
  Dumbbell,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Star,
  ArrowRight,
  Zap,
  Heart,
  TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/carrossel-seven-data-14.png.asset.json";
import anatomyImg from "@/assets/anatomy.jpg";
import beforeAfterImg from "@/assets/before-after.jpg";
import expertImg from "@/assets/expert.jpg";
import adrianaImg from "@/assets/adriana.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Reusable primitives ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
      <span className="h-px w-6 bg-primary/40" />
      {children}
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[2.25rem] leading-[1.05] tracking-tight text-ink sm:text-5xl">
      {children}
    </h2>
  );
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href="#oferta"
      className={
        "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[15px] font-medium text-primary-foreground shadow-soft transition-all hover:bg-primary active:scale-[0.98] " +
        className
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-2xl border border-border/60 bg-card p-5 shadow-soft " + className
      }
    >
      {children}
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20">
      <div className="grain-bg absolute inset-0 -z-10 opacity-70" />
      <div className="container-page">
        <div className="mb-8 flex items-center justify-center">
          <span className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
            Woman Power Training
          </span>
        </div>

        <h1 className="font-display text-[2.35rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem]">
          A maioria das mulheres aprende a treinar pernas, glúteos e braços.
          <span className="mt-4 block">
            Mas existe um músculo na sua barriga que{" "}
            <em className="italic text-primary">ninguém te ensinou</em>.
          </span>
        </h1>

        <div className="relative mt-10">
          <div className="overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-card">
            <img
              src={heroImg.url}
              alt="Transformação real com o método"
              width={1200}
              height={1400}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="pointer-events-none absolute -left-2 top-6 flex flex-col gap-2">
            <FloatingChip icon={<Clock className="h-3.5 w-3.5" />} label="15 min / dia" />
          </div>
          <div className="pointer-events-none absolute -right-2 bottom-6 flex flex-col items-end gap-2">
            <FloatingChip icon={<Home className="h-3.5 w-3.5" />} label="Sem academia" />
            <FloatingChip icon={<Dumbbell className="h-3.5 w-3.5" />} label="Mini band" />
          </div>
        </div>

        <p className="mt-9 text-[17px] leading-relaxed text-ink sm:text-xl">
          Quando ele está adormecido, nenhum treino vai entregar o resultado que você merece.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2.5 rounded-full border border-border/70 bg-card px-4 py-3 shadow-soft">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
          <span className="text-[13px] font-medium text-ink">
            Mais de 7.000 mulheres já testaram e aprovaram.
          </span>
        </div>

        <div className="mt-6">
          <CTA>QUERO APRENDER AGORA</CTA>
        </div>
      </div>
    </section>
  );
}

function Story() {
  const lines = [
    "Mãe de 3 filhas.",
    "43 anos.",
    "A saia PP ficou larga na cintura.",
  ];
  const body = [
    "Adriana treinava há anos.",
    "Musculação.",
    "Cardio.",
    "Alimentação controlada.",
    "Mesmo assim a barriga continuava para frente.",
    "Foi quando ela aprendeu a ativar corretamente o abdômen.",
    "Em poucas semanas a cintura afinou.",
    "A barriga começou a responder ao treino.",
    "A saia PP ficou larga.",
  ];
  return (
    <section className="bg-cream py-20">
      <div className="container-page">
        <SectionLabel>História real</SectionLabel>
        <h2 className="mt-4 font-display text-[2.25rem] leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {lines.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-card">
          <img
            src={adrianaImg}
            alt="Adriana, 43 anos, mãe de 3 filhas"
            width={1200}
            height={1408}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <div className="p-4 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Adriana · 43 anos
          </div>
        </div>

        <div className="mt-8 space-y-2.5 border-l border-primary/25 pl-5">
          {body.map((p) => (
            <p key={p} className="text-[16px] leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-1.5 rounded-full border border-border/70 bg-card/95 px-3 py-1.5 text-[11px] font-medium text-ink shadow-soft backdrop-blur">
      <span className="text-primary">{icon}</span>
      {label}
    </div>
  );
}

function Identification() {
  const items = [
    "Sua barriga parece sempre estufada",
    "Você emagrece, mas o abdômen não muda",
    "Faz abdominal e sente só o pescoço",
    "Já tentou academia várias vezes",
    "Tem vergonha de usar roupas justas",
    "Parece que sua barriga está sempre relaxada",
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>Identificação</SectionLabel>
        <H2>
          <span className="mt-3 block">Você se identifica?</span>
        </H2>
        <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
          Você reconhece alguma dessas situações?
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-soft"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/12">
                <Check className="h-3.5 w-3.5 text-success" />
              </span>
              <span className="text-[15px] leading-snug text-ink">{t}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm italic text-muted-foreground">
          Se marcou duas ou mais opções, continue lendo.
        </p>
      </div>
    </section>
  );
}

function BeliefBreak() {
  const items = [
    "Fazer centenas de abdominais",
    "Treinar mais pesado",
    "Fazer horas de cardio",
    "Cortar ainda mais calorias",
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="container-page">
        <SectionLabel>Quebra de crença</SectionLabel>
        <H2>
          <span className="mt-3 block">
            Talvez o problema nunca tenha sido <em className="italic text-primary">falta de esforço</em>.
          </span>
        </H2>

        <ul className="mt-8 grid grid-cols-1 gap-3">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-start gap-3 rounded-2xl border border-destructive/15 bg-destructive/[0.04] p-4"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <X className="h-3.5 w-3.5 text-destructive" />
              </span>
              <span className="text-[15px] leading-snug text-ink">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted-foreground">
          <p>Tudo isso fortalece músculos superficiais.</p>
          <p className="text-ink">
            Mas quase ninguém ativa primeiro o músculo responsável por{" "}
            <span className="text-primary">estabilizar o abdômen</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

function Discovery() {
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>O mecanismo</SectionLabel>
        <H2>
          <span className="mt-3 block">O Transverso Abdominal</span>
        </H2>
        <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
          Um músculo profundo que funciona como uma{" "}
          <em className="italic text-primary">cinta natural</em>.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
          <img
            src={anatomyImg}
            alt="Camadas do abdômen feminino: pele, gordura, oblíquos e transverso abdominal"
            width={1200}
            height={1200}
            loading="lazy"
            className="h-auto w-full"
          />
        </div>

        <ol className="mt-8 space-y-3">
          {[
            { label: "Pele", note: "camada externa" },
            { label: "Gordura", note: "subcutânea" },
            { label: "Oblíquos", note: "músculos laterais" },
            { label: "Transverso abdominal", note: "a cinta natural", highlight: true },
          ].map((row, i) => (
            <li
              key={row.label}
              className={
                "flex items-center gap-4 rounded-2xl border p-4 " +
                (row.highlight
                  ? "border-primary/30 bg-accent"
                  : "border-border/60 bg-card")
              }
            >
              <span className="font-display text-2xl text-primary/70">0{i + 1}</span>
              <div>
                <div className="text-[15px] font-medium text-ink">{row.label}</div>
                <div className="text-xs text-muted-foreground">{row.note}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Mechanism() {
  const before = [
    "Transverso inativo",
    "Menor estabilidade",
    "Barriga projetada",
    "Compensações",
    "Mais dificuldade para definir",
  ];
  const after = [
    "Transverso ativado",
    "Maior estabilidade",
    "Melhor postura",
    "Mais eficiência nos exercícios",
    "Abdômen mais firme",
  ];
  const tools = [
    { name: "Bracing", desc: "contração ativa do core" },
    { name: "Hipopressivos", desc: "trabalho respiratório e postural" },
    { name: "Ativação neuromuscular", desc: "reconexão cérebro-músculo" },
  ];
  return (
    <section className="bg-ink py-20 text-primary-foreground">
      <div className="container-page">
        <SectionLabel>Antes e depois</SectionLabel>
        <h2 className="mt-3 font-display text-[2.25rem] leading-[1.05] tracking-tight text-primary-foreground sm:text-5xl">
          Isso ninguém te contou.
        </h2>
        <p className="mt-4 text-[16px] leading-relaxed text-primary-foreground/70">
          O que acontece quando esse músculo permanece{" "}
          <em className="italic text-primary">desligado</em>.
        </p>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-primary-foreground/10">
          <img
            src={beforeAfterImg}
            alt="Mesma mulher: abdômen desativado à esquerda, ativado à direita"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-auto w-full"
          />
          <div className="grid grid-cols-2 divide-x divide-primary-foreground/10 border-t border-primary-foreground/10 text-center text-[11px] uppercase tracking-[0.18em] text-primary-foreground/60">
            <div className="py-3">Abdômen desativado</div>
            <div className="py-3 text-primary">Abdômen ativado</div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <FlowColumn title="Hoje" tone="down" items={before} />
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-primary-foreground/20" />
            <span className="mx-3 text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
              Com o método
            </span>
            <div className="h-px w-16 bg-primary-foreground/20" />
          </div>
          <FlowColumn title="Depois" tone="up" items={after} />
        </div>

        <div className="mt-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
            Três ferramentas ensinadas
          </p>
          <div className="mt-4 space-y-3">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-start gap-3 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-4"
              >
                <Sparkles className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <div className="text-[15px] font-medium">{t.name}</div>
                  <div className="text-xs text-primary-foreground/60">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowColumn({
  title,
  tone,
  items,
}: {
  title: string;
  tone: "up" | "down";
  items: string[];
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <span
          className={
            "flex h-6 w-6 items-center justify-center rounded-full " +
            (tone === "up" ? "bg-primary text-primary-foreground" : "bg-primary-foreground/10")
          }
        >
          {tone === "up" ? <TrendingUp className="h-3.5 w-3.5" /> : <Zap className="h-3.5 w-3.5" />}
        </span>
        <span className="text-[11px] uppercase tracking-[0.22em] text-primary-foreground/60">
          {title}
        </span>
      </div>
      <ol className="space-y-2">
        {items.map((s, i) => (
          <li
            key={s}
            className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] px-4 py-3 text-[14px]"
          >
            <span className="font-display text-lg text-primary/80">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function HowItWorks() {
  const cards = [
    { icon: <Clock className="h-4 w-4" />, title: "12 semanas", desc: "programa completo" },
    { icon: <Sparkles className="h-4 w-4" />, title: "Vídeos", desc: "aulas guiadas passo a passo" },
    { icon: <Home className="h-4 w-4" />, title: "Em casa", desc: "sem depender de academia" },
    { icon: <Zap className="h-4 w-4" />, title: "15 minutos", desc: "sessões curtas e diárias" },
    { icon: <Dumbbell className="h-4 w-4" />, title: "Mini band", desc: "único equipamento" },
    { icon: <TrendingUp className="h-4 w-4" />, title: "Progressão", desc: "avanço semanal" },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>Como funciona</SectionLabel>
        <H2>
          <span className="mt-3 block">
            Como o Método WPT faz seu corpo responder ao treino em{" "}
            <em className="italic text-primary">3 passos</em>.
          </span>
        </H2>

        <div className="mt-8 space-y-4">
          {[
            {
              n: "01",
              icon: <Sparkles className="h-5 w-5" />,
              t: "Aprenda o WPT",
              d: "Você aprende a ativar o transverso abdominal com aulas guiadas de respiração, bracing e ativação neuromuscular.",
            },
            {
              n: "02",
              icon: <Dumbbell className="h-5 w-5" />,
              t: "Treine com abdômen ativado",
              d: "Com o músculo profundo ligado, cada treino passa a recrutar o core corretamente — em casa ou na academia.",
            },
            {
              n: "03",
              icon: <TrendingUp className="h-5 w-5" />,
              t: "Potencialize os resultados",
              d: "Postura, estabilidade e eficiência aumentam. O abdômen fica mais firme e o corpo responde ao treino.",
            },
          ].map((s) => (
            <Card key={s.n} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary">
                  {s.icon}
                </div>
                <span className="font-display text-3xl text-primary/25">{s.n}</span>
              </div>
              <div className="mt-5 text-[17px] font-medium text-ink">{s.t}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{s.d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <Card key={c.title} className="p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-primary">
                {c.icon}
              </div>
              <div className="mt-3 text-[15px] font-medium text-ink">{c.title}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{c.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    "Mulheres sedentárias",
    "Pós-parto (com liberação médica)",
    "Quem treina há anos",
    "Quem nunca treinou",
    "Quem tem barriga estufada",
    "Quem sente o abdômen fraco",
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="container-page">
        <SectionLabel>Para quem é</SectionLabel>
        <H2>
          <span className="mt-3 block">É para você se você se identifica com um destes casos.</span>
        </H2>

        <ul className="mt-8 space-y-2.5">
          {items.map((t) => (
            <li
              key={t}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4"
            >
              <Check className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-[15px] text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function LogicalProofs() {
  const items = [
    { n: "01", t: "Anatomia", d: "As 4 camadas do abdômen e o papel do transverso." },
    { n: "02", t: "Estudos", d: "Evidências sobre ativação profunda e estabilidade lombopélvica." },
    { n: "03", t: "Biomecânica", d: "Como cada movimento depende do core profundo." },
    { n: "04", t: "Infográficos", d: "Postura, respiração e pressão intra-abdominal." },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>Provas lógicas</SectionLabel>
        <H2>
          <span className="mt-3 block">
            Antes de mostrar resultados, mostramos <em className="italic text-primary">o porquê</em>.
          </span>
        </H2>

        <div className="mt-8 space-y-3">
          {items.map((i) => (
            <Card key={i.n} className="flex items-start gap-4">
              <span className="font-display text-3xl leading-none text-primary/70">{i.n}</span>
              <div>
                <div className="text-[15px] font-medium text-ink">{i.t}</div>
                <div className="mt-1 text-sm leading-snug text-muted-foreground">{i.d}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
          <img
            src={beforeAfterImg}
            alt="Antes e depois da ativação do transverso abdominal"
            width={1408}
            height={1008}
            loading="lazy"
            className="h-auto w-full"
          />
          <div className="p-4 text-center text-xs text-muted-foreground">
            Mesma mulher — abdômen desativado à esquerda, ativado à direita.
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const quotes = [
    {
      name: "Adriana, 38",
      photo: depo1,
      text: "Treinava há anos com alimentação controlada e a barriga continuava para frente. Em poucas semanas a cintura afinou e a saia PP começou a servir.",
    },
    {
      name: "Camila, 32",
      photo: depo2,
      text: "Depois do parto, achei que nunca mais teria abdômen firme. Aprender a ativar mudou tudo — em 6 semanas já sentia diferença na postura.",
    },
    {
      name: "Renata, 44",
      photo: depo3,
      text: "Fazia abdominal todo dia e só sentia o pescoço. Aqui aprendi o básico que ninguém tinha me ensinado.",
    },
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="container-page">
        <SectionLabel>Resultados</SectionLabel>
        <H2>
          <span className="mt-3 block">Mais de 7.000 mulheres já aplicaram o método.</span>
        </H2>

        <div className="mt-8 space-y-4">
          {quotes.map((q) => (
            <Card key={q.name} className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={q.photo}
                  alt={q.name}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <div className="text-[15px] font-medium text-ink">{q.name}</div>
                  <div className="mt-1 flex gap-0.5 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">"{q.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mistakes() {
  const items = [
    {
      err: "Acreditar que abdominal resolve",
      fix: "O trabalho começa no músculo profundo, não no superficial.",
    },
    {
      err: "Treinar sem ativação",
      fix: "Sem o core ligado, o esforço vai para os lugares errados.",
    },
    {
      err: "Focar apenas em emagrecer",
      fix: "Reduzir gordura sem estabilidade não muda a forma do abdômen.",
    },
    {
      err: "Ignorar estabilidade",
      fix: "É ela que sustenta a postura, os órgãos e o resultado dos treinos.",
    },
  ];
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>Por que você ainda não conseguiu</SectionLabel>
        <H2>
          <span className="mt-3 block">Quatro erros que quase toda mulher comete.</span>
        </H2>

        <div className="mt-8 space-y-4">
          {items.map((it, i) => (
            <Card key={it.err} className="space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-destructive">
                <X className="h-3.5 w-3.5" /> Erro 0{i + 1}
              </div>
              <div className="text-[16px] font-medium text-ink">{it.err}</div>
              <div className="border-t border-border/60 pt-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
                  <Check className="h-3.5 w-3.5" /> Nova perspectiva
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.fix}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  const items = [
    { name: "Treinos de Musculação", value: "R$ 397,00" },
    { name: "Power HIIT", value: "R$ 197,00" },
    { name: "Foco Abdômen", value: "R$ 297,00" },
    { name: "Alongamento", value: "R$ 127,00" },
    { name: "Ciclo 5x2", value: "R$ 197,00" },
    { name: "Planner", value: "R$ 97,00" },
    { name: "Semana MAP", value: "R$ 97,00" },
    { name: "6 meses", value: "R$ 197,00" },
    { name: "Júlia IA", value: "R$ 140,00" },
  ];

  return (
    <section id="oferta" className="py-20">
      <div className="container-page">
        <SectionLabel>A oferta</SectionLabel>
        <H2>
          <span className="mt-3 block">Tudo que você recebe hoje.</span>
        </H2>

        <div className="relative mt-10 rounded-[1.75rem] border border-primary/25 bg-card p-6 shadow-card ring-1 ring-primary/10 sm:p-8">
          <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary-foreground">
            Método WPT completo
          </span>

          <ul className="mt-3 divide-y divide-border/60">
            {items.map((it) => (
              <li key={it.name} className="flex items-center justify-between gap-4 py-3.5">
                <span className="flex items-center gap-2.5 text-[15px] text-ink">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  {it.name}
                </span>
                <span className="shrink-0 text-[13px] text-muted-foreground">{it.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-muted/60 px-4 py-3.5">
            <span className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              Total
            </span>
            <span className="text-[16px] font-medium text-ink line-through">R$ 1.746,00</span>
          </div>

          <div className="mt-8 text-center">
            <div className="text-[11px] uppercase tracking-[0.28em] text-primary">Hoje</div>
            <div className="mt-3 font-display text-5xl leading-none text-ink">12x R$10,03</div>
            <div className="mt-3 text-[14px] text-muted-foreground">
              ou <span className="text-ink">R$97 à vista</span>.
            </div>

            <a
              href="#"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-6 py-4 text-[15px] font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90 active:scale-[0.98]"
            >
              QUERO APRENDER AGORA
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Acesso imediato · 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="rounded-3xl border border-border/60 bg-card p-8 text-center shadow-card">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent">
            <ShieldCheck className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-6 font-display text-4xl text-ink">7 dias</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Se não fizer sentido para você, devolvemos 100% do valor. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}

function Expert() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="container-page">
        <SectionLabel>A especialista</SectionLabel>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border/60 bg-card shadow-card">
          <img
            src={expertImg}
            alt="Especialista responsável pelo método"
            width={1008}
            height={1200}
            loading="lazy"
            className="h-auto w-full"
          />
          <div className="p-6">
            <h3 className="font-display text-3xl text-ink">
              Por que desenvolvi <em className="italic text-primary">este método</em>.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Mesmo sendo profissional de Educação Física, depois da gestação eu treinava,
              me alimentava bem e continuava frustrada. Descobri que havia uma parte do
              treinamento feminino que ninguém tinha me ensinado.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink">
              Essa descoberta mudou a forma como treino. Hoje já ajudou mais de 7.000 mulheres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Preciso ter academia para fazer o WPT?",
      a: "Não. O programa foi desenhado para ser feito em casa, com peso do corpo e uma mini band. Se você preferir a academia, existe uma versão adaptada.",
    },
    {
      q: "Para quem é o WPT?",
      a: "Para mulheres que já tentaram treinos tradicionais e não veem mudança no abdômen — incluindo pós-parto (com liberação médica), iniciantes e quem já treina há anos.",
    },
    {
      q: "Quanto tempo por dia eu preciso?",
      a: "Entre 15 e 30 minutos. As sessões são curtas, guiadas e progressivas.",
    },
    {
      q: "A Julia (IA) substitui uma nutricionista?",
      a: "Não. Ela é um assistente para tirar dúvidas rápidas e organizar seu ciclo de carboidratos, mas não substitui acompanhamento profissional.",
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos o valor integral.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20">
      <div className="container-page">
        <SectionLabel>Perguntas frequentes</SectionLabel>
        <H2>
          <span className="mt-3 block">Tudo que você precisa saber.</span>
        </H2>

        <ul className="mt-8 space-y-2">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li
                key={it.q}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="text-[15px] font-medium text-ink">{it.q}</span>
                  <ChevronDown
                    className={
                      "h-4 w-4 shrink-0 text-muted-foreground transition-transform " +
                      (isOpen ? "rotate-180" : "")
                    }
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {it.a}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink py-24 text-primary-foreground">
      <div className="container-page">
        <Heart className="mx-auto h-6 w-6 text-primary" />
        <h2 className="mt-6 text-center font-display text-[2.25rem] leading-[1.05] tracking-tight sm:text-5xl">
          Agora você tem <em className="italic text-primary">duas opções</em>.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-primary-foreground/10 bg-primary-foreground/[0.03] p-6">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">
              <X className="h-3.5 w-3.5" /> Opção 01
            </div>
            <div className="mt-4 text-[18px] leading-snug text-primary-foreground/70">
              Continuar treinando como sempre.
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-primary/40 bg-primary/10 p-6 ring-1 ring-primary/20">
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-primary">
              <Check className="h-3.5 w-3.5" /> Opção 02
            </div>
            <div className="mt-4 font-display text-[26px] leading-tight">
              Entrar para o WPT.
            </div>
          </div>
        </div>

        <a
          href="#oferta"
          className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-6 py-4 text-[15px] font-medium text-primary-foreground shadow-soft transition-all hover:opacity-90 active:scale-[0.98]"
        >
          QUERO APRENDER AGORA
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-center text-xs text-primary-foreground/50">
          7 dias de garantia · Acesso imediato
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 text-center">
      <div className="container-page">
        <div className="font-display text-3xl tracking-tight text-ink">WPT</div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          Woman Power Training
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <a href="#" className="transition-colors hover:text-ink">
            Termos de uso
          </a>
          <a href="#" className="transition-colors hover:text-ink">
            Política de privacidade
          </a>
          <a href="#" className="transition-colors hover:text-ink">
            Contato
          </a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
          Pagamento processado com segurança via Hotmart.
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} WPT · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}


function LandingPage() {
  return (
    <main className="relative min-h-screen pb-24">
      <Hero />
      <Story />
      <Identification />
      <BeliefBreak />
      <Discovery />
      <Mechanism />
      <HowItWorks />
      <ForWhom />
      <LogicalProofs />
      <SocialProof />
      <Mistakes />
      <Offer />
      <Guarantee />
      <Expert />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
