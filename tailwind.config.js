// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan tous les fichiers JS, JSX, TS et TSX dans src/
  ],
  theme: {
    extend: {}, // Personnalisation des thèmes (si besoin)
  },
  plugins: [], // Ajout de plugins si nécessaire
  variants:{
    extend:{
      display:["focus-group"]
    }
  }
};


