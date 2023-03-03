import { autoinject } from "aurelia-framework";
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
        route: ["", "steo-one"],
        name: "step-one",
        nav: true,
        moduleId: PLATFORM.moduleName("pages/step-one/index"),
        title: "Step 01",
      },
      {
        route: "step-two",
        name: "step-two",
        moduleId: PLATFORM.moduleName("pages/step-two/index"),
        nav: true,
        title: "Step 02",
      },
      {
        route: "step-three",
        name: "step-three",
        moduleId: PLATFORM.moduleName("pages/step-three/index"),
        nav: true,
        title: "Step 03",
      },
      {
        route: "step-four",
        name: "step-four",
        moduleId: PLATFORM.moduleName("pages/step-four/index"),
        nav: true,
        title: "Step 04",
      },
    ]);
  }
}
