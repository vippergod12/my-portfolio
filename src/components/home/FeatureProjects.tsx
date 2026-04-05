import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PROJECTS_DATA, { type ProjectData } from '../../data/projects';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CARD_HEIGHT = 'h-[420px] sm:h-[440px] lg:h-[360px]';

const ProjectCard: React.FC<{ project: ProjectData; flipped?: boolean }> = ({
  project,
  flipped = false,
}) => {
  const imageBlock = (
    <div className="relative overflow-hidden lg:w-1/2 h-[200px] sm:h-[220px] lg:h-full shrink-0">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
    </div>
  );

  const textBlock = (
    <div className="flex flex-1 flex-col justify-center px-6 py-5 sm:px-8 sm:py-6 lg:w-1/2 lg:py-8 overflow-hidden">
      <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
        {project.subtitle}
      </span>
      <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
        {project.title}
      </h3>

      <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/40 dark:text-sky-300"
          >
            {tag}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="rounded-full bg-zinc-100 dark:bg-zinc-700 px-3 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 transition-all group-hover:gap-3">
        View Case Study <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );

  return (
    <Link to={`/products/${project.slug}`} className="block">
      <div
        className={`group mx-auto ${CARD_HEIGHT} w-full overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-700/50 bg-white/60 dark:bg-zinc-800/50 backdrop-blur-sm shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-sky-500/10`}
      >
        <div
          className={`flex h-full flex-col lg:flex-row ${flipped ? 'lg:flex-row-reverse' : ''}`}
        >
          {imageBlock}
          {textBlock}
        </div>
      </div>
    </Link>
  );
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 z-[71] relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
            Featured{' '}
            <span className="text-sky-500 dark:text-sky-400">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-600 dark:text-zinc-400">
            A selection of projects I have built — from full-stack apps to interactive web
            experiences.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          grabCursor
          slidesPerView={1}
          spaceBetween={32}
          rewind
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="mySwiper !pb-14"
        >
          {PROJECTS_DATA.map((project, i) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} flipped={i % 2 !== 0} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-300 dark:border-zinc-600 px-8 py-3 font-bold text-zinc-700 dark:text-zinc-200 transition hover:border-sky-500 hover:text-sky-600 dark:hover:border-sky-400 dark:hover:text-sky-400"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;