import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ROUTES} from './app.routes';

import {AppService} from './app.service';
import {EditorService} from './editor/editor.service';

import {AppComponent} from './app.component';
import {EditorComponent} from './editor/editor.component';
import {MetronomeComponent} from './metronome/metronome.component';
import {ListComponent} from './list/list.component';

// import { Data } from './data';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    MetronomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES,
    ReactiveFormsModule
  ],
  providers: [AppService, EditorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
