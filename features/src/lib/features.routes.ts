import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const FEATURES_ROUTES: Route[] = [
  {
    path: '',
    component: NavbarComponent,
  },
  {
    path: '',
    component: FooterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(FEATURES_ROUTES)],
  exports: [RouterModule],
})
export class FeaturesRoutes {}
