import { inject } from 'aurelia-framework'; //or framework
import { Routes } from "../routes";
import { Router } from 'aurelia-router';

@inject(Router)
export class Confirm {
  private currentView = '';
  private position = 5;
  private steps = Routes.routes;

  constructor(private router) {}

  attached() {
    this.currentView = this.router.currentInstruction.config.name;
    console.log(this.router.currentInstruction.config.name)
  }
}