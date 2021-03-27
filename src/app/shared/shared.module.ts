import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteLogoComponent } from './site-logo/site-logo.component';
import { FormatStepPipe } from './format-step.pipe';



@NgModule({
  declarations: [SiteHeaderComponent, SiteLogoComponent, FormatStepPipe],
  imports: [
    CommonModule
  ],
  exports: [SiteHeaderComponent, FormatStepPipe]
})
export class SharedModule { }
