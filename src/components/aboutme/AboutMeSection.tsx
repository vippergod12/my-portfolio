import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaVuejs, FaJava, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiPostgresql, SiNextdotjs, SiDocker, SiJavascript, SiDotnet } from 'react-icons/si';
import './AboutMeSection.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useMediaQuery } from '../hooks/useMediaQuery';

type ContentItem = {
  time: string;
  title: string;
  subtitle: string;
};

type TabData = {
  id: 'experience' | 'education' | 'skills' | 'aboutme';
  label: string;
  mainTitle: string;
  description: string;
  items: ContentItem[];
};

const TABS_DATA: TabData[] = [
  {
    id: 'experience',
    label: 'Experience',
    mainTitle: 'My Work Experience',
    description: 'A summary of the places I have worked.',
    items: [
      { time: '2025 - Present', title: 'Backend Developer', subtitle: 'TCVN - Trade Coin VN' },
      { time: '06/2025 - 10/2025', title: 'Intern Backend Developer', subtitle: 'Eggs Technologies' },
      { time: '01/2026 - Present', title: 'Fullstack Developer', subtitle: 'DTC Labs' },
    ],
  },
  {
    id: 'education',
    label: 'Education',
    mainTitle: 'My Education',
    description: 'My academic background and qualifications.',
    items: [
      { time: '2022 - 2025', title: 'Bachelor of Science in Computer Science', subtitle: 'FPT College' },
      { time: '2022', title: 'Front-End Foundation', subtitle: 'Cyberlearn' },
      { time: '2021', title: 'Front-End Foundation', subtitle: 'Fullstack.edu.vn' },
      { time: '2023', title: 'Full-stack Java', subtitle: 'Cyberlearn' },
    ],
  },
  {
    id: 'skills',
    label: 'Skills',
    mainTitle: 'My Technical Skills',
    description: 'A list of technologies I am proficient with.',
    items: [],
  },
  {
    id: 'aboutme',
    label: 'About Me',
    mainTitle: 'A Little Bit About Myself',
    description: 'I am a passionate full-stack developer with a love for creating intuitive and efficient web applications. I enjoy solving complex problems and continuously learning new technologies.',
    items: [],
  },
];

type Skill = { name: string; icon: React.ElementType };

const SKILLS_DATA: Skill[] = [
  { name: 'ReactJS', icon: FaReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'VueJS', icon: FaVuejs },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Docker', icon: SiDocker },
  { name: 'Javascript', icon: SiJavascript },
  { name: '.NET', icon: SiDotnet },
  { name: 'GitHub', icon: FaGithub },
];

const SkillIcon: React.FC<Skill> = ({ name, icon: IconComponent }) => (
  <div className="group relative flex flex-col items-center">
    <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-violet-500/10">
      <IconComponent className="text-3xl sm:text-4xl text-violet-600 dark:text-violet-400" />
    </div>
    <span className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
      {name}
    </span>
  </div>
);

const AboutMeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabData['id']>('experience');
  const activeContent = TABS_DATA.find((tab) => tab.id === activeTab);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const ContentCards = ({ items }: { items: ContentItem[] }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5">
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">{item.time}</p>
          <p className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{item.title}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );

  const SkillIconsGrid = () => (
    <div className="flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start pt-2">
      {SKILLS_DATA.map((skill, i) => (
        <SkillIcon key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
      ))}
    </div>
  );

  const MobileCarousel = () => {
    if (activeContent?.id === 'skills') {
      return (
        <Swiper modules={[FreeMode]} slidesPerView="auto" spaceBetween={16} freeMode className="w-full pt-2">
          {SKILLS_DATA.map((skill, i) => (
            <SwiperSlide key={`${skill.name}-${i}`} className="!w-auto">
              <SkillIcon name={skill.name} icon={skill.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    if (activeContent?.id === 'education' && activeContent.items.length > 0) {
      return (
        <Swiper modules={[FreeMode]} slidesPerView="auto" spaceBetween={12} freeMode className="w-full">
          {activeContent.items.map((item, index) => (
            <SwiperSlide key={index} style={{ width: '260px' }}>
              <div className="glass-card p-5 rounded-2xl h-full min-h-[140px]">
                <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-2">{item.time}</p>
                <p className="text-base font-bold text-zinc-900 dark:text-white mb-1">{item.title}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }
    return null;
  };

  return (
    <section className="text-zinc-900 dark:text-white w-full relative min-h-[calc(100dvh-4.5rem)] py-12 md:py-16 lg:py-20 flex flex-col">
      <div className="container mx-auto max-w-6xl px-4 flex-1 flex flex-col">
        <div className="grid flex-1 grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-start">
          <div className="md:col-span-4 z-[71] relative">
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {TABS_DATA.map((tab) => (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    whitespace-nowrap md:w-full p-3 sm:p-4 rounded-xl text-left font-semibold text-sm sm:text-base transition-all duration-300
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                      : 'glass-card text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-8 z-[71] relative">
            {activeContent && (
              <div className="flex flex-col space-y-6">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold gradient-text break-words">
                  {activeContent.mainTitle}
                </h1>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {activeContent.description}
                </p>
                <div className="min-h-[150px]">
                  {isMobile && (activeContent.id === 'education' || activeContent.id === 'skills') ? (
                    <MobileCarousel />
                  ) : (
                    <>
                      {activeContent.id === 'skills' && <SkillIconsGrid />}
                      {activeContent.items.length > 0 && <ContentCards items={activeContent.items} />}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
