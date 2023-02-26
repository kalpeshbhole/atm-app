import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmDetailsComponent } from './atm-details.component';

describe('AtmDetailsComponent', () => {
  let component: AtmDetailsComponent;
  let fixture: ComponentFixture<AtmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
