import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { AppComponent } from './app.component';
import { MetronomeComponent } from './metronome/metronome.component';

const appRoutes: Routes = [
  {path: 'editor/:id', component: EditorComponent},
  {path: 'metronome/:id', component: MetronomeComponent}
  // {path: '', component: AppComponent}
];
export const ROUTES = RouterModule.forRoot(appRoutes);
