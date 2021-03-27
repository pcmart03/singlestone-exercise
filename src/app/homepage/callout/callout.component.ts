import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-callout',
  templateUrl: './callout.component.html',
  styleUrls: ['./callout.component.scss']
})
export class CalloutComponent implements OnInit {
  @Input() content: any;
  constructor() { }

  ngOnInit(): void {
  }

}
