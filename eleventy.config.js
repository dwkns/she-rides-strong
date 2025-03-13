import logToConsole from 'eleventy-plugin-console-plus'
 import touch from 'touch'
 import tailwindcss from 'eleventy-plugin-tailwindcss-4'






export default (eleventyConfig) => {

  eleventyConfig.addPlugin(tailwindcss, {
    input: 'css/tailwind.css', // relative to your project input folder
    output:'styles.css' // relative to your project output folder
  });

  eleventyConfig.addPlugin(logToConsole, {});


  eleventyConfig.addPassthroughCopy({
    "src/styles/main.css": "./main.css",
    "src/images/": "./images/",
    "src/admin/": "./admin/",
  });

  //  eleventyConfig.addShortcode("URLEncode", function(templatePath) { 
  //     console.log("btoa ",btoa(templatePath) )
  //     return btoa(templatePath)
  //  })

  eleventyConfig.setServerOptions({
    onRequest: {
      "/reload/:template": function ({ url, pattern, patternGroups }) {
        const template = atob(patternGroups.template) // decode the b64 encocded string
        console.log("template:", template) // tells us which template needs to change
        // code to reprocess data cascade
        // code to rebuild template
         touch(template)
         touch('./src/_data/about.js')
        return "Nothing to see here" 
      },
    }
  });

  eleventyConfig.addWatchTarget("./src/_data/posts.js/");
  // "/reload": function ({ url, pattern, patternGroups }) {
  //   console.log(`just a reload on ${url}`)
  //   return "Nothing to see here"
  // },
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data'
    },
  };
};