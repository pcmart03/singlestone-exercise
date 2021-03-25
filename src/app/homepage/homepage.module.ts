import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { HeroContentComponent } from './hero-content/hero-content.component';



@NgModule({
  declarations: [HomeComponent, HeroComponent, HeroContentComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomepageModule { }
