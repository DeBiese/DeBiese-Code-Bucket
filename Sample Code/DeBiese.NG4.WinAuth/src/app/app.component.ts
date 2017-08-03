import { Component } from '@angular/core';

import * as svcs from './services/';
import * as models from './models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private authRslt: string = '';
  private authBack: string = 'grey';
  private postRslt: string = '';
  private postBack: string = 'grey';

  constructor(
    private authSvc: svcs.AuthenticationServiceService,
    private dataSvc: svcs.DataServiceService
  ){

  }

  testAuthentication(): void {
    this.authSvc.getUser()
      .subscribe(
        r => {this.authRslt = r; this.authBack = 'success';},
        e => {console.log(e); this.authBack = 'error';}
      );
  }

  testPostData(): void {
    this.dataSvc.save(new models.PostDataModel({Id: 1, Name: 'DeBiese', IsTrue: false, CreatedOn: new Date()}))
      .subscribe(
        r => {this.postRslt = r; this.postBack = 'success';},
        e => {console.log(e); this.postBack = 'error';}
      );
  }
}
