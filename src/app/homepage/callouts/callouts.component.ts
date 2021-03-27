import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalloutService } from "../callout.service";

@Component({
  selector: 'app-callouts',
  templateUrl: './callouts.component.html',
  styleUrls: ['./callouts.component.scss']
})
export class CalloutsComponent implements OnInit {
  callouts$: Observable<any[]>

  constructor(private calloutService: CalloutService) { }

  ngOnInit(): void {
    this.callouts$ = this.calloutService.getCallouts();
  }

}
