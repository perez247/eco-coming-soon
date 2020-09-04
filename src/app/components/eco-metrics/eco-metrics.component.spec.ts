import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoMetricsComponent } from './eco-metrics.component';

describe('EcoMetricsComponent', () => {
  let component: EcoMetricsComponent;
  let fixture: ComponentFixture<EcoMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
