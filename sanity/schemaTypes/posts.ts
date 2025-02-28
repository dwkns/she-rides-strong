import { defineField, defineType } from 'sanity'
import { image } from "./objects/image"
import { metaData } from './objects/metaData';


export const posts = {
  name: 'posts',
  title: "Posts",
  description: 'Blog posts',
  type: 'document',
  __experimental_formPreviewTitle: false, // Hides the Page title from the top of the document
  fields: [

    {
      title: 'Post Title',
      name: 'title',
      type: 'string',
      hidden: false,
      initialValue: "New post...",
      validation: (rule: any) => rule.required().min(5).max(80)
    },

    {
      title: 'Post Date',
      name: 'date',
      date: 'The puplished date that shows in the front-end',
      type: 'date',
      hidden: false,
      validation:  (rule: any) => rule.required(),
      initialValue: new Date().toISOString().slice(0, 10)
    },

    {
      title: 'Post summary',
      name: 'summary',
      type: 'text',
      hidden: false,
      initialValue: "Post Summary",
      validation: (rule: any) => rule.required().min(10)
    },
    image({ title: "Hero Image", required:true}),
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' },
        image({
          title: "Inline image"
        })
      ]
    },
    defineField(
      {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{ type: 'categories' }]
      }
    ),
    defineField(
      metaData({
        pageTitle: "",
        pageDescription: ""
      })
    ),
  ]
}