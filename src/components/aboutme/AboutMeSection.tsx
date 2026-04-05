import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaVuejs, FaJava, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiPostgresql, SiNextdotjs, SiDocker, SiJavascript, SiDotnet } from 'react-icons/si';
import './AboutMeSection.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useMediaQuery } from '../hooks/useMediaQuery'; // Điều chỉnh đường dẫn nếu cần

// --- ĐỊNH NGHĨA KIỂU DỮ LIỆU (TYPESCRIPT) ---
// Định nghĩa kiểu cho mỗi mục trong card (ví dụ: một công việc, một khóa học)
type ContentItem = {
    time: string;
    title: string;
    subtitle: string;
};

// Định nghĩa kiểu cho mỗi tab (Experience, Education...)
type TabData = {
    id: 'experience' | 'education' | 'skills' | 'aboutme';
    label: string; // Tên hiển thị trên button
    mainTitle: string; // Thẻ h1 bên phải
    description: string; // Thẻ h3 bên phải
    items: ContentItem[]; // Mảng các card, có thể rỗng
};


// --- DỮ LIỆU CHO CÁC TAB (BẠN CÓ THỂ THAY ĐỔI DỄ DÀNG Ở ĐÂY) ---
const TABS_DATA: TabData[] = [
    {
        id: 'experience',
        label: 'Experience',
        mainTitle: 'My Work Experience',
        description: 'A summary of the places I have worked.',
        items: [
            {
                time: '2025 - Present',
                title: 'Backend Developer',
                subtitle: 'TCVN - Trade Coin VN',
            },
            {
                time: '06/2025 - 10/2025',
                title: 'Intern Backend Developer',
                subtitle: 'Eggs Technologies',
            },
            {
                time: '01/2026 - Present',
                title: 'Fullstack Developer',
                subtitle: 'DTC Labs',
            }
            
        ],
    },
    {
        id: 'education',
        label: 'Education',
        mainTitle: 'My Education',
        description: 'My academic background and qualifications.',
        items: [
            {
                time: '2022 - 2025',
                title: 'Bachelor of Science in Computer Science',
                subtitle: 'FPT College',
            },
            {
                time: '2022',
                title: 'Front-End Foundation',
                subtitle: 'Cyberlearn',
            },
            {
                time: '2021',
                title: 'Front-End Foundation',
                subtitle: 'Fullstack.edu.vn',
            },
            {
                time: '2023',
                title: 'Full-stack Java',
                subtitle: 'Cyberlearn',
            }
        ],
    },
    {
        id: 'skills',
        label: 'Skills',
        mainTitle: 'My Technical Skills',
        description: 'A list of technologies I am proficient with. Hover over an icon to see its name.',
        items: [], // Để mảng này rỗng, vì ta sẽ dùng dữ liệu skills riêng
    },
    {
        id: 'aboutme',
        label: 'About Me',
        mainTitle: 'A Little Bit About Myself',
        description: 'I am a passionate full-stack developer with a love for creating intuitive and efficient web applications. I enjoy solving complex problems and continuously learning new technologies.',
        items: [], // Mục này không có card nên để mảng rỗng
    },
];

type Skill = {
    name: string;
    icon: React.ElementType; // Kiểu dữ liệu cho một component React
};

const SKILLS_DATA: Skill[] = [
    { name: 'ReactJS', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'VueJS', icon: FaVuejs },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Java', icon: FaJava },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Docker', icon: SiDocker},
    { name: 'Javascript', icon: SiJavascript},
    { name: '.NET', icon: SiDotnet },
    { name: 'GitHub', icon: FaGithub },
];

const SkillIcon: React.FC<Skill> = ({ name, icon: IconComponent }) => {
    return (
        // 'group' cho phép phần tử con phản ứng với hover của phần tử cha
        <div className="relative group flex flex-col items-center">
            <div className="w-20 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center
                      transition-transform duration-300 group-hover:scale-110 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700">
                <IconComponent className="text-4xl text-sky-600 dark:text-sky-400" />
            </div>
            <div className="absolute top-full mt-2 px-3 py-1.5 bg-zinc-800 text-white text-sm rounded-md shadow-lg dark:bg-gray-900
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-300 scale-95 group-hover:scale-100">
                {name}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0
                        border-8 border-transparent border-b-zinc-800 dark:border-b-gray-900" />
            </div>
        </div>
    );
};

