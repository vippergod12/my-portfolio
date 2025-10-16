import React from 'react';
// 1. Import các icon cần thiết từ react-icons
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

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
    <section className="bg-zinc-900 text-white min-h-screen flex items-center ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left z-70">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-sky-400">Tien</span>
            </h1>
            <p className="text-xl text-gray-400 mt-4">
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
              <a
                href="#contact"
                className="border-2 border-white hover:bg-white hover:text-zinc-900 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* === KHU VỰC SOCIAL ICONS MỚI === */}
            <div className="mt-8 flex justify-center md:justify-start gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank" // Mở link trong tab mới
                  rel="noopener noreferrer" // Tăng tính bảo mật
                  aria-label={social.label}
                  className="text-gray-400 hover:text-sky-400 transition-transform duration-300 transform hover:scale-125"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 z-70">
              <img
                src="/assets/imgs/avatar.jpg"
                alt="Your Avatar"
                className="rounded-full object-cover w-full h-full border-4 border-sky-500 shadow-xl shadow-sky-500/30"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-sky-400 animate-ping opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;