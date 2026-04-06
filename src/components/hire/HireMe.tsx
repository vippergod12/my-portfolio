import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaCode, FaPaintBrush, FaServer, FaCheckCircle, FaChevronDown,
  FaComments, FaDraftingCompass, FaLaptopCode, FaShippingFast,
} from 'react-icons/fa';

type Service = { icon: React.ElementType; title: string; features: string[]; accent: string };

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
    accent: 'from-violet-500 to-purple-400',
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
    accent: 'from-pink-500 to-rose-400',
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
    accent: 'from-blue-500 to-cyan-400',
  },
];

type Step = { icon: React.ElementType; title: string; desc: string };

const PROCESS: Step[] = [
  { icon: FaComments, title: 'Discovery', desc: 'We discuss your goals, scope and timeline to define a clear roadmap.' },
  { icon: FaDraftingCompass, title: 'Design & Plan', desc: 'Wireframes, tech-stack decisions and milestone breakdown.' },
  { icon: FaLaptopCode, title: 'Development', desc: 'Agile sprints with regular demos so you see progress every week.' },
  { icon: FaShippingFast, title: 'Deliver & Support', desc: 'Thorough testing, deployment and post-launch support.' },
];

type FaqItem = { q: string; a: string };

const FAQ: FaqItem[] = [
  { q: 'What is your typical turnaround time?', a: "Most projects take 2\u20136 weeks depending on complexity. I'll give you a clear estimate after the discovery call." },
  { q: 'Do you work with international clients?', a: "Absolutely \u2014 I'm comfortable with remote collaboration across time zones using Slack, Notion and GitHub." },
  { q: 'Can you join an existing team?', a: 'Yes. I can integrate into your team as a contract developer and follow your existing workflows and tools.' },
  { q: 'What if I only need a small task?', a: "No problem. I'm happy to help with bug fixes, code reviews, or single-feature additions." },
];

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, features, accent }) => (
  <div className="group glass-card flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}>
      <Icon className="text-2xl" />
    </div>
    <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white">{title}</h3>
    <ul className="mt-4 flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-300">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2">
          <FaCheckCircle className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
          {f}
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep: React.FC<Step & { idx: number }> = ({ icon: Icon, title, desc, idx }) => (
  <div className="relative flex flex-col items-center text-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 text-2xl ring-2 ring-violet-500/20">
      <Icon />
    </div>
    <span className="absolute -top-2 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-xs font-bold text-white shadow-lg">
      {idx + 1}
    </span>
    <h4 className="mt-4 text-lg font-display font-semibold text-zinc-900 dark:text-white">{title}</h4>
    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-[220px]">{desc}</p>
  </div>
);

const FaqAccordion: React.FC<FaqItem & { index: number }> = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 py-5 text-left text-base font-medium text-zinc-900 dark:text-white transition-colors hover:text-violet-600 dark:hover:text-violet-400"
      >
        <span className="text-sm font-display font-bold text-violet-600 dark:text-violet-400 w-8 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1">{q}</span>
        <FaChevronDown className={`shrink-0 text-sm text-zinc-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 pl-12 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{a}</p>
        </div>
      </div>
    </div>
  );
};

const HireMe: React.FC = () => (
  <div className="text-zinc-900 dark:text-white">
    {/* Hero */}
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-pink-500/[0.06] blur-[100px]" />
      </div>

      <div className="z-[71] relative max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 mb-6">
          <FaRocket className="text-xs" /> Open for opportunities
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Let's Build Something{' '}
          <span className="gradient-text">Amazing Together</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          I'm a fullstack developer ready to turn your vision into a polished, high-performance
          product. From pixel-perfect UIs to robust APIs — I've got you covered.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-105 hover:shadow-violet-500/40"
          >
            Start a Conversation
          </Link>
          <a
            href="/assets/imgs/my-cv.pdf"
            download="my-cv.pdf"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-8 py-3.5 font-bold transition-all hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl z-[71] relative">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">Services</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">
            What I Can <span className="gradient-text">Do For You</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500 dark:text-zinc-400">
            Whether you need a standalone feature or a full product, I deliver clean, maintainable code on time.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl z-[71] relative">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">Process</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">
            How We'll <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-500 dark:text-zinc-400">
            A simple, transparent process from the first chat to the final deploy.
          </p>
        </div>
        <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-8 left-[12%] right-[12%] hidden lg:block">
            <div className="h-px w-full bg-gradient-to-r from-violet-500/30 via-purple-500/30 to-pink-500/30" />
          </div>
          {PROCESS.map((step, i) => <ProcessStep key={step.title} idx={i} {...step} />)}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl z-[71] relative">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">FAQ</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">
            Frequently <span className="gradient-text">Asked</span>
          </h2>
        </div>
        <div>
          {FAQ.map((item, i) => <FaqAccordion key={item.q} index={i} {...item} />)}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-4 py-16 sm:py-24">
      <div className="relative z-[71] mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 px-8 py-16 text-center text-white shadow-2xl shadow-violet-500/20">
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <h2 className="relative font-display text-3xl sm:text-4xl font-extrabold">Ready to get started?</h2>
        <p className="relative mx-auto mt-4 max-w-lg text-lg text-white/80">
          Drop me a message and let's discuss how I can help bring your next project to life.
        </p>
        <Link
          to="/contact"
          className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 font-bold text-violet-600 shadow-lg transition hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  </div>
);

export default HireMe;
