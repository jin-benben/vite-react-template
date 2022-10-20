/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        '333':withOpacityValue('--color-333'),
        'fff':withOpacityValue('--color-fff'),
        "666":withOpacityValue('--color-666'),
        "999":withOpacityValue('--color-999'),
        "ccc":withOpacityValue('--color-ccc'),
        "eee":withOpacityValue('--color-eee'),
        "f7f7f7":withOpacityValue('--color-f7f7f7'),
        "default":withOpacityValue('--color-default'),
      },
      padding:{
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6':'6px',
        '8':'8px',
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '15':'15px',
        '16':'16px',
        '18':'18px',
        '20':'20px',
        '24':'24px',
        '30':'30px'
      },
      margin:{
        '4': '4px',
        '6':'6px',
        '8':'8px',
        '10':'10px',
        '12':'12px',
        '14':'14px',
        '15':'15px',
        '16':'16px',
        '18':'18px',
        '20':'20px',
        '24':'24px',
        '30':'30px'
      },
      borderRadius: {
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
      },
      fontSize: {
        '12': '12px',
        '13': '13px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
      },
      height:{
        "44":"44px"
      }
    },
  },
  plugins: [],
}

function withOpacityValue(variable) {
  return () => {
    return `var(${variable})`
  }
}