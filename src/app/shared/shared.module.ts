import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { CompanyOverview } from './company-overview/company-overview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AwardsStrip } from '../website/shared/awards-strip/awards-strip';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    Header,
    Footer,
    AwardsStrip
  ],
  imports: [
    CommonModule,
    RouterModule,
    CompanyOverview,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    Header,
    Footer,
    CompanyOverview,
    AwardsStrip
  ]
})
export class SharedModule { }