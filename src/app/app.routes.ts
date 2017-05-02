import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './Editor/editor.component';
import { ListComponent } from './List/list.component';
import { MetronomeComponent } from './Metronome/metronome.component';

const appRoutes: Routes = [
  {path: 'editor', component: EditorComponent},
  {path: 'list', component: ListComponent},
  {path: 'metronome', component: MetronomeComponent}
];
export const ROUTES = RouterModule.forRoot(appRoutes);
