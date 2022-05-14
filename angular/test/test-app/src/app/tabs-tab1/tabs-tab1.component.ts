import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-tabs-tab1',
  templateUrl: './tabs-tab1.component.html',
})
export class TabsTab1Component {
  title = 'ERROR';
  segment = 'one';
  changed = 'false';

  ionViewWillEnter() {
    // console.log( this.constructor.name, 'ionViewWillEnter');
    NgZone.assertInAngularZone();
    setTimeout(() => {
      NgZone.assertInAngularZone();
      this.title = 'Tab 1 - Page 1';
    });
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    this.changed = 'true';
  }
  ionViewDidEnter() {
    // console.log( this.constructor.name, 'ionViewDidEnter');
  }
  ionViewWillLeave() {
    console.log( this.constructor.name, 'ionViewWillLeave');
  }
  ionViewDidLeave() {
    // console.log( this.constructor.name, 'ionViewDidLeave');
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    console.log( this.constructor.name, 'ngOnDestroy');
  }
}
