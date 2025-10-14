import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-zinc-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        {/* Dùng Grid, 1 cột trên mobile, 2 cột trên desktop (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Cột bên trái: Lời giới thiệu */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-sky-400">DevHoa</span>
            </h1>
            <p className="text-xl text-gray-400 mt-4">
              A passionate Fullstack Developer dedicated to building beautiful,
              functional, and user-centric web applications.
            </p>
            <a 
              href="#contact" 
              className="mt-8 inline-block bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>

          {/* Cột bên phải: Avatar */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <img 
                src="https://via.placeholder.com/400" // Thay bằng link avatar của bạn
                alt="Your Avatar" 
                className="rounded-full object-cover w-full h-full border-4 border-sky-500 shadow-xl shadow-sky-500/30"
              />
              {/* Vòng tròn hiệu ứng */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-sky-400 animate-ping opacity-30"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;