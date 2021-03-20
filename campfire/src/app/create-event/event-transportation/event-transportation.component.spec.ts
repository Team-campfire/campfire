import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTransportationComponent } from './event-transportation.component';

describe('EventTransportationComponent', () => {
  let component: EventTransportationComponent;
  let fixture: ComponentFixture<EventTransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventTransportationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
