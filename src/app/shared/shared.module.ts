import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLogoComponent } from './site-logo/site-logo.component';



@NgModule({
  declarations: [SiteHeaderComponent, SiteLogoComponent],
  imports: [
    CommonModule
  ],
  exports: [SiteHeaderComponent]
})
export class SharedModule { }
