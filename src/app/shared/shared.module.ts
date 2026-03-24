import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterModule } from '@angular/router';
import { CompanyOverview } from './company-overview/company-overview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Header,
    Footer,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CompanyOverview,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    Header,
    Footer,
    CompanyOverview
  ]
})
export class SharedModule { }
