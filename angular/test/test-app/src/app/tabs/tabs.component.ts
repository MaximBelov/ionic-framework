import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  tabCounter = 0;
  tabEvent = '';

  tabChanged(ev: {tab: string}) {
    this.tabCounter++;
    this.tabEvent = ev.tab;
  }

  // ionViewWillEnter() {
  //   console.log( this.constructor.name, 'ionViewWillEnter');
  // }
  // ionViewDidEnter() {
  //   console.log( this.constructor.name, 'ionViewDidEnter');
  // }
  // ionViewWillLeave() {
  //   console.log( this.constructor.name, 'ionViewWillLeave');
  // }
  // ionViewDidLeave() {
  //   console.log( this.constructor.name, 'ionViewDidLeave');
  // }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log( this.constructor.name, 'ngOnDestroy');
  }
}
