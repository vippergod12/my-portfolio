import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css'
const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-zinc-900 text-white py-21">
      <div className="container mx-auto px-4  z-[71] relative ">
        {/* Tiêu đề chung cho section */}
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-gray-400 mt-4 text-lg mb-4">
            Get to know me and feel free to reach out.
          </p>
        </div>

        {/* Dùng Grid để chia 2 cột, 1 cột trên mobile, 2 cột trên desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Cột Trái: Form */}
          <div>
            <ContactForm />
          </div>

          {/* Cột Phải: Thông tin */}
          <div className="mt-12 lg:mt-0">
            <ContactInfo />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;