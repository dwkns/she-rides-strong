import { defineField, defineType } from 'sanity'
import { MdOutlinePostAdd } from "react-icons/md"
import { image } from "./objects/image"

export const about = {
  name: 'about',
  title: "About",
  description: 'Site About page',
  type: 'document',
  __experimental_formPreviewTitle: true, // Hides the Page title from the top of the document
  icon: MdOutlinePostAdd,
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    {
      title: 'Page Title',
      name: 'title',
      type: 'string',
      hidden: false,
      initialValue: "Settings",
    }, {
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
  ]
}