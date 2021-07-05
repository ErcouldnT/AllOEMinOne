// tailwind.config.cjs
module.exports = {
  mode: 'jit',
  // you don't need `purge: enabled: production` because you are using jit.
  purge: ['./src/**/*.svelte'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
