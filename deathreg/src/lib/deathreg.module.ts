import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeathregComponent } from './deathreg/deathreg.component';
import { DeathRegRoutes } from './deathreg.routes';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MaterialModule } from '@material';
import { ReactiveFormsModule } from '@angular/forms';
import { DeathRegFormComponent } from './components/death-reg-form/death-reg-form.component';

@NgModule({
  imports: [CommonModule, DeathRegRoutes, MaterialModule, ReactiveFormsModule],
  declarations: [DeathregComponent, DeathRegFormComponent],
})
export class DeathRegModule {}
