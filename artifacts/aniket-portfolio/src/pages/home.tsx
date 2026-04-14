import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  CircuitBoard,
  Cloud,
  Code2,
  DatabaseZap,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const systemPulse = {
  animate: {
    opacity: [0.28, 0.62, 0.28],
    scale: [1, 1.08, 1],
    transition: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
  },
};

const skillGroups = [
  {
    title: "GenAI Layer",
    icon: Brain,
    tone: "text-violet-600",
    skills: ["LLMs", "Prompt Engineering", "Multi-Agent Systems", "AI Pipelines"],
  },
  {
    title: "Product Layer",
    icon: Code2,
    tone: "text-sky-600",
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "Angular", "Java"],
  },
  {
    title: "Operations Layer",
    icon: Cloud,
    tone: "text-emerald-600",
    skills: ["Docker", "GitHub Actions", "Jenkins", "Kubernetes", "AWS Basics", "Linux"],
  },
];

const aiSystems = [
  {
    name: "AI Recruiter Intelligence System",
    href: "https://github.com/Aniket28-4L/AI-Recruiter-Intelligence-System-GenAI-SaaS-",
    purpose: "Turns unstructured candidate data into recruiter-ready hiring intelligence.",
    input: "Resume + role criteria",
    process: "LLM parsing, fit scoring, risk analysis, interview planning",
    output: "Structured match signals, flags, and questions",
    capabilities: ["LLM Parsing", "Decision Support", "Risk Detection", "JSON Outputs"],
    insight: "Built as a multi-step review loop so recruiters can inspect the reasoning instead of trusting a black box.",
  },
  {
    name: "AI Ops Copilot",
    href: "https://github.com/Aniket28-4L/AI-Ops-Copilot",
    purpose: "Coordinates operational work from user intent to action-ready execution plans.",
    input: "Business request + user context",
    process: "Intent detection, planning, memory, specialized agents",
    output: "Drafted emails, task plans, risks, and next actions",
    capabilities: ["Multi-Agent Flow", "Context Memory", "Task Planning", "React + Node"],
    insight: "Designed around continuity: agents keep context across sessions so daily business workflows feel less fragmented.",
  },
];

const productSystems = [
  {
    name: "Clinic-ERP",
    href: "https://github.com/Aniket28-4L/Clinic-ERP",
    purpose: "A role-based operating system for clinic teams, patients, and staff workflows.",
    input: "Clinic users + operational data",
    process: "Structured APIs, entity models, role-based interface flows",
    output: "Clear operational visibility and smoother clinic coordination",
    capabilities: ["Node.js", "Express", "MongoDB", "Docker", "CI/CD"],
    insight: "Built with a shipping mindset: data models, workflow clarity, containerization, and automation all support reliable handoff.",
  },
  {
    name: "Inventory Management System",
    href: "https://github.com/Aniket28-4L/InventoryManagement",
    purpose: "Gives teams a responsive view of inventory, dashboards, and role-based actions.",
    input: "Inventory records + operational roles",
    process: "Dashboard modeling, access flows, AI-assisted UI prototyping",
    output: "Faster task completion and clearer data visibility",
    capabilities: ["Angular", "Node.js", "Express", "MongoDB", "GitHub Actions"],
    insight: "Used generative AI in the design loop to test flows faster before turning them into production-facing interfaces.",
  },
];

const thinkingFlow = [
  {
    label: "Input",
    title: "Understand the signal",
    description: "Collect resumes, requests, context, or workflow data and normalize it for AI reasoning.",
    color: "text-sky-600",
    icon: ScanSearch,
  },
  {
    label: "AI Processing",
    title: "Route through agents",
    description: "Break the problem into specialized steps: parsing, planning, scoring, memory, and risk review.",
    color: "text-violet-600",
    icon: Network,
  },
  {
    label: "Decision",
    title: "Make reasoning inspectable",
    description: "Convert model responses into structured outputs humans can evaluate quickly and confidently.",
    color: "text-emerald-600",
    icon: CheckCircle2,
  },
  {
    label: "Output",
    title: "Deliver usable action",
    description: "Return interview questions, task drafts, operational insights, or interface-ready recommendations.",
    color: "text-amber-600",
    icon: DatabaseZap,
  },
];

