/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // Default breakpoints for mobile and tablets
        'sm': '640px',   // Small tablets & landscape phones
        'md': '768px',   // Tablets
        'lg': '1024px',  // Laptops & small desktops

        // Standard 16:9 Desktops
        'xl': '1280px',  // HD & some FHD
        '2xl': '1536px', // FHD & QHD monitors

        // Custom Ultrawide Breakpoints
        'uw': '2560px',   // 21:9 Ultrawide (e.g., 2560x1080, 3440x1440)
        'suw': '3840px',  // 32:9 Super Ultrawide (e.g., 3840x1080, 5120x1440)
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
