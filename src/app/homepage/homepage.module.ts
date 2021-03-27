import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { HeroContentComponent } from './hero-content/hero-content.component';
import { CalloutsComponent } from './callouts/callouts.component';
import { CalloutComponent } from './callout/callout.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, HeroContentComponent, CalloutsComponent, CalloutComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomepageModule { }
