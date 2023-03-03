import {bindable, bindingMode} from 'aurelia-framework';

export class TimelineAccordian {
  static inject = [Element];

  @bindable heading: string;
  @bindable index: number;
  @bindable wrapperClass: string;
  public contentAvailable: boolean = true

  constructor(private element) {}

  attached() {
    // let check = !!this.element.au.controller.view.slots['__au-default-slot-key__'].children.length;
    // console.log(check)
  }
}