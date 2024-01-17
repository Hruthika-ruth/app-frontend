import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeathRegFormComponent } from './death-reg-form.component';

describe('DeathRegFormComponent', () => {
  let component: DeathRegFormComponent;
  let fixture: ComponentFixture<DeathRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathRegFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeathRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
