import { PLATFORM } from "aurelia-pal";
import {
  Router,
  RouterConfiguration,
} from "aurelia-router";

export class App {
  public router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "home"],
        name: "home",
        nav: true,
        moduleId: PLATFORM.moduleName("pages/home/index"),
        title: "Home",
      },
      {
        route: "schedule",
        name: "schedule",
        moduleId: PLATFORM.moduleName("pages/schedule/index"),
        nav: true,
        title: "Schedule",
      }
    ]);
  }
}
