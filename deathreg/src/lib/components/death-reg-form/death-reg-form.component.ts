import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swiper from 'swiper';
import { DeathRegService } from '../../services/deathreg.service';
import { AuthService } from 'auth/src/lib/services/auth.service';

@Component({
  selector: 'reg-angular-death-reg-form',
  templateUrl: './death-reg-form.component.html',
  styleUrl: './death-reg-form.component.scss',
})
export class DeathRegFormComponent implements OnInit {
  private swiper: Swiper | undefined;
  currentSlide = 0;
  formData: FormGroup;
  birthRegId: string | null | undefined;
  route: any;

  constructor(
    private _fb: FormBuilder,
    private deathRegService: DeathRegService,
    private authService: AuthService
  ) {
    this.formData = _fb.group({
      fatherFirstName: ['', Validators.required],
      fatherLastName: ['', Validators.required],
      motherFirstName: ['', Validators.required],
      motherLastName: ['', Validators.required],
      deceasedFirstName: ['', Validators.required],
      deceasedLastName: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      sex: ['', Validators.required],
      addressAtTimeOfDeath: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      localArea: ['', Validators.required],
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

  ngOnInit(): void {
    this.initSwiper();
    this.route.paramMap.subscribe(
      (params: { get: (arg0: string) => string | null | undefined }) => {
        this.birthRegId = params.get('birth_reg_id');
      }
    );
    this.initSwiper();
  }

  onSubmit() {
    if (this.formData.valid) {
      const userId = this.authService.getCurrentUserId();
      // const birthRegId = /* You need to provide a way to get the birthRegId */;

      if (typeof userId === 'number' && typeof this.birthRegId === 'number') {
        this.deathRegService
          .createDeathReg(userId, this.birthRegId, this.formData.value)
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
        console.error('Form is invalid or Birth Registration ID is missing.');
        this.formData.markAllAsTouched();
      }
    } else {
      this.formData.markAllAsTouched();
    }
    this.formData.reset(this.formData.value);
  }
}
