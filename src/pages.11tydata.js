module.exports = {
  layout: "layout.html",
  eleventyComputed: {
    title: data => {
      if (data.lang === "es") {
        return "Instalación de Césped Artificial Premium en Almería";
      }
      return "Premium Artificial Grass Installation in Almería";
    },
    permalink: data => {
      if (data.lang === "es") {
        return "/index.html";
      }
      return `/${data.lang}/index.html`;
    },
    i18n: data => {
      const lang = data.lang || "es";
      return require(`./_data/i18n/${lang}.json`);
    }
  }
};

