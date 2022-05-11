import { Component } from '@angular/core';

import { AnimationController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  customPageTransition = ((baseE1: any, opts?: any) => {
    console.log("opts.enteringE1:" + opts.enteringE1);
    console.log("opts.leavingE1:" + opts.leavingE1);
    var anim1 = this.animationCtrl.create()
      .addElement(opts.leavingE1)
      .duration(10000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '1', '0.0')
    var anim2 = this.animationCtrl.create()
      .addElement(opts.enteringE1)
      .duration(10000)
      .iterations(1)
      .easing('ease-out')
      .fromTo('opacity', '0.0', '1')
    var anim2 = this.animationCtrl.create()
      .duration(2000)
      .iterations(1)
      .addAnimation([anim1, anim2]);
    return anim2;
  });

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private animationCtrl: AnimationController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}