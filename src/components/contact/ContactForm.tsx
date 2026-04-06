import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending' || !form.current) return;

    setStatus('sending');
    emailjs.sendForm('service_3y9383c', 'template_029sez9', form.current, 'UB_D9n17zWWff_bUc')
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, () => {
        setStatus('error');
      });
  };

  const buttonText = {
    idle: 'Send Message',
    sending: 'Sending...',
    success: 'Sent Successfully!',
    error: 'Try Again',
  }[status];

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="glass-card flex flex-col gap-y-6 p-8 rounded-2xl z-[71] relative"
    >
      <h3 className="font-display text-2xl font-bold text-zinc-900 dark:text-white">
        Send a Message
      </h3>

      <div className="relative z-[71]">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" "
          autoComplete="name"
          className="contact-input peer"
        />
        <label className="contact-label">Your Name</label>
      </div>

      <div className="relative z-[71]">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
          autoComplete="email"
          className="contact-input peer"
        />
        <label className="contact-label">Email Address</label>
      </div>

      <div className="relative z-[71]">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder=" "
          className="contact-input peer resize-y min-h-[120px]"
        />
        <label className="contact-label">Your Message</label>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="z-[71] mt-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto self-center sm:self-start"
      >
        {buttonText}
      </button>
      {status === 'success' && <p className="text-emerald-500 text-sm">Your message has been sent!</p>}
      {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;
