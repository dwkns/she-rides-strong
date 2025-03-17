import logToConsole from 'eleventy-plugin-console-plus'
import EleventyVitePlugin from '@11ty/eleventy-plugin-vite'
import tailwindcss from '@tailwindcss/vite';
import touch from 'touch'






export default (eleventyConfig) => {
  eleventyConfig.addPlugin(logToConsole, {});
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: { plugins: [tailwindcss()] }
  });


  eleventyConfig.addPassthroughCopy({
   "src/css/tailwind.css": "styles.css" ,
    "src/images/": "./images/",
    "src/admin/": "./admin/",
  });

  //  eleventyConfig.addShortcode("URLEncode", function(templatePath) { 
  //     console.log("btoa ",btoa(templatePath) )
  //     return btoa(templatePath)
  //  })

  eleventyConfig.setServerOptions({
    onRequest: {
      "/reload/:b64String": function ({ url, pattern, patternGroups }) {

        const b64String = atob(patternGroups.b64String) // decode the b64 
        const pageData = JSON.parse(b64String); // turn string into JSON

        const dir = eleventyConfig.dir // get eleventy directories

        // Assume the datafile is the same name as the template.
        const dataFile = `./${dir.input}/${dir.data}${pageData.filePathStem}.js`
        touch.sync(dataFile)
        // console.log("template: ", template)
       
        // get the template and 'touch' it
        const template = pageData.inputPath
        touch.sync(template)
        // console.log("datafile: ", dataFile)
        
  
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