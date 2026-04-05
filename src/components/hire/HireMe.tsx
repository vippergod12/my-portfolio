import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaCode,
  FaPaintBrush,
  FaServer,
  FaCheckCircle,
  FaChevronDown,
  FaComments,
  FaDraftingCompass,
  FaLaptopCode,
  FaShippingFast,
} from 'react-icons/fa';

/* ──────────────── DATA ──────────────── */

type Service = {
  icon: React.ElementType;
  title: string;
  features: string[];
  accent: string;
};

const SERVICES: Service[] = [
  {
    icon: FaPaintBrush,
    title: 'Frontend Development',
    features: [
      'Responsive UI with React / Vue',
      'Tailwind CSS & modern design systems',
      'Smooth animations (Framer Motion)',
      'Cross-browser & mobile-first',
    ],
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    icon: FaServer,
    title: 'Backend Development',
    features: [
      'REST & GraphQL API design',
      'Spring Boot / Node.js / .NET',
      'PostgreSQL, MySQL, MongoDB',
      'Docker & CI/CD pipelines',
    ],
    accent: 'from-violet-500 to-purple-400',
  },
  {
    icon: FaCode,
    title: 'Fullstack Application',
    features: [
      'End-to-end feature delivery',
      'Clean architecture & best practices',
      'Third-party integrations',
      'Performance optimisation',
    ],
    accent: 'from-amber-500 to-orange-400',
  },
];

type Step = { icon: React.ElementType; title: string; desc: string };

const PROCESS: Step[] = [
  {
    icon: FaComments,
    title: 'Discovery',
    desc: 'We discuss your goals, scope and timeline to define a clear roadmap.',
  },
  {
    icon: FaDraftingCompass,
    title: 'Design & Plan',
    desc: 'Wireframes, tech-stack decisions and milestone breakdown.',
  },
  {
    icon: FaLaptopCode,
    title: 'Development',
    desc: 'Agile sprints with regular demos so you see progress every week.',
  },
  {
    icon: FaShippingFast,
    title: 'Deliver & Support',
    desc: 'Thorough testing, deployment and post-launch support.',
  },
];

type FaqItem = { q: string; a: string };

const FAQ: FaqItem[] = [
  {
    q: 'What is your typical turnaround time?',
    a: "Most projects take 2\u20136 weeks depending on complexity. I'll give you a clear estimate after the discovery call.",
  },
  {
    q: 'Do you work with international clients?',
    a: "Absolutely \u2014 I'm comfortable with remote collaboration across time zones using Slack, Notion and GitHub.",
  },
  {
    q: 'Can you join an existing team?',
    a: 'Yes. I can integrate into your team as a contract developer and follow your existing workflows and tools.',
  },
  {
    q: 'What if I only need a small task?',
    a: "No problem. I'm happy to help with bug fixes, code reviews, or single-feature additions.",
  },
];

/* ──────────────── COMPONENTS ──────────────── */

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, features, accent }) => (
  <div className="group relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-700/60 bg-white/60 dark:bg-zinc-800/50 p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-sky-500/10">
    <div
      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
    >
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{title}</h3>
    <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-300">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <FaCheckCircle className="mt-0.5 shrink-0 text-sky-500 dark:text-sky-400" />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep: React.FC<Step & { idx: number }> = ({ icon: Icon, title, desc, idx }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/10 dark:bg-sky-500/15 ring-2 ring-sky-500/30 text-sky-600 dark:text-sky-400 text-2xl">
      <Icon />
    </div>
    <span className="absolute -top-3 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-bold text-white shadow">
      {idx + 1}
    </span>
    <h4 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">{title}</h4>
    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-[220px]">{desc}</p>
  </div>
);

const FaqAccordion: React.FC<FaqItem> = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-700/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-zinc-900 dark:text-white transition-colors hover:text-sky-600 dark:hover:text-sky-400"
      >
        {q}
        <FaChevronDown
          className={`shrink-0 text-sm text-zinc-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{a}</p>
        </div>
      </div>
    </div>
  );
};

/* ──────────────── PAGE ──────────────── */

const HireMe: React.FC = () => {
  return (
    <div className="text-zinc-900 dark:text-white">
      {/* ── HERO ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-20 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[100px]" />
        </div>

        <div className="z-[71] relative max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-600 dark:text-sky-400 mb-6">
            <FaRocket className="text-xs" /> Open for opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            I'm a fullstack developer ready to turn your vision into a polished, high-performance
            product. From pixel-perfect UIs to robust APIs — I've got you covered.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-sky-500/25 transition hover:scale-105 hover:brightness-110"
            >
              Start a Conversation
            </Link>
            <a
              href="/assets/imgs/my-cv.pdf"
              download="my-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 dark:border-zinc-600 px-8 py-3.5 font-bold transition hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl z-[71] relative">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            What I Can <span className="text-sky-500 dark:text-sky-400">Do For You</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
            Whether you need a standalone feature or a full product, I deliver clean, maintainable
            code on time.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl z-[71] relative">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            How We'll <span className="text-sky-500 dark:text-sky-400">Work Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-zinc-600 dark:text-zinc-400">
            A simple, transparent process from the first chat to the final deploy.
          </p>
          <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute top-8 left-[12%] right-[12%] hidden lg:block">
              <div className="h-0.5 w-full bg-gradient-to-r from-sky-500/40 via-violet-500/40 to-sky-500/40" />
            </div>
            {PROCESS.map((step, i) => (
              <ProcessStep key={step.title} idx={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl z-[71] relative">
          <h2 className="text-center text-3xl sm:text-4xl font-bold">
            Frequently <span className="text-sky-500 dark:text-sky-400">Asked</span>
          </h2>
          <div className="mt-12">
            {FAQ.map((item) => (
              <FaqAccordion key={item.q} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BOTTOM ── */}
      <section className="px-4 py-16 sm:py-24">
        <div className="relative z-[71] mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 to-violet-600 px-8 py-16 text-center text-white shadow-2xl shadow-sky-500/20">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <h2 className="relative text-3xl sm:text-4xl font-extrabold">Ready to get started?</h2>
          <p className="relative mx-auto mt-4 max-w-lg text-lg text-white/80">
            Drop me a message and let's discuss how I can help bring your next project to life.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-sky-600 shadow-lg transition hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HireMe;
