import React from 'react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const socials = [
  { href: 'https://www.facebook.com/dangnhattien.1101', icon: <FaFacebook size={18} />, label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/dangtien1101/', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
  { href: 'https://github.com/vippergod12', icon: <FaGithub size={18} />, label: 'Github' },
  { href: 'https://zalo.me/0839056653', icon: <SiZalo size={18} />, label: 'Zalo' },
  { href: 'mailto:dangnhattien1101@gmail.com', icon: <MdEmail size={18} />, label: 'Email' },
];

const techStack = [
  'React', 'Vue.js', 'TypeScript', 'Spring Boot', 'Node.js',
  'PostgreSQL', 'Docker', 'Tailwind CSS', '.NET', 'Next.js',
];

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-pink-500/[0.06] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/[0.05] rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left z-[70] order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for work
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text">Tien</span>
            </h1>
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-400 dark:text-zinc-500 mt-3">
              Fullstack Developer
            </p>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mt-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A passionate developer dedicated to building beautiful, functional, and user-centric web applications.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="/assets/imgs/my-cv.pdf"
                download="my-cv.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-violet-500/40 hover:scale-[1.03]"
              >
                Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 dark:border-zinc-700 px-8 py-3.5 font-bold text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:border-violet-500 hover:text-violet-600 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-violet-500 dark:hover:text-violet-400 hover:bg-violet-500/10 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center order-1 lg:order-2 z-[70]">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-pink-500/20 blur-2xl" />
              <div className="relative w-52 sm:w-64 lg:w-80 aspect-[3/4] rounded-3xl overflow-hidden ring-2 ring-violet-500/20 shadow-2xl shadow-violet-500/15">
                <img
                  src="/assets/imgs/avatar.jpg"
                  alt="Tien - Fullstack Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-5 border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-zinc-950/50 backdrop-blur-sm">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="mx-6 text-sm font-medium text-zinc-400 dark:text-zinc-600 flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-violet-500/50" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
