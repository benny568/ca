import { Component, OnInit } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from './common';
import * as app from '@nativescript/core/application';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id
})

export class AppComponent implements OnInit {
  private _sideDrawerTransition: DrawerTransitionBase;

  constructor( private router: Router ) {}

  ngOnInit(): void {
    this._sideDrawerTransition = new SlideInOnTopTransition();
  }

  get sideDrawerTransition(): DrawerTransitionBase {
      return this._sideDrawerTransition;
  }

  closeDrawer() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.closeDrawer();
  }

  isComponentSelected( url: string ) {}

  onNavItemTap( path: string ) {
    console.log("Asked to navigate to: " + path );
    this.router.navigateByUrl(path);
    this.closeDrawer();
  }
}