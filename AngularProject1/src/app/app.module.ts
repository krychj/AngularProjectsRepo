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
import { ResourceService } from './services/ResourceService';

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
        ResourceService,
        {
        provide: APP_INITIALIZER,
        useFactory: resourceProviderFactory,
        deps: [ResourceService],
        multi: true
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function resourceProviderFactory(provider: ResourceService) {
    return () => provider.loadLocations();
}
