import { Component, OnDestroy, NgZone, OnInit } from '@angular/core';
import { ViewWillEnter, ViewWillLeave, ViewDidLeave, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-nested-outlet-page',
  templateUrl: './nested-outlet-page.component.html',
})
export class NestedOutletPageComponent implements ViewWillEnter, ViewWillLeave, ViewDidLeave, OnDestroy, OnInit {

  constructor(public ionRouterOutlet: IonRouterOutlet) {}

  ngOnInit() {
    const stackCtrl = (this.ionRouterOutlet as any).stackCtrl;
    console.log(stackCtrl.views);
  }

  ionViewWillEnter() {
    console.log(this.constructor.name + ' ionViewWillEnter');
  }
  ionViewDidEnter() {
    // console.log( this.constructor.name, ' ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log(this.constructor.name + ' ionViewWillLeave');
  }
  ionViewDidLeave() {
    // console.log( this.constructor.name, ' ionViewDidLeave');
  }
  ngOnDestroy() {
    console.log( this.constructor.name, ' ngOnDestroy');
  }
}
