import React from 'react';

// --- 1. IMPORT SWIPER VÀ CÁC MODULE CẦN THIẾT ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub } from "react-icons/fa";
import './ProjectsPage.css'

// --- 2. IMPORT CSS CỦA SWIPER ---
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/navigation.css';
import '../../../node_modules/swiper/modules/pagination.css';

// --- 3. ĐỊNH NGHĨA KIỂU DỮ LIỆU CHO MỘT DỰ ÁN ---
type ProjectData = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
};

// --- 4. DỮ LIỆU CÁC DỰ ÁN (BẠN CÓ THỂ THAY ĐỔI Ở ĐÂY) ---
const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: 'AILMS Inventory Management',
    description: 'A comprehensive web application designed to manage and track inventory. The system simplifies stock-taking, updates levels in real-time, and generates reports for strategic business decisions.',
    technologies: ['VueJs', 'Node.js', 'PostgreSQL', 'Bootstrap','Springboot', 'Docker','Github','Notion'],
    imageUrl: '/assets/imgs/ailms.png', // Thay bằng đường dẫn ảnh của bạn
    githubUrl: 'https://github.com/Jomurice/DATN_AILMS_BE',
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A dynamic personal portfolio to showcase my skills, projects, and professional journey. Built with a focus on performance, modern design, and an engaging user experience.',
    technologies: ['ReactJS','Tailwind', 'TypeScript', 'Vercel', 'Framer Motion'],
    imageUrl: '/assets/imgs/my-portfolio.png', // Thay bằng đường dẫn ảnh của bạn
    githubUrl: 'https://github.com/vippergod12/my-portfolio',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product catalogs, shopping cart functionality, secure checkout, and an admin dashboard for managing products, orders, and customers.',
    technologies: ['Vue.js', 'Spring Boot', 'Java', 'Stripe API'],
    imageUrl: 'https://via.placeholder.com/800x600', // Placeholder image
    githubUrl: '',
  },

];

// --- 5. COMPONENT CHÍNH ---
const ProjectsPage: React.FC = () => {
  return (
    <section className="bg-zinc-900 text-white w-full min-h-screen flex items-center justify-center px-8 w-custom z-[71]">
      <div className="w-full max-w-8xl z-[71] relative">
        <Swiper
          // Kích hoạt các module
          modules={[Navigation, Pagination, Autoplay]}
          
          // Cấu hình
          spaceBetween={50}     // Khoảng cách giữa các slide
          slidesPerView={1}       // Luôn hiển thị 1 slide tại một thời điểm
          loop={true}           // Cho phép lặp vô tận
        // rewind = {true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}     // Hiển thị nút tới/lui
          pagination={{ clickable: true }} // Hiển thị các chấm phân trang có thể click
          
          // Thêm class để tùy chỉnh CSS nếu cần
          className="mySwiper"
        >
          {PROJECTS_DATA.map((project) => (
            <SwiperSlide key={project.id}>
              {/* Layout 2 cột cho mỗi slide */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* === CỘT BÊN TRÁI: THÔNG TIN (6/12) === */}
                <div className="md:col-span-6 flex flex-col space-y-8 text-center md:text-left z-[71]">
                  {/* Hàng 1: Title */}
                  <h1 className="text-5xl lg:text-6xl font-bold text-sky-400">
                    {project.title}
                  </h1>
                  
                  {/* Hàng 2: Description */}
                  <h3 className="text-xl text-zinc-300 leading-relaxed">
                    {project.description}
                  </h3>
                  
                  {/* Hàng 3: Technologies Tags */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {project.technologies.map((tag) => (
                      <span key={tag} className="bg-zinc-800 text-sky-300 text-sm font-semibold px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                    {/* Hàng 4: Link đến dự án */}
                    <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                        <a
                            href={project.githubUrl}
                            target="_blank" // Mở link trong tab mới
                            rel="noopener noreferrer" // Bảo mật và hiệu suất
                            className="text-white bg-zinc-700 hover:bg-sky-600 transition-colors duration-300 rounded-full p-3 flex items-center justify-center"
                            aria-label="GitHub Repository" // Tốt cho accessibility
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                    {/* Bạn có thể thêm các nút khác ở đây, ví dụ link deploy live */}
                    </div>
                </div>



                {/* === CỘT BÊN PHẢI: HÌNH ẢNH (6/12) === */}
                <div className="md:col-span-6">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsPage;