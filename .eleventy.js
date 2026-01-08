module.exports = function(eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  
  // Watch for changes in CSS/JS
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");
  
  // Collection for grass models from JSON
  eleventyConfig.addCollection("grassModels", function(collectionApi) {
    const models = require("./src/_data/grass-models.json");
    return models;
  });
  
  // Global data for i18n
  eleventyConfig.addGlobalData("languages", ["es", "en"]);
  eleventyConfig.addGlobalData("defaultLang", "es");
  
  // Add i18n filter
  eleventyConfig.addFilter("i18n", function(key, lang) {
    lang = lang || "es";
    try {
      const translations = require(`./src/_data/i18n/${lang}.json`);
      const keys = key.split(".");
      let value = translations;
      for (const k of keys) {
        value = value[k];
      }
      return value || key;
    } catch (e) {
      return key;
    }
  });
  
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};

