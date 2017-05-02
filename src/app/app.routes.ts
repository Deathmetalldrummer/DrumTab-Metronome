import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ListComponent } from './list/list.component';
import { MetronomeComponent } from './metronome/metronome.component';

const appRoutes: Routes = [
  {path: 'editor', component: EditorComponent},
  {path: 'list', component: ListComponent},
  {path: 'metronome', component: MetronomeComponent}
];
export const ROUTES = RouterModule.forRoot(appRoutes);
