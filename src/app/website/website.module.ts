import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { WebsiteRoutingModule } from './website-routing.module';
import { Landing } from './landing/landing';
import { SharedModule } from '../shared/shared.module';
import { Achievements } from './achievements/achievements';
import { AboutUs } from './about-us/about-us';
import { Partners } from './partners/partners';
import { Solutions } from './solutions/solutions';
import { SolutionDetail } from './solutions/solution-detail';
import { Services } from './services/services';
import { ServiceDetail } from './services/service-detail';
import { ContactUs } from './contact-us/contact-us';
import { Blogs } from './blogs/blogs';
import { BlogDetail } from './blogs/blog-detail';
import { CompanyProfile } from './company-profile/company-profile';
import { CaseStudy } from './case-study/case-study';
import { PartnerBand } from './shared/partner-band/partner-band';
import { AwardsStrip } from './shared/awards-strip/awards-strip';
import { Careers } from './careers/careers';

@NgModule({
  declarations: [
    Landing,
    Achievements,
    AboutUs,
    Partners,
    Solutions,
    SolutionDetail,
    Services,
    ServiceDetail,
    ContactUs,
    Blogs,
    BlogDetail,
    CompanyProfile,
    CaseStudy,
    Careers,
    PartnerBand,
    AwardsStrip
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
