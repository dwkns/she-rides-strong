export const image = (props: any) => {


  return {
    name: props.name ||= 'image',
    title: props.title ||= 'Image Title',
    type: 'image',
    descricription: props.required ? 'An image is required' : 'An image is optional',
    validation:  (Rule: any) => [
      Rule.custom((value: any) => {
        if (props.required === true) {
          return value && value.asset ? true : { message: 'An Image is Required!'};
        } else {
          return false;
        }
        
      }),
    ],
    options: {
      hotspot: true, // <-- Defaults to false
      collapsible: props.collapsible ||= false,
      collapsed: props.collapsed ||= false,
    },
    fields: [
      {
        title: "Alternative Text",
        description: "A description of the image for sight impared people and search engines.",
        name: "alt",
        type: "string",
        initialValue: "",
      },
      {
        title: "Image Credit",
        description: "Optional. The person who took the photo or the copyright holder.",
        name: "imageCredit",
        type: "string",
        initialValue: "",
      },
      {
        title: "Image link",
        description: "Optional. If you want this image to link somewhere. Use full URL's",
        name: "imageLink",
        type: "string",
        initialValue: "",
        hidden: props.showImageLink ||= true,

      }
    ],

  }
}