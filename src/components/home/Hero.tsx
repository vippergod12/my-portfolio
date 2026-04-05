import React from 'react';
// 1. Import các icon cần thiết từ react-icons
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  // 2. Tạo một mảng chứa thông tin các mạng xã hội cho dễ quản lý
  const socials = [
    {
      href: 'https://www.facebook.com/dangnhattien.1101', // Thay bằng link Facebook của bạn
      icon: <FaFacebook size={28} />,
      label: 'Facebook',
    },
    {
      href: 'https://www.linkedin.com/in/dangtien1101/', // Thay bằng link LinkedIn của bạn
      icon: <FaLinkedin size={28} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/vippergod12', // Thay bằng link Github của bạn
      icon: <FaGithub size={28} />,
      label: 'Github',
    },
    {
      href: 'https://zalo.me/0839056653', // Thay bằng link Zalo của bạn
      icon: <SiZalo size={28} />,
      label: 'Zalo',
    },
    {
      href: 'mailto:dangnhattien1101@gmail.com', // Thay bằng email của bạn
      icon: <MdEmail size={28} />,
      label: 'Email',
    },
  ];

  return (
    <section className="text-zinc-900 dark:text-white min-h-[100dvh] flex items-center">
      <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-[70]">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-sky-500 dark:text-sky-400">Tien</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-gray-400 mt-4">
              A passionate Fullstack Developer dedicated to building beautiful,
              functional, and user-centric web applications.
            </p>

            {/* === KHU VỰC BUTTONS MỚI === */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="/assets/imgs/my-cv.pdf" // 3. Trỏ tới file CV trong thư mục public
                download="my-cv.pdf" // Thuộc tính download để tải file về
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
              <Link
                to="/contact"
                className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>

            {/* === KHU VỰC SOCIAL ICONS MỚI === */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith('mailto:')
                    ? {}
                    : { target: '_blank', rel: 'noopener noreferrer' })}
                  aria-label={social.label}
                  className="text-zinc-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400 transition-transform duration-300 transform hover:scale-125 min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-48 sm:w-56 md:w-72 aspect-[3/4] z-[70]">
              <div className="absolute -inset-3 rounded-2xl bg-sky-500/20 blur-xl" />
              <img
                src="/assets/imgs/avatar.jpg"
                alt="Your Avatar"
                className="relative rounded-2xl object-cover object-top w-full h-full border-4 border-sky-500 shadow-xl shadow-sky-500/25 dark:shadow-sky-500/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;