const experience = [
  {
    role: "Freelance Web Developer",
    org: "Remote / Self-Employed",
    period: "Nov 2025 - Jan 2026",
    outcome: "Delivered responsive client interfaces with tighter feedback loops, clearer UI structure, and mobile-ready implementation.",
  },
  {
    role: "Associate Trainee Intern",
    org: "AdmitWorks",
    period: "Jul 2025 - Nov 2025",
    outcome: "Moved repeated content and design tasks toward AI-supported execution, improving visual clarity and turnaround speed.",
  },
];

const certifications = [
  "Career Essentials in Software Development",
  "NPTEL IoT & Cyber Security Practitioners",
  "Deloitte Technology & Cyber Virtual Internship",
  "Decoding DevOps",
];

const backgroundNodes = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 86)}%`,
  top: `${14 + ((index * 23) % 72)}%`,
  delay: index * 0.22,
}));

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

type SystemModuleProps = {
  module: (typeof aiSystems)[number];
  index: number;
};

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div variants={fadeIn} className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
    </motion.div>
  );
}

function FlowPill({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={`rounded-full border border-white/40 bg-white/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur-md ${tone}`}>
      {label}
    </span>
  );
}

function SystemModule({ module, index }: SystemModuleProps) {
  const isAiSystem = index < 2;

  return (
    <motion.a
      variants={fadeIn}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      href={module.href}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-white/30 bg-white/60 p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_18px_60px_rgba(124,58,237,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-to-br from-sky-200/25 to-violet-200/20 blur-3xl transition-transform duration-700 group-hover:scale-110" />
      <div className="relative">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur-md">
              <span className={`h-2 w-2 rounded-full ${isAiSystem ? "bg-violet-500" : "bg-emerald-500"}`} />
              {isAiSystem ? "AI System Module" : "Product System Module"}
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{module.name}</h3>
          </div>
          <Github className="mt-2 h-5 w-5 shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-sky-600" />
        </div>

        <p className="mt-6 mb-4 max-w-2xl text-sm leading-relaxed text-slate-600">{module.purpose}</p>

        <div className="mt-7 grid gap-4 rounded-2xl border border-white/30 bg-white/50 p-4 text-sm shadow-sm backdrop-blur-md md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <div>
            <FlowPill label="Input" tone="text-sky-600" />
            <p className="mt-3 font-medium leading-6 text-slate-700">{module.input}</p>
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-300 md:block" />
          <div>
            <FlowPill label="Process" tone="text-violet-600" />
            <p className="mt-3 font-medium leading-6 text-slate-700">{module.process}</p>
          </div>
          <ChevronRight className="hidden h-4 w-4 text-slate-300 md:block" />
          <div>
            <FlowPill label="Output" tone="text-emerald-600" />
            <p className="mt-3 font-medium leading-6 text-slate-700">{module.output}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {module.capabilities.map((capability) => (
            <span key={capability} className="rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-md">
              {capability}
            </span>
          ))}
        </div>

        <div className="mt-6 max-h-0 overflow-hidden border-t border-white/0 pt-0 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:border-white/40 group-hover:pt-5 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-slate-600">
            <span className="font-semibold text-slate-950">Deeper insight: </span>
            {module.insight}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

function TechnicalProof() {
  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
      <SectionHeader
        eyebrow="Technical proof"
        title="A workflow-first way to design agents."
        description="The logic behind these systems is intentionally inspectable: agent steps, risk review, confidence scoring, and human-readable outputs are all part of the interface."
      />
      <motion.div variants={fadeIn} className="mt-12 overflow-hidden rounded-2xl border border-white/30 bg-slate-950 shadow-[0_20px_65px_rgba(15,23,42,0.14)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
          </div>
          <p className="font-mono text-xs text-slate-500">agent-workflow.ts</p>
        </div>
        <div className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-slate-300 md:p-8 md:text-sm">
          <p><span className="text-sky-300">type</span> Signal = Resume | Request | WorkflowContext;</p>
          <p className="mt-4"><span className="text-violet-300">export async function</span> <span className="text-amber-200">runDecisionSystem</span>(signal: Signal) {'{'}</p>
          <p className="pl-4"><span className="text-sky-300">const</span> intent = <span className="text-violet-300">await</span> agents.intent.detect(signal);</p>
          <p className="pl-4"><span className="text-sky-300">const</span> context = <span className="text-violet-300">await</span> memory.retrieve(intent.userId);</p>
          <p className="pl-4"><span className="text-sky-300">const</span> plan = <span className="text-violet-300">await</span> agents.planner.sequence(intent, context);</p>
          <p className="pl-4"><span className="text-sky-300">const</span> risk = <span className="text-violet-300">await</span> agents.risk.review(plan);</p>
          <p className="pl-4"><span className="text-sky-300">const</span> output = formatter.toHumanReadable({'{'} plan, risk {'}'});</p>
          <p className="pl-4"><span className="text-emerald-300">return</span> {'{'} status: <span className="text-amber-200">"ready_for_review"</span>, confidence: output.score, output {'}'};</p>
          <p>{'}'}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_12%_8%,rgba(2,132,199,0.12),transparent_34%),radial-gradient(circle_at_54%_18%,rgba(236,254,255,0.95),transparent_34%),radial-gradient(circle_at_78%_40%,rgba(124,58,237,0.07),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_42%,#ecfeff_100%)] text-slate-950 selection:bg-slate-950 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.045] [background-image:radial-gradient(#020617_0.6px,transparent_0.6px)] [background-size:16px_16px]" />
      <div className="pointer-events-none fixed left-[-12rem] top-[-14rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none fixed left-1/2 top-[10rem] -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-50/90 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-[-14rem] -z-10 h-[34rem] w-[34rem] rounded-full bg-blue-100/45 blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-white/40 bg-white/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[-0.02em] text-slate-950 md:text-base">Aniket Pandey</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 sm:flex">
            <a href="#systems" className="transition-colors hover:text-slate-950">Systems</a>
            <a href="#thinking" className="transition-colors hover:text-slate-950">Thinking</a>
            <a href="#experience" className="transition-colors hover:text-slate-950">Impact</a>
            <a href="#contact" className="transition-colors hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-32 md:pt-40">
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="relative grid min-h-[82vh] items-center gap-16 py-24 lg:grid-cols-[0.92fr_0.9fr]">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            {backgroundNodes.map((node) => (
              <motion.span
                key={node.id}
                className="absolute h-1.5 w-1.5 rounded-full bg-sky-400/45"
                style={{ left: node.left, top: node.top }}
                animate={{ opacity: [0.15, 0.65, 0.15], y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
              />
            ))}
          </div>

          <div>
            <motion.p variants={fadeIn} className="inline-flex rounded-full border border-white/30 bg-white/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-md">
              GenAI Systems Developer | AI Product Builder (UI/UX Focused)
            </motion.p>
            <motion.p variants={fadeIn} className="mt-9 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Aniket Pandey</motion.p>
            <motion.h1 variants={fadeIn} className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.055em] text-slate-950 md:text-6xl lg:text-7xl lg:leading-[0.98]">
              Building Intelligent Systems, Not Just Applications
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-8 mb-4 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
              I design multi-agent AI workflows that move from messy inputs to structured decisions, usable outputs, and interfaces people can actually trust.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} href="#systems" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(15,23,42,0.16)] transition-all hover:bg-slate-800 hover:shadow-[0_16px_42px_rgba(124,58,237,0.14)]">
                Explore Systems <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/60 px-7 text-sm font-semibold text-slate-950 shadow-sm backdrop-blur-md transition-all hover:bg-white/80 hover:shadow-[0_12px_34px_rgba(124,58,237,0.10)]">
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="relative mx-auto w-full max-w-[34rem]">
            <div className="absolute -inset-7 rounded-[2.5rem] bg-gradient-to-br from-sky-200/25 via-white to-violet-200/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-white/60 p-5 shadow-[0_22px_70px_rgba(15,23,42,0.075)] backdrop-blur-md">
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/30 bg-white/55 px-4 py-3 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white"><CircuitBoard className="h-4 w-4" /></span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Live System Map</p>
                    <p className="text-xs text-slate-500">Intent to decision pipeline</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50/80 px-3 py-1 text-xs font-semibold text-emerald-600">Online</span>
              </div>

              <div className="relative min-h-[24rem] rounded-2xl border border-white/30 bg-gradient-to-br from-white/80 to-slate-50/70 p-6 shadow-sm backdrop-blur-md">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 320" fill="none" aria-hidden="true">
                  <path d="M78 70 C145 20 235 26 304 76" stroke="rgba(14,165,233,0.24)" strokeWidth="1.5" />
                  <path d="M80 250 C160 304 274 284 338 208" stroke="rgba(34,197,94,0.24)" strokeWidth="1.5" />
                  <path d="M92 164 C160 96 258 110 326 168" stroke="rgba(139,92,246,0.22)" strokeWidth="1.5" />
                </svg>

                <motion.div variants={systemPulse} animate="animate" className="absolute left-8 top-10 h-24 w-24 rounded-full border border-sky-200/70 bg-sky-50/85 p-4 shadow-[0_12px_36px_rgba(14,165,233,0.10)] backdrop-blur-md">
                  <p className="text-xs font-semibold text-sky-700">Input</p>
                  <p className="mt-2 text-[11px] leading-4 text-slate-600">Resume, request, context</p>
                </motion.div>
                <motion.div variants={systemPulse} animate="animate" transition={{ delay: 0.45 }} className="absolute right-9 top-14 h-28 w-28 rounded-full border border-violet-200/70 bg-violet-50/85 p-4 shadow-[0_12px_36px_rgba(124,58,237,0.10)] backdrop-blur-md">
                  <p className="text-xs font-semibold text-violet-700">AI Layer</p>
                  <p className="mt-2 text-[11px] leading-4 text-slate-600">Agents, memory, planning</p>
                </motion.div>
                <motion.div variants={systemPulse} animate="animate" transition={{ delay: 0.9 }} className="absolute bottom-10 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-emerald-200/70 bg-emerald-50/85 p-4 shadow-[0_12px_36px_rgba(34,197,94,0.10)] backdrop-blur-md">
                  <p className="text-xs font-semibold text-emerald-700">Output</p>
                  <p className="mt-2 text-[11px] leading-4 text-slate-600">Clear decision and next step</p>
                </motion.div>

                <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/40 bg-white/70 shadow-[0_14px_42px_rgba(15,23,42,0.06)] backdrop-blur-md">
                  <Sparkles className="h-6 w-6 text-violet-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-20">
          <SectionHeader eyebrow="System layers" title="A compact stack for turning AI workflows into usable products." description="The portfolio is organized like a product architecture: intelligence, interface, and operational readiness working together." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={fadeIn} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="group rounded-2xl border border-white/30 bg-white/60 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_18px_60px_rgba(124,58,237,0.12)]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="rounded-2xl border border-white/30 bg-white/55 px-4 py-3 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-md transition-colors group-hover:text-slate-950">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="systems" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <SectionHeader eyebrow="AI Systems" title="AI Systems I’ve Built" description="Each project is presented as a system module: what it accepts, how it reasons, and what it returns to the human using it." />
          <div className="mt-16 space-y-8">
            {aiSystems.map((module, index) => <SystemModule key={module.name} module={module} index={index} />)}
          </div>
          <motion.div variants={fadeIn} className="mt-16">
            <p className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              <Workflow className="h-4 w-4 text-emerald-500" /> Product Systems
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              {productSystems.map((module, index) => <SystemModule key={module.name} module={module} index={index + 2} />)}
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="thinking" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <SectionHeader eyebrow="How my systems think" title="From raw signal to usable decision." description="The differentiator is not just calling a model. It is designing the workflow around context, reasoning, risk, and human-readable outputs." />
          <div className="mt-14 grid gap-4 lg:grid-cols-4">
            {thinkingFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.label} variants={fadeIn} whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="relative rounded-2xl border border-white/30 bg-white/60 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.055)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_18px_60px_rgba(124,58,237,0.10)]">
                  {index < thinkingFlow.length - 1 && <div className="absolute right-[-1.15rem] top-1/2 z-10 hidden h-px w-8 bg-gradient-to-r from-slate-200 to-transparent lg:block" />}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{step.label}</span>
                    <Icon className={`h-5 w-5 ${step.color}`} />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.035em] text-slate-950">{step.title}</h3>
                  <p className="mt-4 mb-4 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <TechnicalProof />

        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="grid gap-12 py-24 lg:grid-cols-[0.78fr_1fr]">
          <SectionHeader eyebrow="Impact" title="Experience translated into product outcomes." description="The focus stays on visible improvement: clearer interfaces, faster workflows, cleaner assets, and practical AI adoption." />
          <motion.div variants={fadeIn} className="space-y-5">
            {experience.map((item) => (
              <motion.div key={item.role} whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_18px_60px_rgba(124,58,237,0.10)]">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{item.org}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{item.period}</p>
                </div>
                <p className="mt-5 mb-4 text-sm leading-relaxed text-slate-600">{item.outcome}</p>
              </motion.div>
            ))}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-md">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">B.Tech Computer Engineering</h3>
                <p className="mt-2 mb-4 text-sm leading-relaxed text-slate-600">RK University, Rajkot. Expected May 2026. CGPA 8.40/10.</p>
              </div>
              <div className="rounded-2xl border border-white/30 bg-white/60 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.05)] backdrop-blur-md">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Learning Signals</h3>
                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {certifications.map((cert) => <p key={cert}>{cert}</p>)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/60 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] backdrop-blur-md md:p-12">
            <motion.div variants={fadeIn} className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Contact</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">Let’s discuss AI systems, product prototypes, and usable automation.</h2>
              </div>
              <div className="grid gap-3">
                <a href="mailto:aniketpandey4723k@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/55 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:text-sky-600 hover:shadow-[0_12px_34px_rgba(124,58,237,0.10)]">
                  <Mail className="h-5 w-5" /> aniketpandey4723k@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/aniket-pandey-1b3a59291" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/55 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:text-sky-600 hover:shadow-[0_12px_34px_rgba(124,58,237,0.10)]">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a href="https://github.com/Aniket28-4L" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/55 px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:text-sky-600 hover:shadow-[0_12px_34px_rgba(124,58,237,0.10)]">
                  <Github className="h-5 w-5" /> GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/40 bg-white/45 py-10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 text-sm text-slate-500 md:flex-row">
          <p className="font-semibold text-slate-950">Aniket Pandey</p>
          <p>GenAI Systems Developer | AI Product Builder</p>
        </div>
      </footer>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href="https://wa.me/917984266324?text=Hi%20Aniket%2C%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20project%20with%20you."
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp"
              className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-[0_14px_34px_rgba(14,165,233,0.28)] outline-none ring-1 ring-white/50"
              animate={{ scale: [1, 1.045, 1], boxShadow: ["0 14px 34px rgba(14,165,233,0.22)", "0 16px 42px rgba(34,197,94,0.30)", "0 14px 34px rgba(14,165,233,0.22)"] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageCircle className="h-5 w-5" />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent side="left" className="mr-2 border-slate-200 bg-white text-slate-700 shadow-xl">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default Home;
