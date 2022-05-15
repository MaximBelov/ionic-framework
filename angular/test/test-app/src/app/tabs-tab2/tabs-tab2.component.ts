import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-tabs-tab2',
  templateUrl: './tabs-tab2.component.html',
})
export class TabsTab2Component {
  title = 'ERROR';
  segment = 'two';
  changed = 'false';

  ngOnInit() {
    NgZone.assertInAngularZone();
    setTimeout(() => {
      NgZone.assertInAngularZone();
      this.title = 'Tab 2 - Page 1';
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
