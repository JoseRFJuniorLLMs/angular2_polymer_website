import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';
import { RouterModule } from '@angular/router'; 
import { ROUTES } from './app.routes';
import {ChartsModule} from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { MenuComponent } from './menu/menu.component';
import { TechnoComponent } from './techno/techno.component';
import { HomeComponent } from './home/home.component';
import { LabComponent } from './lab/lab.component';
import { LinkComponent } from './link/link.component';
import { LogstashComponent } from './logstash/logstash.component';
import { ExperienceProComponent } from './cv/experience-pro/experience-pro.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    PolymerElement('paper-tabs'),
    PolymerElement('paper-tab'),
    PolymerElement('paper-header-panel'),
    PolymerElement('paper-toolbar'),
    PolymerElement('app-drawer'),
    PolymerElement('paper-card'),
    PolymerElement('paper-item'),
    PolymerElement('paper-menu'),
    PolymerElement('iron-icon'),
    PolymerElement('paper-icon-button'),
    PolymerElement('google-youtube'),
    PolymerElement('iron-media-query'),
    MenuComponent,
    TechnoComponent,
    HomeComponent,
    LabComponent,
    LinkComponent,
    LogstashComponent,
    ExperienceProComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
