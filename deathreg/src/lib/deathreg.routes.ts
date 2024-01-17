import { NgModule } from '@angular/core';
import { DeathregComponent } from './deathreg/deathreg.component';
import { Route, RouterModule } from '@angular/router';

const DEATH_REG_ROUTES: Route[] = [{ path: '', component: DeathregComponent }];
@NgModule({
  imports: [RouterModule.forChild(DEATH_REG_ROUTES)],
  exports: [RouterModule],
})
export class DeathRegRoutes {}
