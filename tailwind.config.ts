import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js'
  ],
  plugins: [
    require('daisyui'),
    require('tailwind-typewriter')({
      wordsets: {
        en: {
          words: ['software developer', 'researcher', 'student'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        zh: {
          words: ['軟體工程師', '研究者', '學生'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        },
        ru: {
          words: ['разработчик', 'Исследователь', 'студент'],
          writeSpeed: 0.05,
          eraseSpeed: 0.05,
          pauseBetween: 2
        }
      }
    })
  ],
  // daisyUI config (optional - here are the default values) #0055bd
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          'base-100': '#f9f9fa',
          primary: '#343232'
        }
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          // 'base-100': '#f9f9fa',
          primary: '#343f4f'
        }
      }
    ]
  }
}
export default config
