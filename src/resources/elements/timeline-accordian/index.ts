import {bindable, bindingMode} from 'aurelia-framework';

export class TimelineAccordian {
  static inject = [Element];

  @bindable steps: any[];
  @bindable currentView: string;

  @bindable heading: string;
  @bindable index: number;
  @bindable wrapperClass: string;
  public contentAvailable: boolean = true

  constructor(private element) {}

  attached() {
    let check = this.element.au.controller.view.slots;
    console.log(check)
  }
}