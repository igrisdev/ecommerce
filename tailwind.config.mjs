/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        local_background_primary: '#FFFFFF',
        local_background_secondary: '#121212',
        local_background_tertiary: '#EFEFEF',
        // local_background_quaternary: '#00A082',
        local_title_primary: '#121212',
        local_title_secondary: '#EFEFEF',
        local_title_tertiary: '#000000',
        // local_title_quaternary: '#FFFFFF',
        local_subtitle_primary: '#121212',
        local_subtitle_secondary: '#EFEFEF',
        local_text_primary: '#121212',
        local_text_secondary: '#EFEFEF',
        local_text_tertiary: '#000000',
        // local_border_primary: '#E7E7E7',
        local_accent_primary: '#E75A55',
        local_icons_primary: '#121212',
        local_icons_secondary: '#FFFFFF',
        local_button_primary: '#EFEFEF',
        local_button_secondary: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
