import {structureTool} from 'sanity/structure'
import { MdOutlineSettings, MdHome, MdOutlineInfo, MdCategory } from "react-icons/md";

const singletonListItem = (S: any, typeName: string, title?: string) => {
   // Our singleton type has a list item with a custom child
  const singleton = S.listItem()
  .title(title || typeName)
  .id(typeName)
  .child( 
    // Instead of rendering a list of documents, we render a single
    // document, specifying the `documentId` manually to ensure
    // that we're editing the single instance of the document
    S.document()
    .schemaType(typeName)
    .documentId(typeName))
  return singleton
}
  
export const studioStructure = structureTool(
  {
    structure: (S) =>
      S.list()
        .title("Content")
        .items([
          singletonListItem(S, "home", "Home").icon(MdHome),
          singletonListItem(S, "about", "About").icon(MdOutlineInfo),
         
          // Regular document types
          S.documentTypeListItem("posts").title("Blog Posts"),
          S.documentTypeListItem("categories").title("Categories").icon(MdCategory),
          S.divider(),
          singletonListItem(S, "settings", "Site Settings").icon(MdOutlineSettings),

        ]),
  }
)