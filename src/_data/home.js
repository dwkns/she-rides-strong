import {client } from '../../libraries/eleventy-plugin-sanity-tools.js'

const documentType = 'home'
const GROQresult = await client.fetch(`
*[_type == "${documentType}"][0]  {
    title,
    strapline,
    "heroImage": image,
     "heroImageURL": image.asset -> url
 }
`)

// console.log(`----------${documentType} GROQ Result: `, GROQresult)
console.log(`${documentType} data rebuilt`) 
export default GROQresult