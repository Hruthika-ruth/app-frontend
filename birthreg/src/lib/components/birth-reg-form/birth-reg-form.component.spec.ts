import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthRegFormComponent } from './birth-reg-form.component';

describe('BirthRegFormComponent', () => {
  let component: BirthRegFormComponent;
  let fixture: ComponentFixture<BirthRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirthRegFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BirthRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
