import { Component } from '@angular/core';

interface ServiceCard {
  tag: string;
  title: string;
  intro: string;
  image: string;
  cta: string;
  href: string;
}

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly serviceCards: ServiceCard[] = [
    {
      tag: 'IT SERVICES',
      title: 'IT services for day-to-day operations and reliability',
      intro:
        'Operational IT support models that improve uptime, service quality, and delivery consistency across enterprise environments.',
      image: 'assets/ces-tech-team.webp',
      cta: 'See more',
      href: '/services/it-services',
    },
    {
      tag: 'NETWORK AUDIT',
      title: 'Network audit and readiness assessment',
      intro:
        'Assess architecture, performance, and security posture with clear recommendations for remediation and optimization.',
      image: 'assets/awards1.jpg',
      cta: 'See more',
      href: '/services/network-audit',
    },
    {
      tag: 'NETWORK IMPLEMENTATION',
      title: 'Network implementation and rollout services',
      intro:
        'Plan and execute LAN, WAN, branch, and campus deployments with structured project governance and quality controls.',
      image: 'assets/ces-tech-team.webp',
      cta: 'See more',
      href: '/services/network-implementation',
    },
    {
      tag: 'MANAGED SERVICES',
      title: 'Managed services with SLA-led operations',
      intro:
        '24x7 monitoring, incident handling, and lifecycle support to keep your core infrastructure secure and stable.',
      image: 'assets/server-room.jpg',
      cta: 'See more',
      href: '/services/managed-services',
    },
    {
      tag: 'VAPT',
      title: 'VAPT and continuous hardening services',
      intro:
        'Identify vulnerabilities, prioritize remediation, and improve security posture through recurring validation cycles.',
      image: 'assets/certifications1.jpg',
      cta: 'See more',
      href: '/services/vapt',
    },
    {
      tag: 'ANNUAL MAINTENANCE CONTRACT',
      title: 'Annual maintenance contract support programs',
      intro:
        'Predictable maintenance coverage for enterprise systems with scheduled preventive checks and rapid support response.',
      image: 'assets/yearbook1.jpg',
      cta: 'See more',
      href: '/services/annual-maintenance-contract',
    },
    {
      tag: 'RENTAL',
      title: 'Rental services for short-term infrastructure needs',
      intro:
        'Flexible rental models for networking and IT equipment to support projects, events, and temporary capacity demands.',
      image: 'assets/awards1.jpg',
      cta: 'See more',
      href: '/services/rental',
    },
  ];
}
