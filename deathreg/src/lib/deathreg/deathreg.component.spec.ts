import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeathregComponent } from './deathreg.component';

describe('DeathregComponent', () => {
  let component: DeathregComponent;
  let fixture: ComponentFixture<DeathregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeathregComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeathregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
