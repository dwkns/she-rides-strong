export const image = (props: any) => {


  return {
    name: props.name ||= 'image',
    title: props.title ||= 'Image Title',
    type: 'image',
    validation: props.required ?  (rule: any) => rule.required() : false,
    options: {
      hotspot: true, // <-- Defaults to false
      collapsible: props.collapsible ||= false,
      collapsed: props.collapsed ||= false
    },
    // validation: (Rule: rule) => Rule.required(),
    fields: [
      {
        title: "Alternative Text",
        description: "A description of the image for sight impared people and search engines.",
        name: "alt",
        type: "string",
        initialValue: "",
        
        // validation: (Rule: any) => Rule.required(),
      },
      {
        title: "Image link",
        description: "Optional. If you want this image to link somewhere. Use full URL's",
        name: "imageLink",
        type: "string",
        initialValue: "",
        hidden: props.hideImageLink ||= false,
        // validation: (Rule: any) => Rule.required(),
      }
      ,
      {
        title: "Image Credit",
        description: "Optional. The person who took the photo or the copyright holder.",
        name: "imageCredit",
        type: "string",
        initialValue: "",
        // validation: (Rule: any) => Rule.required(),
      }
    ],

  }
}