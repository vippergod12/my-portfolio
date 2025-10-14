/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Đây là nơi bạn khai báo tất cả các font đã import
      fontFamily: {
        // Ghi đè font sans-serif mặc định của Tailwind bằng font Roboto
        // Bất kỳ phần tử nào dùng class `font-sans` sẽ có font này
        sans: ['Roboto', 'sans-serif'],
        
        // Thêm các font khác với tên tùy chỉnh
        // Bạn sẽ dùng các class như `font-nunito`, `font-lato`, `font-code`
        nunito: ['"Nunito Sans"', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        code: ['"Google Sans Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}