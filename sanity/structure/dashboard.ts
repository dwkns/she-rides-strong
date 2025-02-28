import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export const dashboard: any = dashboardTool({
  widgets: [
    projectInfoWidget(),
    netlifyWidget({
      title: 'My Netlify deploys',
      sites: [
        {
          title: 'She Rides Strong',
          apiId: '', // '5ed2cb0c-e968-41e7-aa06-ef2a0feb283f'
          buildHookId: '', //'66e070277e444a63fbe6ffa5',
          name: '', //'ech-staging',
          url: '', //'https://ech-staging.netlify.app/',
        }
      ]
    })
  ]
})