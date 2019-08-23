import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnsureModuleLoadedOnceGuard} from '../shared/EnsureModuleLoadedOnceGuard';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './components/services/auth.service';
import {AuthGuard} from './auth.guard';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent],
  exports: [
    LayoutComponent,
    HttpClientModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    FlexModule,
    HttpClientModule
  ],
  providers: []
})
export class CoreModule extends EnsureModuleLoadedOnceGuard { // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
