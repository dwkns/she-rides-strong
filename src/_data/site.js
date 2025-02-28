import 'dotenv/config'

import {client } from '../../libraries/eleventy-plugin-sanity-tools.js'

const documentType = 'settings'
const GROQresult = await client.fetch(`
*[_type == "${documentType}"][0] 
{
  author,
  stagingURL,
  name,
  language,
  strapline,
  productionURL,
  description
}
`)

//  console.log(`----------${documentType} GROQ Result: `, GROQresult)

export default  { 
  currentEnv: process.env.CURRENT_ENV,
  ...GROQresult 
}