// --- COMPONENT CHÍNH ---
const AboutMeSection: React.FC = () => {
    // State để theo dõi xem tab nào đang được active, mặc định là 'experience'
    const [activeTab, setActiveTab] = useState<TabData['id']>('experience');

    // Tìm dữ liệu tương ứng với tab đang active
    const activeContent = TABS_DATA.find((tab) => tab.id === activeTab);
    const isMobile = useMediaQuery('(max-width: 767px)');

    const ContentCards = ({ items }: { items: ContentItem[] }) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, index) => (
                <div key={index} className="bg-zinc-200 dark:bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col border border-zinc-300/60 dark:border-transparent">
                    <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">{item.time}</p>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white mb-1">{item.title}</p>
                    <p className="text-md text-zinc-600 dark:text-zinc-400">{item.subtitle}</p>
                </div>
            ))}
        </div>
    );



        // Component để render nội dung cho Skills
    const SkillIconsGrid = () => (
        <div className="flex flex-wrap gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 justify-center md:justify-start pt-4">
            {SKILLS_DATA.map((skill, index) => (
                <SkillIcon key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
            ))}
        </div>
    );

    // Component để render carousel trên mobile
    const MobileCarousel = () => {
        if (activeContent?.id === 'skills') {
            return (
                <Swiper
                    modules={[FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={32}
                    freeMode={true}
                    className="w-full pt-4"
                >
                    {SKILLS_DATA.map((skill, index) => (
                        <SwiperSlide key={`${skill.name}-${index}`} className="!w-auto">
                            <SkillIcon name={skill.name} icon={skill.icon} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        }
        if (activeContent?.id === 'education' && activeContent.items.length > 0) {
            return (
                <Swiper
                    modules={[FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={16}
                    freeMode={true}
                    className="w-full"
                >
                    {activeContent.items.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: '280px' }}>
                            <div className="bg-zinc-200 dark:bg-zinc-800 p-6 rounded-lg shadow-lg flex flex-col h-full height-mobile border border-zinc-300/60 dark:border-transparent">
                                <p className="text-sm text-sky-600 dark:text-sky-400 mb-2">{item.time}</p>
                                <p className="text-lg font-bold text-zinc-900 dark:text-white mb-1 flex-grow">{item.title}</p>
                                <p className="text-md text-zinc-600 dark:text-zinc-400">{item.subtitle}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            );
        }
        return null;
    };

    return (
        <section className="text-zinc-900 dark:text-white w-full max-w-full relative min-h-[calc(100dvh-4.5rem)] py-12 md:py-16 lg:py-20 flex flex-col">
            <div className="container mx-auto max-w-6xl px-4 flex-1 flex flex-col">
                {/* Layout chính: Grid 12 cột */}
                <div className="grid flex-1 grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:items-start">

                    {/* CỘT BÊN TRÁI (4/12) */}
                    <div className="md:col-span-4 z-[71] relative">
                        <div className="flex flex-col space-y-4">
                            {TABS_DATA.map((tab) => (
                                <button
                                    type="button"
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    // Class được áp dụng động:
                                    // - `bg-blue-600 text-white` nếu là tab active
                                    // - `bg-zinc-800 text-zinc-400` nếu không phải
                                    className={`
                    w-full p-3 sm:p-4 rounded-lg text-left font-semibold text-base sm:text-lg transition-colors duration-300
                    hover:bg-sky-600 hover:text-white
                    ${activeTab === tab.id ? 'bg-sky-600 text-white' : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400'}
                  `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CỘT BÊN PHẢI (8/12) */}
                    <div className="md:col-span-8 z-[71] relative">
                        {activeContent && (
                            <div className="flex flex-col space-y-8">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-600 dark:text-sky-400 break-words">{activeContent.mainTitle}</h1>
                                <h3 className="text-base sm:text-lg lg:text-xl text-zinc-700 dark:text-zinc-300">{activeContent.description}</h3>
                                
                                {/* 3. LOGIC RENDER ĐỘNG MỚI */}
                                <div className='min-h-[150px]'>
                                    {isMobile && (activeContent.id === 'education' || activeContent.id === 'skills') ? (
                                        <MobileCarousel />
                                    ) : (
                                        <>
                                            {activeContent.id === 'skills' ? <SkillIconsGrid /> : null}
                                            {activeContent.items.length > 0 ? <ContentCards items={activeContent.items} /> : null}
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