import {client } from '../../libraries/eleventy-plugin-sanity-tools.js'
import {toHTML} from '@portabletext/to-html'
import slugify from 'slugify'

const documentType = 'posts'
const GROQresult = await client.fetch(`
*[_type == "${documentType}"] {
 title,
  summary,
  "heroImage":image,
  "heroImageURL":image.asset->url,
  "category": category->categoryName,
  title,
  metaData,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->,
      nice
    } 
  },
  date
}
`) 

//  console.log(`----------${documentType} GROQ Result: `, GROQresult)
//  console.log(`----------${documentType} GROQ Resul lengtht: `, GROQresult.length)
// console.log("post.content: ", GROQresult[0].content)
// loop each post and convert block content to HTML
GROQresult.forEach(post => {
  const html = toHTML(post.content, {
    components: {
      types: {
        image: ({value}) => {
          return `<img src="${value?.asset?.url}" />` 
        }
      }
    },
   
  })
  post.content = html
  post.date = new Date(post.date).toDateString();
  console.log("post.title: ",post.title )

  post["slug"] = slugify(post.title,{lower:true,strict:true})
  // console.log("post.slug: ", post.slug)
})






console.log(`${documentType} data rebuilt`) 

export default GROQresult 