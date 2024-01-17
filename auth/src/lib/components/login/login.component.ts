import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from 'features/src/lib/components/navbar/navbar.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'reg-angular-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  title = 'reg-angular';
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Form submitted', this.loginForm.value);
    if (this.loginForm.invalid) {
      alert('Please ensure all fields are filled out correctly.');
      return;
    }

    const username = this.loginForm.value.username!;
    const password = this.loginForm.value.password!;

    if (typeof username === 'string' && typeof password === 'string') {
      const loginPayload = { username, password };

      this.authService.login(loginPayload).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login failed. Please try again.');
        },
      });
    } else {
      console.error('Username or password is missing!');
      alert('Username or password is missing!');
    }
  }
}
