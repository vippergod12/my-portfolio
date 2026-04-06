import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PROJECTS_DATA, { type ProjectData } from '../../data/projects';

const CARD_W = 320;

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({ project, index }) => (
  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col select-none">
    <div className="relative aspect-[16/10] overflow-hidden shrink-0">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <span className="absolute top-4 left-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/15 backdrop-blur-md text-white font-display font-bold text-sm border border-white/20">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
        {project.subtitle}
      </span>
      <h3 className="mt-1.5 text-lg font-display font-bold text-zinc-900 dark:text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-violet-50 dark:bg-violet-500/10 px-2.5 py-0.5 text-[11px] font-medium text-violet-700 dark:text-violet-300"
          >
            {tag}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-500">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
        View Case Study <FaArrowRight className="text-xs" />
      </div>
    </div>
  </div>
);

const FeaturedProjects: React.FC = () => {
  const [deckHover, setDeckHover] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const total = PROJECTS_DATA.length;
  const mid = (total - 1) / 2;

  const cardStyle = (i: number): React.CSSProperties => {
    const d = i - mid;
    const stagger = Math.abs(d) * 70;

    if (!deckHover) {
      return {
        transform: `translate3d(${d * 8}px, 0, 0) rotate(${d * 4}deg)`,
        zIndex: total - i,
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        transitionDelay: `${(total - 1 - Math.abs(d)) * 50}ms`,
      };
    }

    const active = activeCard === i;
    const rot = d * 10;
    const tx = d * 300;
    const ty = Math.abs(d) * 22 + (active ? -30 : 0);
    const s = active ? 1.06 : 1;

    return {
      transform: `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg) scale(${s})`,
      zIndex: active ? 50 : 10 + i,
      opacity: activeCard !== null && !active ? 0.75 : 1,
      boxShadow: active
        ? '0 30px 60px rgba(139,92,246,0.18), 0 8px 24px rgba(0,0,0,0.12)'
        : '0 12px 40px rgba(0,0,0,0.10)',
      transitionDelay: `${stagger}ms`,
    };
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 z-[71] relative">
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
            Hover over the deck to fan out my projects
          </p>
        </div>

        {/* Mobile: vertical list */}
        <div className="flex flex-col gap-6 md:hidden">
          {PROJECTS_DATA.map((project, i) => (
            <Link key={project.id} to={`/products/${project.slug}`} className="block">
              <ProjectCard project={project} index={i} />
            </Link>
          ))}
        </div>

        {/* Desktop: card deck */}
        <div
          className="hidden md:flex justify-center items-center relative"
          style={{ height: 480, perspective: 1200 }}
          onMouseEnter={() => setDeckHover(true)}
          onMouseLeave={() => {
            setDeckHover(false);
            setActiveCard(null);
          }}
        >
          {PROJECTS_DATA.map((project, i) => (
            <Link
              key={project.id}
              to={`/products/${project.slug}`}
              className="absolute block"
              style={{
                width: CARD_W,
                transformOrigin: 'bottom center',
                willChange: 'transform, opacity, box-shadow',
                transition: [
                  'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
                  'opacity 0.5s ease',
                  'box-shadow 0.5s ease',
                ].join(', '),
                ...cardStyle(i),
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <ProjectCard project={project} index={i} />
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-8 py-3.5 font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
