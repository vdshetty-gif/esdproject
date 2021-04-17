import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvideosComponent } from './mvideos.component';

describe('MvideosComponent', () => {
  let component: MvideosComponent;
  let fixture: ComponentFixture<MvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
