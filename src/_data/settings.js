import {client } from '../../libraries/eleventy-plugin-sanity-tools.js'

const documentType = 'settings'
const GROQresult = await client.fetch(`
*[_type == "${documentType}"][0] 
`)

//  console.log(`----------${documentType} GROQ Result: `, GROQresult)
 
 console.log(`${documentType} data rebuilt`) 
export default GROQresult