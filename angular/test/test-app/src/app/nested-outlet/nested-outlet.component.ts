import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { INestedPageDeactivate } from '../ion-router-outlet-hooks';

@Component({
  selector: 'app-nested-outlet',
  templateUrl: './nested-outlet.component.html',
})
export class NestedOutletComponent implements OnInit, OnDestroy, INestedPageDeactivate {

  @ViewChild(IonRouterOutlet, { static: true }) ionRouterOutlet: IonRouterOutlet;

  ngOnInit() {
    const stackCtrl = (this.ionRouterOutlet as any).stackCtrl;
    console.log(stackCtrl.views);
  }

  ionViewWillEnter() {
    console.log( this.constructor.name, ' ionViewWillEnter');
  }
  // ionViewDidEnter() {
  //   console.log( this.constructor.name, ' ionViewDidEnter');
  // }
  ionViewWillLeave() {
    console.log( this.constructor.name, ' ionViewWillLeave');
  }
  // ionViewDidLeave() {
  //   console.log( this.constructor.name, ' ionViewDidLeave');
  // }
  ngOnDestroy() {
    console.log( this.constructor.name, ' ngOnDestroy');
  }
}
