import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {toHTML} from '@portabletext/to-html'
import 'dotenv/config'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiToken = process.env.SANITY_API_TOKEN
const apiVersion =process.env.SANITY_API_VERSION

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const client = createClient({
  projectId:projectId,
  dataset: dataset,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: apiVersion, // use current date (YYYY-MM-DD) to target the latest API version
  token: apiToken // Only if you want to update content with the client
})

// Get a pre-configured url-builder from your sanity client
const imageBuilder = imageUrlBuilder(client)



export { client, imageBuilder , toHTML }