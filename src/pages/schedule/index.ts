import { PLATFORM } from "aurelia-pal";
import {
  Router,
  RouterConfiguration,
} from "aurelia-router";
import { Steps } from "./step";

export class Schedule {
  public steps = Steps.steps;
  public router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = "Aurelia";
    config.map([
      {
        route: '',
        redirect: "patient-info"
      },
      ...this.steps
    ]);
  }
}
