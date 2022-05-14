import { Injectable, Injector } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { IonRouterOutlet } from '@ionic/angular';
import { LIFECYCLE_WILL_LEAVE, LIFECYCLE_DID_LEAVE } from '@ionic/core';

export interface INestedPageDeactivate {
  // ionRouterOutlet: IonRouterOutlet;
  // activatedRoute: ActivatedRoute;
  ionRouterOutletNested: IonRouterOutlet;
}

@Injectable()
export  class CanActivateGuard implements CanActivate, CanDeactivate<any> {
  constructor(public injector: Injector) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    // console.log(this);
    // console.log(route);
    // console.log(state);
    return true;
  }
  canDeactivate(
    component: INestedPageDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const stackCtrl = (component.ionRouterOutletNested as any).stackCtrl;
    stackCtrl.views.forEach((view) => {
      // console.log(view.ref.hostView.destroyed);
      if (!view.ref.hostView.destroyed){
        view.element.dispatchEvent(new CustomEvent(LIFECYCLE_WILL_LEAVE, {
          bubbles: false,
          cancelable: false,
        }));
        view.element.dispatchEvent(new CustomEvent(LIFECYCLE_DID_LEAVE, {
          bubbles: false,
          cancelable: false,
        }));
      }
    });
    // console.log(currentRoute);
    // console.log(currentState);
    // console.log(nextState);
    // console.log(this.injector.get(IonRouterOutlet));
    return true;
  }
}
