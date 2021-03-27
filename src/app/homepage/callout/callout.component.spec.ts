import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Pipe, PipeTransform} from '@angular/core';
import { CalloutComponent } from './callout.component';


@Pipe({name: 'formatStep'})
class MockPipe implements PipeTransform {
    transform(value: string): string {
        return value;
    }
}
describe('CalloutComponent', () => {
  let component: CalloutComponent;
  let fixture: ComponentFixture<CalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalloutComponent, MockPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutComponent);
    component = fixture.componentInstance;
    component.content = {
      "stepNumber": "2",
      "title": "Request A Delivery",
      "body": "Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.",
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
