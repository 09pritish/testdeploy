import { Component } from '@angular/core';
import { CERTIFICATION_BADGES } from '../site-constants';

@Component({
  selector: 'app-awards-strip',
  standalone: false,
  templateUrl: './awards-strip.html',
  styleUrl: './awards-strip.scss'
})
export class AwardsStrip {
  readonly badges = CERTIFICATION_BADGES;
}
