import { Component, ElementRef, ViewChild } from '@angular/core';

interface PartnerCard {
  name: string;
  category: string;
  summary: string;
  image: string;
}

interface TrustedBrand {
  id: string;
  label: string;
  logo: string;
  hasCaseStudy?: boolean;
  caseSlug?: string;
  quote?: string;
  author?: string;
}

@Component({
  selector: 'app-partners',
  standalone: false,
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
  @ViewChild('trustSection') trustSection?: ElementRef<HTMLElement>;

  readonly partnerCards: PartnerCard[] = [
    {
      name: 'Cisco',
      category: 'Networking & Security',
      summary: 'Enterprise-grade routing, switching, and security collaboration for scalable infrastructure delivery.',
      image: 'assets/1.jpeg'
    },
    {
      name: 'Fortinet',
      category: 'Cybersecurity',
      summary: 'Unified security posture across branch, cloud, and data center with high-performance threat protection.',
      image: 'assets/2.jpeg'
    },
    {
      name: 'Palo Alto Networks',
      category: 'Zero Trust Security',
      summary: 'Advanced security operations and policy-driven defense for modern distributed enterprise environments.',
      image: 'assets/3.jpeg'
    },
    {
      name: 'Aruba',
      category: 'Wireless & Edge',
      summary: 'Secure wireless access and edge-first network experiences for campuses, branches, and hybrid work.',
      image: 'assets/4.jpeg'
    },
    {
      name: 'Delhi Metro',
      category: 'Cloud & Virtualization',
      summary: 'Hybrid cloud modernization with resilient virtualization, observability, and operational governance.',
      image: 'assets/5.jpeg'
    }
  ];

  activePartnerIndex = 0;
  expandedBrandId: string | null = null;
  casePopoverStyle: Record<string, string> = {};
  private closeTimer: ReturnType<typeof setTimeout> | null = null;

  readonly trustedBrands: TrustedBrand[] = [
    { id: 'cisco', label: 'Cisco', logo: 'assets/cisco.png' },
    {
      id: 'fortinet',
      label: 'Fortinet',
      logo: 'assets/fortinet.png',
      hasCaseStudy: true,
      caseSlug: 'fortinet',
      quote: '"CES strengthened our enterprise security rollout with better policy consistency and operational control."',
      author: 'Enterprise Security Lead, Fortinet Program'
    },
    { id: 'vodafone', label: 'Vodafone', logo: 'assets/vodafone.png' },
    {
      id: 'delhi-metro',
      label: 'Delhi Metro',
      logo: 'assets/delhimetro.png',
      hasCaseStudy: true,
      caseSlug: 'delhi-metro',
      quote: '"CES helped improve network stability and response time across distributed station environments."',
      author: 'Head of Network Systems, Metro Operations'
    },
    { id: 'aruba', label: 'Aruba', logo: 'assets/aruba.png' },
    { id: 'airtel', label: 'Airtel', logo: 'assets/airtel.png' },
    {
      id: 'palo-alto',
      label: 'Palo Alto',
      logo: 'assets/paloalto.png',
      hasCaseStudy: true,
      caseSlug: 'palo-alto',
      quote: '"Unified security governance improved threat response readiness and reduced operational risk."',
      author: 'Director of Cyber Defense Programs'
    },
    { id: 'hitachi', label: 'Hitachi', logo: 'assets/hitachi.png' },
    { id: 'jsw', label: 'JSW', logo: 'assets/jsw.png' },
    { id: 'extreme', label: 'Extreme', logo: 'assets/extreme.png' },
    { id: 'f5', label: 'F5', logo: 'assets/f5.png' },
    { id: 'nic', label: 'NIC', logo: 'assets/nic.png' }
  ];

  prevCard(): void {
    this.activePartnerIndex =
      (this.activePartnerIndex - 1 + this.partnerCards.length) % this.partnerCards.length;
  }

  nextCard(): void {
    this.activePartnerIndex = (this.activePartnerIndex + 1) % this.partnerCards.length;
  }

  selectCard(index: number): void {
    this.activePartnerIndex = index;
  }

  getRelativeOffset(index: number): number {
    const length = this.partnerCards.length;
    let diff = index - this.activePartnerIndex;
    if (diff > length / 2) diff -= length;
    if (diff < -length / 2) diff += length;
    return diff;
  }

  isActive(index: number): boolean {
    return this.getRelativeOffset(index) === 0;
  }

  isSide(index: number): boolean {
    return Math.abs(this.getRelativeOffset(index)) === 1;
  }

  toggleTrustedCase(event: Event, brand: TrustedBrand): void {
    if (!brand.hasCaseStudy) return;

    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;

    if (this.expandedBrandId === brand.id) {
      this.expandedBrandId = null;
      return;
    }

    this.expandedBrandId = brand.id;
    this.updateCasePopoverPosition(target);
  }

  onCaseTriggerEnter(event: Event, brand: TrustedBrand): void {
    if (!brand.hasCaseStudy) return;
    this.cancelCaseClose();

    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;

    this.expandedBrandId = brand.id;
    this.updateCasePopoverPosition(target);
  }

  onCaseTriggerLeave(): void {
    this.scheduleCaseClose();
  }

  onCasePopoverEnter(): void {
    this.cancelCaseClose();
  }

  onCasePopoverLeave(): void {
    this.scheduleCaseClose();
  }

  get expandedTrustedBrand(): TrustedBrand | undefined {
    return this.trustedBrands.find((brand) => brand.id === this.expandedBrandId && brand.hasCaseStudy);
  }

  private updateCasePopoverPosition(trigger: HTMLElement): void {
    const section = this.trustSection?.nativeElement;
    if (!section) return;

    const sectionRect = section.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const sectionWidth = sectionRect.width;
    const cardWidth = Math.min(720, Math.max(280, sectionWidth - 24));
    const center = triggerRect.left - sectionRect.left + (triggerRect.width / 2);
    const left = Math.max(12, Math.min(center - (cardWidth / 2), sectionWidth - cardWidth - 12));
    const top = (triggerRect.bottom - sectionRect.top) + 14;

    this.casePopoverStyle = {
      left: `${left}px`,
      top: `${top}px`,
      width: `${cardWidth}px`
    };
  }

  private scheduleCaseClose(): void {
    this.cancelCaseClose();
    this.closeTimer = setTimeout(() => {
      this.expandedBrandId = null;
    }, 140);
  }

  private cancelCaseClose(): void {
    if (!this.closeTimer) return;
    clearTimeout(this.closeTimer);
    this.closeTimer = null;
  }
}
