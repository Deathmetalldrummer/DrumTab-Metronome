import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { ListComponent } from './List/list.component';
import { EditorComponent } from './Editor/editor.component';
import { MetronomeComponent } from './Metronome/metronome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditorComponent,
    MetronomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
