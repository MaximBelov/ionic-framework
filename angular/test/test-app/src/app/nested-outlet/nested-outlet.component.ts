import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { INestedPageDeactivate } from '../can-activate';

@Component({
  selector: 'app-nested-outlet',
  templateUrl: './nested-outlet.component.html',
})
export class NestedOutletComponent implements OnInit, OnDestroy, INestedPageDeactivate {
  public ionRouterOutletNested: IonRouterOutlet;
  constructor(public ionRouterOutlet: IonRouterOutlet, public activatedRoute: ActivatedRoute) {}

  setStackEvents($event){

    console.log($event);
    // const stackCtrl = (this.ionRouterOutlet as any).stackCtrl;
    // console.log(stackCtrl.views);
    // this.stackEvents = $event;
  }

  onActivate($event){
    this.ionRouterOutletNested = $event.ionRouterOutlet;
    console.log($event);
  }

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
    // const stackCtrl = (this.ionRouterOutlet as any).stackCtrl;
    // console.log(stackCtrl.views);
    console.log( this.constructor.name, ' ngOnDestroy');
  }
}
