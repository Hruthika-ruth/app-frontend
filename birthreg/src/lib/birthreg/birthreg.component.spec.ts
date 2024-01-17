import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirthregComponent } from './birthreg.component';

describe('BirthregComponent', () => {
  let component: BirthregComponent;
  let fixture: ComponentFixture<BirthregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthregComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BirthregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
