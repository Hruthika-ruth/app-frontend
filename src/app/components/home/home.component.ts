import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from 'features/src/lib/components/navbar/navbar.component';
import { FooterComponent } from 'features/src/lib/components/footer/footer.component';

@Component({
  selector: 'reg-angular-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'reg-angular';
  applyForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormControl(''),
    message: new FormControl(''),
  });

  get email() {
    return this.applyForm.get('email');
  }
  onSubmit() {
    if (this.applyForm.valid) {
      console.log('Form Submitted!');
      this.applyForm.reset();
    }
  }
}
