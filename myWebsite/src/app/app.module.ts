import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { MenuComponent } from './menu/menu.component';
import { TechnoComponent } from './techno/techno.component';

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
    PolymerElement('paper-icon-button'),
    MenuComponent,
    TechnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
