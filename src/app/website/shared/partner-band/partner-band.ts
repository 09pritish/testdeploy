import { Component } from '@angular/core';
import { HOMEPAGE_PARTNER_LOGOS } from '../site-constants';

@Component({
  selector: 'app-partner-band',
  standalone: false,
  templateUrl: './partner-band.html',
  styleUrl: './partner-band.scss'
})
export class PartnerBand {
  readonly logos = HOMEPAGE_PARTNER_LOGOS;
}
