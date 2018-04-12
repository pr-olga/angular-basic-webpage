import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
      

import { AppComponent } from './app.component';
import { UnternehmenComponent } from './unternehmen/unternehmen.component';
import { JobboerseComponent } from './jobboerse/jobboerse.component';
import { BewerbungstippsComponent } from './bewerbungstipps/bewerbungstipps.component';
import { KontaktComponent } from './kontakt/kontakt.component';


@NgModule({
  declarations: [
    AppComponent,
    UnternehmenComponent,
    JobboerseComponent,
    BewerbungstippsComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    MDBBootstrapModule.forRoot(),
      RouterModule.forRoot([
          {path: '', component: JobboerseComponent},
          {path: 'bewerbungstipps', component: BewerbungstippsComponent},
          {path: 'ueber-uns', component: UnternehmenComponent},
          {path: 'kontakt', component: KontaktComponent}
      ])
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
