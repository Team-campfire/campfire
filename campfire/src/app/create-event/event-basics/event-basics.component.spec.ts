import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBasicsComponent } from './event-basics.component';

describe('EventBasicsComponent', () => {
  let component: EventBasicsComponent;
  let fixture: ComponentFixture<EventBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
