import { MdOutlinePostAdd } from "react-icons/md";

export const categories =  {
  name: 'categories',
  title: "Categories",
  description: 'The Categorory this post fits into. There can be only one.',
  type: 'document',
  __experimental_formPreviewTitle: false, // Hides the Page title from the top of the document
  icon: MdOutlinePostAdd,
  fields: [
    {
      title: 'Category Name',
      name: 'categoryName',
      type: 'string'
    },

  ],
  preview: {
    select: {
      title: 'categoryName',
    }
  }
}