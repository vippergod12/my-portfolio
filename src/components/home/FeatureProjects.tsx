import React, { useEffect, useRef } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PROJECTS_DATA, { type ProjectData } from '../../data/projects';

const LERP = 0.12;

const ProjectCard: React.FC<{ project: ProjectData; index: number }> = ({
  project,
  index,
}) => (
  <div className="deck-card rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_16px_50px_rgba(139,92,246,0.12),0_8px_30px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_16px_50px_rgba(139,92,246,0.2),0_8px_30px_rgba(0,0,0,0.5)]">
    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-200/30 dark:border-white/[0.04] shrink-0">
      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-2 font-code text-[10px] text-zinc-400 dark:text-zinc-600">
        {project.slug}.tsx
      </span>
      <span className="ml-auto font-code text-[11px] font-bold text-violet-500/70 dark:text-violet-400/70">
        /{String(index + 1).padStart(2, '0')}
      </span>
    </div>

    <div className="relative aspect-[16/9] md:aspect-auto md:flex-1 md:min-h-0 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute bottom-4 left-4 flex gap-1.5">
        {project.liveUrl && (
          <span className="flex items-center gap-1.5 text-[10px] font-code font-semibold uppercase text-emerald-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
            Live
          </span>
        )}
        {project.githubUrl && (
          <span className="flex items-center gap-1.5 text-[10px] font-code font-semibold uppercase text-white/60 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
            <FaGithub className="text-[10px]" />
            Source
          </span>
        )}
      </div>
    </div>

    <div className="p-5 shrink-0">
      <span className="font-code text-[11px] text-violet-500 dark:text-violet-400 font-medium tracking-wider uppercase">
        {project.subtitle}
      </span>
      <h3 className="mt-1.5 text-lg font-display font-bold text-zinc-900 dark:text-white leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100/80 dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-code font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-white/[0.06]"
          >
            {tag}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-md bg-zinc-100/80 dark:bg-white/[0.04] px-2 py-0.5 text-[10px] font-code font-medium text-zinc-400 border border-zinc-200/50 dark:border-white/[0.06]">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:gap-3 transition-all duration-300">
        View Case Study <FaArrowRight className="text-xs" />
      </div>
    </div>
  </div>
);

const DotGrid: React.FC = () => (
  <>
    <div
      className="absolute inset-0 -z-10 opacity-[0.25] dark:opacity-[0.12]"
      style={{
        backgroundImage:
          'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        color: '#8b5cf6',
      }}
    />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-500/[0.03] rounded-full blur-[120px] -z-10" />
  </>
);

const FeaturedProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const bar = progressRef.current;
    if (!container || !track) return;

    let currentX = 0;
    let targetX = 0;
    let animating = false;

    const getMax = () => Math.max(0, track.scrollWidth - container.clientWidth);

    const animate = () => {
      const diff = targetX - currentX;

      if (Math.abs(diff) < 0.5) {
        currentX = targetX;
        animating = false;
      } else {
        currentX += diff * LERP;
        requestAnimationFrame(animate);
      }

      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;

      if (bar) {
        const max = getMax();
        bar.style.width = max > 0 ? `${(currentX / max) * 100}%` : '0%';
      }
    };

    const startAnimate = () => {
      if (!animating) {
        animating = true;
        requestAnimationFrame(animate);
      }
    };

    const onWheel = (e: WheelEvent) => {
      const max = getMax();
      if (max <= 0) return;

      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

      if (targetX <= 1 && delta < 0) return;
      if (targetX >= max - 1 && delta > 0) return;

      e.preventDefault();
      targetX = Math.max(0, Math.min(max, targetX + delta));
      startAnimate();
    };

    container.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <>
      {/* Mobile: vertical card list */}
      <section className="md:hidden py-14 relative">
        <DotGrid />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-zinc-100/80 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/[0.06] px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
              <span className="font-code text-xs text-zinc-500 dark:text-zinc-400">
                ~/portfolio/projects
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-zinc-900 dark:text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {PROJECTS_DATA.map((project, i) => (
              <Link
                key={project.id}
                to={`/products/${project.slug}`}
                className="block group"
              >
                <ProjectCard project={project} index={i} />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-8 py-3.5 font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Desktop: horizontal scroll only when cursor is inside */}
      <section
        ref={containerRef}
        className="hidden md:block relative h-[70vh] overflow-hidden"
      >
        <DotGrid />

        <div className="h-full flex items-center">
          <div
            ref={trackRef}
            className="flex items-center gap-7 lg:gap-9 pl-10 lg:pl-20 will-change-transform"
            style={{ paddingRight: '28vw' }}
          >
            {/* Intro panel */}
            <div className="flex-shrink-0 w-[340px] lg:w-[400px] flex flex-col justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-zinc-100/80 dark:bg-white/[0.04] border border-zinc-200/60 dark:border-white/[0.06] px-4 py-1.5 mb-6 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
                <span className="font-code text-xs text-zinc-500 dark:text-zinc-400">
                  ~/portfolio/projects
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white leading-tight">
                Featured
                <br />
                <span className="gradient-text">Projects</span>
              </h2>
              <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-base lg:text-lg leading-relaxed">
                Scroll to explore my work — each project crafted with passion
                and precision.
              </p>
              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-6 py-3 font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400 w-fit"
              >
                View All Projects
              </Link>
            </div>

            {/* Project cards */}
            {PROJECTS_DATA.map((project, i) => (
              <Link
                key={project.id}
                to={`/products/${project.slug}`}
                className="flex-shrink-0 w-[440px] lg:w-[500px] block group"
                style={{ height: '55vh' }}
              >
                <ProjectCard project={project} index={i} />
              </Link>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-8 left-10 right-10 lg:left-20 lg:right-20 h-[3px] rounded-full bg-zinc-200/50 dark:bg-white/[0.06] overflow-hidden">
          <div
            ref={progressRef}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500"
            style={{ width: '0%' }}
          />
        </div>
      </section>
    </>
  );
};

export default FeaturedProjects;
