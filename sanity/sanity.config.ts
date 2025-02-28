import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { studioStructure } from "./structure/studioStructure";
import { dashboard } from "./structure/dashboard";
import { media } from 'sanity-plugin-media'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["settings", "about", "home"])



export default defineConfig({
  name: 'default',
  title: 'she-rides-strong',
  projectId: 'ek041ok4',
  dataset: 'production',

  
  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
    ? input.filter(({ action }) => action && singletonActions.has(action))
    : input,
  },
  
  plugins: [studioStructure, visionTool(), media(), dashboard],
})

