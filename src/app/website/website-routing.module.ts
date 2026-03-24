import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing } from './landing/landing';
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
import { Careers } from './careers/careers';

const routes: Routes = [
  {
    path: '',
    component: Landing,
  },
  {
    path: 'achievements',
    component: Achievements,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'about-us.html',
    component: AboutUs,
  },
  {
    path: 'partners',
    component: Partners,
  },
  {
    path: 'solutions',
    component: Solutions,
  },
  {
    path: 'solutions/:slug',
    component: SolutionDetail,
  },
  {
    path: 'services',
    component: Services,
  },
  {
    path: 'services/:slug',
    component: ServiceDetail
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },
  {
    path: 'blogs',
    component: Blogs,
  },
  {
    path: 'blogs/:slug',
    component: BlogDetail,
  },
  {
    path: 'company-profile',
    component: CompanyProfile
  },
  {
    path: 'case-studies',
    redirectTo: 'case-studies/delhi-metro',
    pathMatch: 'full'
  },
  {
    path: 'case-studies/:slug',
    component: CaseStudy
  },
  {
    path: 'careers',
    component: Careers
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
