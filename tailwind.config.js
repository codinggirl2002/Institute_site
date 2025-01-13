/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}",
            "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary1: '#9c1c16',
        primary2: '#fbe7e6',
        secondary1: '#b97b47',
        secondary2: '#f5d6bc',
        dark1: '#161314',
        dark2: '#5d5054',
        light: '#f6f6f6',
        info1: '#2a00a2',
        info2: '#bca4ff',
        warning1: '#946200',
        warning2: '#ffd789',
        warning3: '#f4b740',
        success1: '#00966d',
        success2: '#34eab9',
        error1: '#c30052',
        error2: '#ff83b7',
        gray1: '#8b96a5',
        gray2: '#ececec',
        gray3: '#a5a8ad',
        gray4: '#f7f7f8',
      },
    },
  },
  plugins: [],
}

