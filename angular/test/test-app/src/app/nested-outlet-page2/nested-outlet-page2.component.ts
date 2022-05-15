import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-nested-outlet-page2',
  templateUrl: './nested-outlet-page2.component.html',
})
export class NestedOutletPage2Component implements OnInit {

  constructor(public ionRouterOutlet: IonRouterOutlet) {}

  ngOnInit() {
    const stackCtrl = (this.ionRouterOutlet as any).stackCtrl;
    console.log(stackCtrl.views);
  }

  ionViewWillEnter() {
    console.log( this.constructor.name, ' ionViewWillEnter');
  }
  ionViewDidEnter() {
    // console.log( this.constructor.name, ' ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log( this.constructor.name, ' ionViewWillLeave');
  }
  ionViewDidLeave() {
    // console.log( this.constructor.name, ' ionViewDidLeave');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log( this.constructor.name, ' ngOnDestroy');
  }
}
