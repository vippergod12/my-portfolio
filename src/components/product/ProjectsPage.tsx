import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PROJECTS_DATA from '../../data/projects';

const ProjectsPage: React.FC = () => (
  <section className="text-zinc-900 dark:text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div className="mx-auto max-w-6xl z-[71] relative">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          All Work
        </span>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500 dark:text-zinc-400">
          A collection of products and applications I have designed, developed and shipped.
        </p>
      </div>

      <div className="flex flex-col gap-16 sm:gap-20">
        {PROJECTS_DATA.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <Link key={project.id} to={`/products/${project.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={!isEven ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-black/5 dark:shadow-black/20">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white font-display font-bold text-sm border border-white/20">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />
                  </div>
                </div>

                <div className={!isEven ? 'lg:order-1' : ''}>
                  <span className="text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                    {project.subtitle}
                  </span>
                  <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-violet-50 dark:bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-500 border border-zinc-200 dark:border-zinc-700">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400 transition-all group-hover:gap-3">
                    View Case Study <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsPage;
