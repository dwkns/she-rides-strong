import { defineField, defineType } from 'sanity'
import { MdOutlinePostAdd } from "react-icons/md";
// import { imageTextBlock } from "./objects/imageTextBlock"
// import { videoBlock } from "./objects/videoBlock"
// import { cascadeCottageBlock } from "./objects/cascadeCottageBlock"
// import { heroBlock } from "./objects/heroBlock"
// import { callToAction } from "./objects/callToAction"
import { metaData } from './objects/metaData';

export const posts = {
  name: 'posts',
  title: "Posts",
  description: 'Blog posts',
  type: 'document',
  __experimental_formPreviewTitle: false, // Hides the Page title from the top of the document
  icon: MdOutlinePostAdd,
  fields: [
    defineField(
      {
        title: 'Post Title',
        name: 'title',
        type: 'string',
        hidden: false,
        initialValue: "New post...",
        validation: rule => rule.required().min(5).max(80)
      }
    ),
    defineField(
      {
        title: 'Post summary',
        name: 'summary',
        type: 'text',
        hidden: false,
        initialValue: "Post Summary",
        validation: rule => rule.required().min(10)
      }
    ),
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
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