import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Cloud,
  Code2,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Network,
  ShieldCheck,
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

const skillGroups = [
  {
    title: "GenAI & Intelligent Systems",
    icon: Brain,
    skills: ["LLMs", "Prompt Engineering", "Multi-Agent AI Systems", "AI Pipelines"],
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["JavaScript", "Node.js", "Express", "MongoDB", "Angular", "Java"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "GitHub Actions", "Jenkins", "Kubernetes", "AWS Basics", "Linux"],
  },
];

const genAiProjects = [
  {
    title: "AI Recruiter Intelligence System",
    href: "https://github.com/Aniket28-4L/AI-Recruiter-Intelligence-System-GenAI-SaaS-",
    description:
      "A recruiter-facing AI workflow that parses resumes, evaluates candidate fit, detects risk signals, and generates interview-ready questions through structured LLM outputs.",
    stack: ["LLMs", "Prompt Engineering", "JSON Outputs", "Decision Workflow"],
  },
  {
    title: "AI Ops Copilot",
    href: "https://github.com/Aniket28-4L/AI-Ops-Copilot",
    description:
      "A multi-agent business automation prototype that moves from intent detection to planning, memory-aware execution, email drafting, task creation, and operational risk review.",
    stack: ["Multi-Agent AI", "React", "Node.js", "Context Memory"],
  },
];

const otherProjects = [
  {
    title: "Clinic-ERP",
    href: "https://github.com/Aniket28-4L/Clinic-ERP",
    description:
      "A role-based clinic operations system designed around patient, staff, and workflow clarity, with structured APIs, data models, Docker setup, and CI/CD readiness.",
    stack: ["Node.js", "Express", "MongoDB", "Docker", "CI/CD"],
  },
  {
    title: "Inventory Management System",
    href: "https://github.com/Aniket28-4L/InventoryManagement",
    description:
      "A responsive inventory platform with structured dashboards, role-based workflows, fast operational visibility, and AI-assisted interface prototyping.",
    stack: ["Angular", "Node.js", "Express", "MongoDB", "GitHub Actions"],
  },
];

const experience = [
  {
    role: "Freelance Web Developer",
    org: "Remote / Self-Employed",
    period: "Nov 2025 - Jan 2026",
    impact:
      "Translated client needs into responsive web interfaces with clear UI structure, mobile-first execution, and usability-focused refinement cycles.",
  },
  {
    role: "Associate Trainee Intern",
    org: "AdmitWorks",
    period: "Jul 2025 - Nov 2025",
    impact:
      "Improved digital asset workflows with AI-assisted content creation, clearer visual systems, and practical team adoption of AI tools for repeated delivery tasks.",
  },
];

