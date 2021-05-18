import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { APP_INITIALIZER } from '@angular/core';
import { InitializerService } from './services/InitializerService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
        InitializerService,
        {
        provide: APP_INITIALIZER,
        useFactory: initServices,
        deps: [InitializerService],
        multi: true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// tslint:disable-next-line: typedef
export function initServices(initService: InitializerService) {
    return () => initService.initialize();
}
