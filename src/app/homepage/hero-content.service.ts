import { Injectable } from '@angular/core';

// I'll make the service asynchronous now incase we want to access this data through an API one day. 
import { of, Observable } from 'rxjs';

/**
 * I know for something this small, I might get away
 * with hardcoding the content into the html, but I have 
 * never regretted sticking to separation of concerns.
 */
const heroText = {
  headline: "New Games & Accessories",
  largeLine1: "Monthly packages.",
  largeLine2: "Excitement delivered daily.",
  blurb: "What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep \&mdash; every month.",
  callToAction: "Get started"
}


@Injectable({
  providedIn: 'root'
})
export class HeroContentService {

  constructor() { }
  
  getHeroText(): Observable<any> {
    return of(heroText);
  }
}
