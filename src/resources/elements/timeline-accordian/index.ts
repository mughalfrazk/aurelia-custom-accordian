import {bindable, bindingMode} from 'aurelia-framework';

export class TimelineAccordian {
  static inject = [Element];

  @bindable steps: any[];
  @bindable currentView: string;

  @bindable heading: string;
  @bindable index: number;
  @bindable position: number;
  public contentAvailable: boolean = true

  constructor(private element) {}
}