const certifications = [
  "Career Essentials in Software Development",
  "NPTEL IoT & Cyber Security Practitioners",
  "Deloitte Technology & Cyber Virtual Internship",
  "Decoding DevOps",
];

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div variants={fadeIn} className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: (typeof genAiProjects)[number] }) {
  return (
    <motion.a
      variants={fadeIn}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-[1.75rem] border border-white/70 bg-white/70 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-shadow hover:shadow-[0_28px_90px_rgba(14,165,233,0.14)]"
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{project.title}</h3>
        <Github className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-sky-600" />
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{project.description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#ECFEFF] text-slate-950 selection:bg-slate-950 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.035] [background-image:radial-gradient(#020617_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-18rem] -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-violet-200/25 blur-3xl" />

      <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[-0.02em] text-slate-950 md:text-base">Aniket Pandey</a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 sm:flex">
            <a href="#skills" className="transition-colors hover:text-slate-950">Skills</a>
            <a href="#projects" className="transition-colors hover:text-slate-950">Projects</a>
            <a href="#experience" className="transition-colors hover:text-slate-950">Experience</a>
            <a href="#contact" className="transition-colors hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pt-32 md:pt-40">
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="grid min-h-[78vh] items-center gap-14 py-10 lg:grid-cols-[1fr_0.78fr]">
          <div>
            <motion.p variants={fadeIn} className="inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
              GenAI Systems Developer | AI Product Builder (UI/UX Focused)
            </motion.p>
            <motion.p variants={fadeIn} className="mt-9 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Aniket Pandey</motion.p>
            <motion.h1 variants={fadeIn} className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.065em] text-slate-950 md:text-7xl lg:text-[5.8rem] lg:leading-[0.96]">
              Designing intelligent systems. Building practical AI products.
            </motion.h1>
            <motion.p variants={fadeIn} className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              I build multi-agent AI pipelines and decision-support workflows that turn complex ideas into refined, user-focused products with clear interfaces and structured outputs.
            </motion.p>
            <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-colors hover:bg-slate-800">
                View Projects <ArrowRight className="h-4 w-4" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#contact" className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 px-7 text-sm font-semibold text-slate-950 shadow-sm backdrop-blur transition-colors hover:bg-white">
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2.25rem] bg-gradient-to-br from-sky-200/40 via-white to-violet-200/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/70 bg-white/75 p-5 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
              <div className="rounded-[1.5rem] bg-[#0D0F12] p-6 font-mono text-[13px] leading-7 text-slate-300 shadow-2xl">
                <div className="mb-5 flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                </div>
                <p><span className="text-sky-300">async function</span> <span className="text-amber-200">orchestrateWorkflow</span>(input) {'{'}</p>
                <p className="pl-4"><span className="text-sky-300">const</span> intent = <span className="text-violet-300">await</span> agents.intent.detect(input);</p>
                <p className="pl-4"><span className="text-sky-300">const</span> plan = <span className="text-violet-300">await</span> agents.planner.create(intent);</p>
                <p className="pl-4"><span className="text-sky-300">const</span> risk = <span className="text-violet-300">await</span> agents.risk.review(plan);</p>
                <p className="pl-4"><span className="text-emerald-300">return</span> formatDecision({'{'} plan, risk, nextStep: <span className="text-amber-200">"human_review"</span> {'}'});</p>
                <p>{'}'}</p>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs font-medium text-slate-500">
                <div className="rounded-2xl bg-slate-50 px-3 py-4">Intent</div>
                <div className="rounded-2xl bg-slate-50 px-3 py-4">Memory</div>
                <div className="rounded-2xl bg-slate-50 px-3 py-4">Decision</div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <SectionHeader eyebrow="Capabilities" title="A compact stack for building AI products end to end." description="The skill set combines agentic system thinking, frontend clarity, backend fundamentals, and deployment awareness so prototypes can become usable products." />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={fadeIn} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.45, ease: "easeInOut" }} className="rounded-[1.75rem] border border-white/70 bg-white/68 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.055)] backdrop-blur-xl hover:shadow-[0_28px_80px_rgba(139,92,246,0.12)]">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {group.skills.map((skill) => (
                      <div key={skill} className="rounded-2xl border border-slate-200/70 bg-white/65 px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <SectionHeader eyebrow="Projects" title="Systems that make AI outputs easier to trust and use." description="The work focuses on decision workflows, recruiter intelligence, business automation, and interface systems where clarity matters as much as capability." />
          <div className="mt-16 space-y-16">
            <div>
              <motion.div variants={fadeIn} className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Network className="h-4 w-4 text-violet-500" /> GenAI Projects
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2">
                {genAiProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
              </div>
            </div>
            <div>
              <motion.div variants={fadeIn} className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                <Workflow className="h-4 w-4 text-emerald-500" /> Other Projects
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2">
                {otherProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="grid gap-12 py-24 lg:grid-cols-[0.78fr_1fr]">
          <SectionHeader eyebrow="Experience" title="Practical product execution with AI-assisted workflows." description="Aniket’s experience is shaped around shipping useful interfaces, improving repetitive workflows, and making AI tools practical for day-to-day delivery." />
          <motion.div variants={fadeIn} className="space-y-5">
            {experience.map((item) => (
              <motion.div key={item.role} whileHover={{ x: 4 }} transition={{ duration: 0.4, ease: "easeInOut" }} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.045)] backdrop-blur-xl">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{item.org}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-400">{item.period}</p>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.impact}</p>
              </motion.div>
            ))}
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.045)] backdrop-blur-xl">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                <h3 className="mt-4 text-lg font-semibold tracking-[-0.03em] text-slate-950">B.Tech Computer Engineering</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">RK University, Rajkot. Expected May 2026. CGPA 8.40/10.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.045)] backdrop-blur-xl">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">Certifications</h3>
                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {certifications.map((cert) => <p key={cert}>{cert}</p>)}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={staggerContainer} className="py-24">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/75 p-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:p-12">
            <motion.div variants={fadeIn} className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">Contact</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-slate-950 md:text-5xl">Let’s discuss AI systems, product prototypes, and usable automation.</h2>
              </div>
              <div className="grid gap-3">
                <a href="mailto:aniketpandey4723k@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600">
                  <Mail className="h-5 w-5" /> aniketpandey4723k@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/aniket-pandey-1b3a59291" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600">
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
                <a href="https://github.com/Aniket28-4L" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 text-sm font-semibold text-slate-700 transition-colors hover:text-sky-600">
                  <Github className="h-5 w-5" /> GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200/60 bg-white/50 py-10 backdrop-blur-xl">
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
              className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-[0_18px_45px_rgba(14,165,233,0.34)] outline-none ring-1 ring-white/50 md:bottom-8 md:right-8"
              animate={{ scale: [1, 1.06, 1], boxShadow: ["0 18px 45px rgba(14,165,233,0.28)", "0 20px 58px rgba(34,197,94,0.36)", "0 18px 45px rgba(14,165,233,0.28)"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              <MessageCircle className="h-6 w-6" />
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
