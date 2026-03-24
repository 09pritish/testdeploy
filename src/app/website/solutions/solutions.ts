import { Component } from '@angular/core';

interface ServiceSpotlight {
  name: string;
  slug: string;
  headline: string;
  description: string;
  image: string;
  shortDescription: string;
}

@Component({
  selector: 'app-solutions',
  standalone: false,
  templateUrl: './solutions.html',
  styleUrl: './solutions.scss'
})
export class Solutions {
  readonly services: ServiceSpotlight[] = [
    {
      name: 'SD WAN Solution',
      slug: 'sd-wan-solution',
      headline: 'Modernize branch connectivity with policy-driven SD-WAN',
      description:
        'Enable application-aware routing, secure branch rollout, and resilient WAN performance for distributed teams and critical business operations.',
      image: 'assets/3.jpeg',
      shortDescription: 'Policy-driven SD-WAN architecture for secure branch connectivity and consistent WAN performance.'
    },
    {
      name: 'ACI Solution',
      slug: 'aci-solution',
      headline: 'Automate data center networking with application-centric policy',
      description:
        'Simplify provisioning, segmentation, and policy control with centralized ACI-driven operations for faster and safer data center change.',
      image: 'assets/7.jpeg',
      shortDescription: 'Application-centric fabric design that simplifies automation, segmentation, and policy management.'
    },
    {
      name: 'Network Consulting',
      slug: 'network-consulting',
      headline: 'Plan transformation with architecture-first advisory services',
      description:
        'Assess current environments, define target-state design, and build practical execution roadmaps aligned to business priorities.',
      image: 'assets/2.jpeg',
      shortDescription: 'Architecture-first advisory to build practical transformation roadmaps aligned to business goals.'
    },
    {
      name: 'Cloud Solution',
      slug: 'cloud-solution',
      headline: 'Build cloud foundations that scale with confidence',
      description:
        'Design and run secure cloud environments with the reliability, governance, and performance required for business-critical operations.',
      image: 'assets/8.jpeg',
      shortDescription: 'Secure and scalable cloud foundations built for governance, performance, and reliability.'
    },
    {
      name: 'Network Security Solution',
      slug: 'network-security-solution',
      headline: 'Protect critical assets with layered network security architecture',
      description:
        'Apply defense-led controls, segmentation, and continuous threat monitoring to reduce exposure and improve cyber resilience across enterprise networks.',
      image: 'assets/5.jpeg',
      shortDescription: 'Layered network security with segmentation and monitoring for stronger enterprise resilience.'
    },
    {
      name: 'IT Infrastructure',
      slug: 'server-storage-solution',
      headline: 'Build reliable core infrastructure for modern enterprise workloads',
      description:
        'Design resilient compute, storage, and connectivity foundations with lifecycle planning, governance, and operational consistency.',
      image: 'assets/4.jpeg',
      shortDescription: 'Core infrastructure design for resilient compute, storage, and enterprise connectivity.'
    },
    {
      name: 'Data Center Solution',
      slug: 'data-center-solution',
      headline: 'Design and optimize data centers for reliability at scale',
      description:
        'Build high-availability data center foundations with right-sized architecture, performance tuning, and lifecycle modernization support.',
      image: 'assets/7.jpeg',
      shortDescription: 'High-availability data center architecture tuned for scale, uptime, and lifecycle optimization.'
    },
    {
      name: 'Cyber Security',
      slug: 'cyber-security',
      headline: 'Strengthen enterprise cyber posture across users and infrastructure',
      description:
        'Deploy defense-in-depth security architecture with threat visibility, identity controls, and response-ready operating models.',
      image: 'assets/1.jpeg',
      shortDescription: 'Defense-in-depth cyber programs with visibility, identity controls, and response readiness.'
    },
    {
      name: 'Enterprise Network Solution',
      slug: 'enterprise-network-solution',
      headline: 'Scale enterprise networking for campus, branch, and remote teams',
      description:
        'Improve network reliability, secure access, and policy consistency with resilient enterprise architecture and operations.',
      image: 'assets/6.jpeg',
      shortDescription: 'Resilient enterprise networking for secure access across campus, branch, and remote teams.'
    },
    {
      name: 'Voice & Video Solution',
      slug: 'voice-video-solution',
      headline: 'Improve collaboration quality with secure voice and video platforms',
      description:
        'Create dependable, high-quality communication environments with integrated voice and video infrastructure for hybrid teams.',
      image: 'assets/9.jpeg',
      shortDescription: 'Secure voice and video platforms that improve collaboration quality across hybrid teams.'
    },
    {
      name: 'Mobility & Wireless Solution',
      slug: 'mobility-wireless-solution',
      headline: 'Deliver seamless mobility with enterprise-grade wireless design',
      description:
        'Enable stable high-performance wireless access across campuses, branches, and mobile-first operations.',
      image: 'assets/3.jpeg',
      shortDescription: 'Enterprise-grade mobility and wireless architecture for stable, high-performance access.'
    },
    {
      name: 'Server & Storage Solution',
      slug: 'server-storage-solution',
      headline: 'Deliver scalable compute and storage for enterprise workloads',
      description:
        'Deploy resilient server and storage platforms designed for performance, continuity, and long-term business growth.',
      image: 'assets/4.jpeg',
      shortDescription: 'Scalable server and storage platforms built for performance, continuity, and growth.'
    }
  ];

  activeServiceIndex = 0;

  get activeService(): ServiceSpotlight {
    return this.services[this.activeServiceIndex];
  }

  setActiveService(index: number): void {
    this.activeServiceIndex = index;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
