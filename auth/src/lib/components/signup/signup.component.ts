import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NavbarComponent } from 'features/src/lib/components/navbar/navbar.component';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'reg-angular-signup',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  title = 'reg-angular';
  signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    confirmPassword: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get email() {
    return this.signupForm.get('email');
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      alert('Please ensure all fields are filled out correctly.');
      return;
    }

    const { confirmPassword, ...signupData } = this.signupForm.value;

    if (signupData.password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Ensure that the values are strings to satisfy TypeScript's type checking
    const userData = {
      username: signupData.username as string,
      email: signupData.email as string,
      password: signupData.password as string,
    };

    console.log('Signup payload:', userData);

    this.authService.signUp(userData).subscribe({
      next: (response) => {
        console.log('Sign up successful', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Sign up failed', error);
        alert('Sign up failed. Please try again.');
      },
    });
  }
}
