import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommingSoonComponent } from './components/comming-soon/comming-soon.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EcoMetricsComponent } from './components/eco-metrics/eco-metrics.component';


const routes: Routes = [
  {
    path: '',
    component: CommingSoonComponent
  },

  {
    path: 'about',
    component: AboutUsComponent
  },

  {
    path: 'metric',
    component: EcoMetricsComponent
  },

  // If no url matched then show page not found
  {
    path: '**',
    component: CommingSoonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
