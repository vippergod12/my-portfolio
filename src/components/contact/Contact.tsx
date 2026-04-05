import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css'
const Contact: React.FC = () => {
  return (
    <section id="contact" className="text-zinc-900 dark:text-white py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 z-[71] relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact</h2>
          <p className="text-zinc-600 dark:text-gray-400 mt-4 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send a message — I will get back to you as soon as I can.
          </p>
        </div>

        {/* Dùng Grid để chia 2 cột, 1 cột trên mobile, 2 cột trên desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
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