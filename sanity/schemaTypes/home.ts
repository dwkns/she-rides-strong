import { defineField, defineType } from 'sanity'
import { MdOutlinePostAdd } from "react-icons/md";
import { image } from "./objects/image"
export const home = {
  name: 'home',
  title: "Home",
  description: 'Site Homepage',
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
    },
    image({ title: "Hero Image", hideImageLink: true }),
    {
      title: 'Strapline',
      name: 'strapline',
      type: 'string',
      hidden: false,
      initialValue: "",
    }
  ]
}