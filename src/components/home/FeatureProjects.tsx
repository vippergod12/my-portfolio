import React from 'react';
// Import các component cần thiết từ Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Import CSS của Swiper
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.css';
import '../../../node_modules/swiper/modules/pagination.css';
import '../../../node_modules/swiper/modules/effect-coverflow.css';

// Định nghĩa kiểu dữ liệu cho một dự án
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

// Dữ liệu dự án giả
const projects: Project[] = [
  { id: 1, title: 'AILMS', description: 'A web application designed to manage and track inventory inflow and outflow. The system simplifies stock-taking, updates inventory levels in real-time, and ensures data accuracy.', imageUrl: '/assets/imgs/ailms.png', tags: ['VueJS', 'Springboot', 'PostgreSQL'] },
  { id: 2, title: 'Portfolio Website', description: 'A personal portfolio to showcase my skills and projects.', imageUrl: '/assets/imgs/my-portfolio.png', tags: ['Node.js', 'Tailwind', 'ReactJS', 'Vercel'] },
  { id: 3, title: 'Task Management App', description: 'A tool to help teams manage their daily tasks efficiently.', imageUrl: 'https://via.placeholder.com/600x400', tags: ['Vue', 'Firebase'] },
  { id: 4, title: 'Blog Engine', description: 'A full-featured blog with markdown support and SEO.', imageUrl: 'https://via.placeholder.com/600x400', tags: ['Gatsby', 'GraphQL'] },
];

const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4 ">
        <h2 className="text-4xl font-bold text-center text-white mb-12  z-70">Dự án nổi bật</h2>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          breakpoints={{
            // Khi chiều rộng màn hình >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Khi chiều rộng màn hình >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // Khi chiều rộng màn hình >= 1024px
            1024: {
              slidesPerView: 4, // hoặc 4, tùy vào thiết kế của bạn
              spaceBetween: 50,
            },
          }}
          // loop={true}
          rewind = {true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} style={{ width: '350px', height: '450px' }}>
              <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-xl h-full flex flex-col">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 mt-2 flex-grow">{project.description}</p>
                  <div className="mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block bg-sky-800 text-sky-200 text-xs px-2 py-1 rounded-full mr-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedProjects;