import React, { useState, useRef } from 'react';
// 1. Import thư viện emailjs
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null); // 2. Tạo một ref cho form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State để quản lý trạng thái gửi
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Kiểm tra nếu đang gửi thì không làm gì cả
    if (status === 'sending') return;

    // 3. Kiểm tra xem ref đã được gán chưa
    if (!form.current) return;

    setStatus('sending');

    // 4. Gọi hàm sendForm của emailjs
    emailjs.sendForm(
        'service_3y9383c',      // Thay bằng Service ID của bạn
        'template_029sez9',     // Thay bằng Template ID của bạn
        form.current,           // Tham chiếu đến thẻ form
        'UB_D9n17zWWff_bUc'       // Thay bằng Public Key (tìm trong mục Account của EmailJS)
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          // Xóa form sau khi gửi thành công
          setFormData({ name: '', email: '', message: '' }); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
        }
      );
  };
  
  // Xác định nội dung của button dựa trên status
  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Sent Successfully!';
      case 'error':
        return 'Try Again';
      default:
        return 'Send Message';
    }
  };

  return (
    // 5. Gán ref vào thẻ form
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-6 bg-zinc-200 dark:bg-zinc-800 p-8 rounded-lg shadow-lg z-[71] relative border border-zinc-300/80 dark:border-transparent"
    >
      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4 text-center md:text-left z-71">
        Contact Me
      </h3>

      {/* Input Group: Name */}
      <div className="relative  z-[71]">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder=" "
          autoComplete="name"
          className="z-71 w-full bg-transparent border-b-2 border-zinc-400 dark:border-gray-500 text-zinc-900 dark:text-white py-2 px-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 peer"
        />
        <label className="z-71 absolute left-1 -top-5 text-zinc-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:text-sm">
          Your Name
        </label>
      </div>

      {/* Input Group: Email */}
      <div className="relative mt-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder=" "
          autoComplete="email"
          className="z-71 w-full bg-transparent border-b-2 border-zinc-400 dark:border-gray-500 text-zinc-900 dark:text-white py-2 px-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 peer"
        />
        <label className="z-71 absolute left-1 -top-5 text-zinc-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:text-sm">
          Email Address
        </label>
      </div>

      {/* Input Group: Message */}
      <div className="relative mt-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          placeholder=" "
          className="z-71 w-full bg-transparent border-b-2 border-zinc-400 dark:border-gray-500 text-zinc-900 dark:text-white py-2 px-1 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 peer resize-y min-h-[120px]"
        />
        <label className="z-71 absolute left-1 -top-5 text-zinc-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-sky-600 dark:peer-focus:text-sky-400 peer-focus:text-sm">
          Your Message
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'} // Vô hiệu hóa nút khi đang gửi
        className="z-71 mt-4 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 self-center sm:self-start disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {getButtonText()}
      </button>
      {status === 'success' && <p className="text-green-400 mt-2">Your message has been sent!</p>}
      {status === 'error' && <p className="text-red-400 mt-2">Something went wrong. Please try again.</p>}
    </form>
  );
};

export default ContactForm;