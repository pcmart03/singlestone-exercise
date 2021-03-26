import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {HeroContentService} from '../hero-content.service';

@Component({
  selector: 'app-hero-content',
  templateUrl: './hero-content.component.html',
  styleUrls: ['./hero-content.component.scss']
})
export class HeroContentComponent implements OnInit {
  public content$: Observable<any>;
  
  constructor(private contentService: HeroContentService) { }

  ngOnInit(): void {
    this.content$ = this.contentService.getHeroText();
  }

}
