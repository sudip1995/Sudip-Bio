import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {profileRoutes} from './profile.routes';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { SongsComponent } from './components/songs/songs.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {SharedModule} from '../../shared/shared.module';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    BlogComponent,
    SongsComponent,
    LiteratureComponent,
    ContactComponent,
    HelpComponent,
    LoginComponent,
    RegisterComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
