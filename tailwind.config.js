/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        solar: {
          bg: '#fdfbf7',       // O Amarelo Pastel Quente/Creme (Convidativo e Premium)
          surface: '#f4f0e6',  // Um tom um pouco mais denso para cards e divisórias
          brand: '#f97316',    // Laranja de ação
          text: '#1e293b',     // Slate escuro para leitura perfeita sobre o pastel
          muted: '#475569'     // Texto secundário
        }
      }
    },
  },
  plugins: [],
}