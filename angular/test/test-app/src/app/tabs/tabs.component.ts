import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  tabCounter = 0;
  tabEvent = '';

  ionRouterOutlet: IonRouterOutlet;

  @ViewChild(IonTabs, { read: IonTabs, static: true }) tabs: IonTabs;

  tabChanged(ev: {tab: string}) {
    this.ionRouterOutlet = (this.tabs.outlet) as IonRouterOutlet;
    this.tabCounter++;
    this.tabEvent = ev.tab;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
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
