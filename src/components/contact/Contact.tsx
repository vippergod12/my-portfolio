import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

const Contact: React.FC = () => (
  <section id="contact" className="text-zinc-900 dark:text-white py-16 md:py-24 relative">
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pink-500/[0.04] rounded-full blur-[100px]" />
    </div>

    <div className="container mx-auto max-w-6xl px-4 z-[71] relative">
      <div className="text-center mb-12 sm:mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          Get in Touch
        </span>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Send a message — I will get back to you as soon as I can.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <ContactForm />
        <div className="mt-8 lg:mt-0">
          <ContactInfo />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
