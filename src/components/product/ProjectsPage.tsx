import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PROJECTS_DATA from '../../data/projects';

const ProjectsPage: React.FC = () => {
  return (
    <section className="text-zinc-900 dark:text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl z-[71] relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            My{' '}
            <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            A collection of products and applications I have designed, developed and shipped.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-16 sm:gap-20">
          {PROJECTS_DATA.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <Link
                key={project.id}
                to={`/products/${project.slug}`}
                className="group block"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg shadow-black/10 dark:shadow-black/30">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <span className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {project.subtitle}
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 transition-all group-hover:gap-3">
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
};

export default ProjectsPage;
