import { Routes } from "@angular/router";
import { HubComponent } from "./hub/hub.component";

/**
 * Routes specific to the DEAS module.
 * @type {Routes}
 */
export const routesDeas: Routes = [

  {
    /**
     * The path for the route.
     * @type {string}
     */
    path: '',

    /**
     * The component to be rendered for the route.
     * @type {HubComponent}
     */
    component: HubComponent,
  },

  // You can add more routes here if necessary

];
