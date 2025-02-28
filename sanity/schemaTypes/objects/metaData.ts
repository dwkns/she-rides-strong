export const metaData = (props: any) => {

  return  {
    title: 'Page Metadata',
    name: 'metaData',
    type: 'object',
    fields: [
      {
        name: "pageTitle",
        description: "",
        type: "string",
        initialValue:""
      },
      {
        name: "pageDescription",
        type: "string",
        initialValue:"",
      },

      // {
      //   title: "Seo",
      //   name: "seo",
      //   type: "seoMetaFields",
      // },
    ],
    options: {
      collapsible:  true,
      collapsed:  true
    }
  }
}

