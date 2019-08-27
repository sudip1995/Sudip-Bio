import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {profileRoutes} from './profile.routes';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { SongsComponent } from './components/songs/songs.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {SharedModule} from '../../shared/shared.module';
import {CookieService} from 'ngx-cookie-service';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    SongsComponent,
    LiteratureComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ContentComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(profileRoutes)
  ],
  providers: [CookieService]
})
export class ProfileModule { }
