import {Routes} from '@angular/router';
import {HomeComponent} from './modules/profile/components/home/home.component';
import {EditorComponent} from './shared/components/editor/editor.component';
import {AuthGuard} from './core/auth.guard';

export const appRoutes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'home',
    component: HomeComponent
  },
  {
    path: 'write',
    component: EditorComponent,
    canActivate: [AuthGuard]
  },
  {
    path      : '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
