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
  ionRouterOutlet: IonRouterOutlet;
  // activatedRoute: ActivatedRoute;
}

@Injectable()
export class IonRouterOutletHooks implements CanActivate, CanDeactivate<any> {
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
    // console.log(component);
    // console.log(currentRoute);
    // console.log(currentState);
    // console.log(nextState);
    if (!component.ionRouterOutlet) {
      alert('IonRouterOutletHooks->component->ionRouterOutlet');
      return false;
    }
    const stackCtrl = (component.ionRouterOutlet as any).stackCtrl;
    stackCtrl.views.reverse().forEach((view) => {
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
    return true;
  }
}
