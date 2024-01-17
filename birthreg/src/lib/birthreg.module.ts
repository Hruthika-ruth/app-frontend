import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BirthRegRoutes } from './birthreg.routes';
import { BirthregComponent } from './birthreg/birthreg.component';
import { BirthRegFormComponent } from './components/birth-reg-form/birth-reg-form.component';
import { MaterialModule } from '@material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'auth/src/lib/services/auth.service';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, BirthRegRoutes],
  declarations: [BirthregComponent, BirthRegFormComponent],
  providers: [AuthService],
})
export class BirthRegModule {}
