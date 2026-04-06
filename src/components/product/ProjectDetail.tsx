import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import PROJECTS_DATA from '../../data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/products" replace />;

  const currentIdx = PROJECTS_DATA.findIndex((p) => p.slug === slug);
  const otherProjects = PROJECTS_DATA.filter((_, i) => i !== currentIdx);

  return (
    <div className="text-zinc-900 dark:text-white">
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden px-4 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[120px]" />
          <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-pink-500/[0.05] blur-[100px]" />
        </div>

        <div className="mx-auto max-w-6xl w-full z-[71] relative">
          <Link
            to="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 transition hover:text-violet-600 dark:hover:text-violet-400"
          >
            <FaArrowLeft className="text-xs" /> Back to Projects
          </Link>

          <span className="block text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">
            {project.subtitle}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {project.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <div>
              <span className="font-semibold text-zinc-900 dark:text-white">Role:</span> {project.role}
            </div>
            <div className="hidden sm:block h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
            <div>
              <span className="font-semibold text-zinc-900 dark:text-white">Duration:</span> {project.duration}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-bold text-white dark:text-zinc-900 transition hover:scale-105"
              >
                <FaGithub /> Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-bold transition hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 pb-16 sm:pb-24">
        <div className="mx-auto max-w-6xl z-[71] relative">
          <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/5">
            <img src={project.imageUrl} alt={project.title} className="w-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl z-[71] relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
            About the <span className="gradient-text">Project</span>
          </h2>
          <div className="space-y-5">
            {project.longDescription.map((para, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl z-[71] relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((item, i) => (
              <div key={i} className="glass-card flex items-start gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <FaCheckCircle className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400" />
                <span className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl z-[71] relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full glass-card px-5 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-all hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-md hover:shadow-violet-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.screenshots.length > 1 && (
        <section className="px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-6xl z-[71] relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">
              More <span className="gradient-text">Screenshots</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.screenshots.slice(1).map((src, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/5">
                  <img src={src} alt={`${project.title} screenshot ${i + 2}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Projects */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl z-[71] relative">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10 text-center">
            Other <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/products/${p.slug}`}
                className="group block overflow-hidden rounded-2xl glass-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                    {p.subtitle}
                  </span>
                  <h3 className="mt-1 text-xl font-display font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 dark:bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
