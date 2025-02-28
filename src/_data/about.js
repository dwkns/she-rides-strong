import { client } from '../../libraries/eleventy-plugin-sanity-tools.js'
import { toHTML } from '@portabletext/to-html'
const documentType = 'about'


const GROQresult = await client.fetch(`
*[_type == "about"][0] {
  title,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
  } 
}
}
`)

const html = toHTML(GROQresult.content, {
    components: {
        types: {
            image: ({ value }) => {
                console.log("value: ", value.asset.url)
                return `<img src="${value.asset.url}" />`
            }
        }
    }
})

GROQresult.content = html

// console.log(`----------${documentType} GROQ Result: `, GROQresult)

export default GROQresult