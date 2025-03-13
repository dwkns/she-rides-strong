import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export const dashboard: any = dashboardTool({
  widgets: [
    projectInfoWidget(),
    netlifyWidget({
      title: "Deploy to Netlify",
      sites: [
        {
          title: "She Rides Strong",
          apiId: "c665d0ac-7eac-4375-b1f6-b9d7649fb44a", 
          buildHookId:  "67c5a689b06c550fcd183315", 
          name: "she-rides-strong", 
          url: "https://she-rides-strong.netlify.app/",
        }
      ]
    })
  ]
})


