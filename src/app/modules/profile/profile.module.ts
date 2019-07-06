import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from '@angular/router';
import {profileRoutes} from './profile.routes';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule { }
