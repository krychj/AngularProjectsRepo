import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
    { path: 'demo/angular/home', component: HomeComponent },
    { path: 'demo/angular/stats', component: StatsComponent },
    { path: '', redirectTo: 'demo/angular/home', pathMatch: 'full' },
    { path: '**', redirectTo: 'demo/angular/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
