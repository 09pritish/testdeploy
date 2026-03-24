import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVICE_DETAILS } from './service-details.data';

@Component({
  selector: 'app-service-detail',
  standalone: false,
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss'
})
export class ServiceDetail {
  readonly services = SERVICE_DETAILS;
  readonly fallbackImage = 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1800&q=80';
  readonly whyChooseItems = [
    { image: 'assets/why-choose/satisfaction gurantee.png', title: 'Satisfaction Guarantee' },
    { image: 'assets/why-choose/satisfied clients.png', title: 'Satisfied Clients' },
    { image: 'assets/why-choose/future proofing.png', title: 'Future-Proofing' },
    { image: 'assets/why-choose/security.png', title: 'Security' },
    { image: 'assets/why-choose/global reach.png', title: 'Global Reach' },
    { image: 'assets/why-choose/customer support.png', title: '24x7 Customer Support' },
    { image: 'assets/why-choose/quality.png', title: 'Best Quality Service' },
    { image: 'assets/why-choose/connect.png', title: 'Easy to Connect' },
    { image: 'assets/why-choose/affordable.png', title: 'Affordable Cost' },
    { image: 'assets/why-choose/scalability.png', title: 'Scalability' },
    { image: 'assets/why-choose/latency.png', title: 'Low Latency' },
    { image: 'assets/why-choose/reliability.png', title: 'Reliability' }
  ];

  constructor(private route: ActivatedRoute) {}

  get service() {
    const slug = this.route.snapshot.paramMap.get('slug');
    return this.services.find((item) => item.slug === slug) || this.services[0];
  }

  get advantages() {
    return this.service.features.slice(0, 5);
  }


  get processSteps() {
    return this.service.features;
  }

  useFallbackImage(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && img.src.indexOf(this.fallbackImage) === -1) {
      img.onerror = null;
      img.src = this.fallbackImage;
    }
  }
  get sharePageUrl(): string {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return `/services/${this.service.slug}`;
  }

  get shareCaption(): string {
    return `${this.service.title}: ${this.service.summary} Built for secure, scalable enterprise operations with CES experts.`;
  }

  shareToPlatform(platform: 'linkedin' | 'facebook'): void {
    const pageUrl = encodeURIComponent(this.sharePageUrl);
    const quote = encodeURIComponent(this.shareCaption);
    const title = encodeURIComponent(this.service.title);
    const shareUrl =
      platform === 'facebook'
        ? `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${quote}`
        : `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${title}&summary=${quote}`;

    if (typeof window !== 'undefined') {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  }

}

