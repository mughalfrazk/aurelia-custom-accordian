import { PLATFORM } from "aurelia-pal";

export namespace Routes {
  export const routes = [
    {
      route: "patient-info",
      name: "patient-info",
      moduleId: PLATFORM.moduleName("./01-patient-info/index"),
      title: "Patient Information",
    },
    {
      route: "procedures",
      name: "procedures",
      moduleId: PLATFORM.moduleName("./02-procedures/index"),
      title: "Procedures",
    },
    {
      route: "schedule",
      name: "schedule",
      moduleId: PLATFORM.moduleName("./03-schedule/index"),
      title: "Schedule",
    },
    {
      route: "review",
      name: "review",
      moduleId: PLATFORM.moduleName("./04-review/index"),
      title: "Review",
    },
    {
      route: "confirm",
      name: "confirm",
      moduleId: PLATFORM.moduleName("./05-confirm/index"),
      title: "Confirm",
    }
  ]
}