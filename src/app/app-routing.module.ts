import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import {PricingComponent} from './pricing/pricing.component';
import {FeaturesComponent} from './features/features.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'Pricing', component: PricingComponent },
  { path: 'Features', component: FeaturesComponent },
  {path: 'Home', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
