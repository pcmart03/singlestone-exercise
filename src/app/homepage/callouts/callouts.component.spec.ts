import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalloutService } from '../callout.service';

import { CalloutsComponent } from './callouts.component';

describe('CalloutsComponent', () => {
  const calloutService = jasmine.createSpyObj('CalloutService', ['getCallouts'])
  let component: CalloutsComponent;
  let fixture: ComponentFixture<CalloutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutsComponent ],
      providers: [{provide: CalloutService, useValue: calloutService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
