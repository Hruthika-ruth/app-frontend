import { Route, RouterModule } from '@angular/router';
import { BirthregComponent } from './birthreg/birthreg.component';
import { NgModule } from '@angular/core';

const BIRTH_REG_ROUTES: Route[] = [
  {
    path: '',
    component: BirthregComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(BIRTH_REG_ROUTES)],
  exports: [RouterModule],
})
export class BirthRegRoutes {}
