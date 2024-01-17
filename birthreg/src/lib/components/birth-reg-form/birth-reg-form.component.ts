import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swiper from 'swiper';
import { BirthRegService } from '../../services/birthreg.service';
import { AuthService } from 'auth/src/lib/services/auth.service';

@Component({
  selector: 'reg-angular-birth-reg-form',
  templateUrl: './birth-reg-form.component.html',
  styleUrl: './birth-reg-form.component.scss',
})
export class BirthRegFormComponent implements OnInit {
  private swiper: Swiper | undefined;
  currentSlide = 0;
  formData: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private birthRegService: BirthRegService,
    private authService: AuthService
  ) {
    this.formData = _fb.group({
      fatherFirstName: ['', Validators.required],
      fatherLastName: ['', Validators.required],
      motherFirstName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      childsFirstName: ['', Validators.required],
      childsLastName: ['', Validators.required],
      sex: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      dateOfRegistration: ['', Validators.required],
      addressAtTimeOfBirth: ['', Validators.required],
      district: ['', Validators.required],
      PermanentAddress: ['', Validators.required],
    });
  }

  initSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: false,
      initialSlide: this.currentSlide,
      autoHeight: true,
      speed: 500,
    });
  }

  slideNext() {
    if (this.swiper) {
      this.swiper.slideNext();
      this.currentSlide += 1;
    }
  }

  slidePrev() {
    if (this.swiper) {
      this.swiper.slidePrev();
      this.currentSlide -= 1;
    }
  }

  firstSlideNext() {
    const controls = [
      'fatherFirstName',
      'fatherLastName',
      'motherFirstName',
      'motherLastName',
    ];

    if (controls.every((control) => this.formData.get(control)?.valid)) {
      this.slideNext();
    } else {
      controls.forEach((control) => {
        if (this.formData.get(control)?.invalid) {
          this.formData.get(control)?.markAsTouched();
        }
      });
    }
  }

  onSubmit() {
    if (this.formData.valid) {
      const userId = this.authService.getCurrentUserId();
      if (typeof userId === 'number') {
        this.birthRegService
          .createBirthReg(userId, this.formData.value)
          .subscribe(
            (response) => {
              console.log('Success!', response);
              this.formData.reset();
              this.currentSlide = 0;
              this.swiper?.slideTo(this.currentSlide);
            },
            (error) => {
              console.error('Error!', error);
            }
          );
      } else {
        console.error('User ID is null, cannot submit form.');
      }
    } else {
      this.formData.markAllAsTouched();
    }
    this.formData.reset(this.formData.value);
  }

  ngOnInit(): void {
    this.initSwiper();
  }
}
