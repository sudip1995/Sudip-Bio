import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BlogComponent} from './components/blog/blog.component';
import {SongsComponent} from './components/songs/songs.component';
import {LiteratureComponent} from './components/literature/literature.component';
import {ContactComponent} from './components/contact/contact.component';
import {HelpComponent} from './components/help/help.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

export const profileRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'songs',
    component: SongsComponent
  },
  {
    path: 'literature',
    component: LiteratureComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
