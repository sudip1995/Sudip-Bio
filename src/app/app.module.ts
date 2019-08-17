import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {ProfileModule} from './modules/profile/profile.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtModule, JwtModuleOptions} from '@auth0/angular-jwt';
//
// const JwtModuleOptions: JwtModuleOptions = {
//   config: {
//     tokenGetter: yourTokenGetter,
//     whitelistedDomains: yourWhitelistedDomains
//   }
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
    // JwtModule.forRoot(JWT_Module_Options),
    ProfileModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
