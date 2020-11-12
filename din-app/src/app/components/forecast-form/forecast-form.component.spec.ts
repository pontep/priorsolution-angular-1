import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastFormComponent } from './forecast-form.component';

describe('ForecastFormComponent', () => {
  let component: ForecastFormComponent;
  let fixture: ComponentFixture<ForecastFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
