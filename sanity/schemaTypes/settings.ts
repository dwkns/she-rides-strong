import { defineField, defineType } from 'sanity'
import { MdOutlinePostAdd } from "react-icons/md";

export const settings = {
  name: 'settings',
  title: "Site Settings",
  description: 'Global defaults for the site',
  type: 'document',
  __experimental_formPreviewTitle: true, // Hides the Page title from the top of the document
  icon: MdOutlinePostAdd,
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    {
      title: 'PageTitle',
      name: 'title',
      type: 'string',
      hidden: true,
      initialValue: "Settings",
    },
    {
      title: 'Site Name',
      name: 'name',
      type: 'string',
      hidden: false,
      initialValue: "She Rides Stong",
    },
    {
      title: 'Site Description',
      name: 'description',
      type: 'string',
      hidden: false,
    },
    {
      title: 'Site Strapline',
      name: 'strapline',
      type: 'string',
      hidden: false,
      initialValue: "Helping Women become better cyclists",
    },
    {
      title: 'Production Base URL',
      name: 'productionURL',
      type: 'string',
      hidden: false,
      initialValue: "",
    },
    {
      title: 'Staging Base URL',
      name: 'stagingURL',
      type: 'string',
      hidden: false,
      initialValue: "",
    },
    {
      title: 'Language',
      name: 'language',
      type: 'string',
      hidden: false,
      initialValue: "en",
    },
    {
      type: "object",
      name: "author",
      title: "Author",
      fields: [
        {
          title: 'Name',
          name: 'name',
          type: 'string',
          hidden: false,
        },
        {
          title: 'Email',
          name: 'email',
          type: 'string',
          hidden: false,
        },
        {
          title: 'URL',
          name: 'urk',
          type: 'string',
          hidden: false,
        }
      ]
    }

  ],



}