import { PLATFORM } from "aurelia-pal";
import {
  Router,
  RouterConfiguration,
} from "aurelia-router";
import { Routes } from "./routes";

export class Schedule {
  public routes = Routes.routes;
  public router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "Aurelia";
    config.map([
      {
        route: '',
        redirect: "patient-info"
      },
      ...this.routes
    ]);
  }
}
