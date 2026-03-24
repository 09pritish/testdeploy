import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

const CAREERS_URL = '/careers';

type FooterLink = { label: string; href: string };
type FooterGroup = { id: string; title: string; links: FooterLink[] };
type FooterLocation = { title: string; address: string };

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  columns: FooterGroup[][] = [
    [
      {
        id: 'solutions',
        title: 'Solutions',
        links: [
          { label: 'All Solutions', href: '/solutions' },
          { label: 'SD WAN Solution', href: '/solutions/sd-wan-solution' },
          { label: 'Cloud Solution', href: '/solutions/cloud-solution' },
          { label: 'Network Security Solution', href: '/solutions/network-security-solution' },
          { label: 'Enterprise Network Solution', href: '/solutions/enterprise-network-solution' },
          { label: 'IT Infrastructure', href: '/solutions/server-storage-solution' },
          { label: 'Data Center Solution', href: '/solutions/data-center-solution' },
          { label: 'Server & Storage Solution', href: '/solutions/server-storage-solution' },
          { label: 'ACI Solution', href: '/solutions/aci-solution' },
          { label: 'Cyber Security', href: '/solutions/cyber-security' },
          { label: 'Network Consulting', href: '/solutions/network-consulting' },
          { label: 'Voice & Video Solution', href: '/solutions/voice-video-solution' },
          { label: 'Mobility & Wireless Solution', href: '/solutions/mobility-wireless-solution' }
        ]
      }
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { label: 'All Services', href: '/services' },
          { label: 'IT Services', href: '/services/it-services' },
          { label: 'Managed Services', href: '/services/managed-services' },
          { label: 'Annual Maintenance Contract', href: '/services/annual-maintenance-contract' },
          { label: 'Network Audit', href: '/services/network-audit' },
          { label: 'Network Implementation', href: '/services/network-implementation' },
          { label: 'Rental', href: '/services/rental' },
          { label: 'VAPT', href: '/services/vapt' }
        ]
      },
      {
        id: 'support',
        title: 'Support',
        links: [
          { label: 'Contact Support', href: '/contact-us' },
          { label: 'Customer Portal', href: '/contact-us' },
          { label: 'Request a Quote', href: '/contact-us' },
          { label: 'Contact Team', href: '/contact-us' }
        ]
      }
    ],
    [
      {
        id: 'training',
        title: 'Training',
        links: [
          { label: 'Corporate Trainings', href: '/services' },
          { label: 'Onsite Technical Workshops', href: '/services/network-implementation' },
          { label: 'Partner Enablement', href: '/partners' },
          { label: 'Certification Tracks', href: '/achievements' }
        ]
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { label: 'About Us', href: '/about-us' },
          { label: 'Partners', href: '/partners' },
          { label: 'Contact Us', href: '/contact-us' },
          { label: 'Careers', href: CAREERS_URL }
        ]
      }
    ],
    [
      {
        id: 'resources',
        title: 'Resources',
        links: [
          { label: 'Blog', href: '/blogs' },
          { label: 'Case Studies', href: '/achievements' },
          { label: 'Research & Insights', href: '/blogs' },
          { label: 'Events & Webinars', href: '/achievements' }
        ]
      },
      {
        id: 'quick-links',
        title: 'Quick Links',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Explore Solutions', href: '/solutions' },
          { label: 'Explore Services', href: '/services' },
          { label: 'Get in Touch', href: '/contact-us' }
        ]
      }
    ]
  ];
  locations: FooterLocation[] = [
    {
      title: 'Noida Headquarters',
      address: 'Assotech Business Cresterra, Tower-2, 9th Floor, Unit 901-902, Sector-135, Noida 201304, Uttar Pradesh'
    },
    {
      title: 'Noida Office',
      address: '4th Floor Bhagwan Sahay Complex, Sector-15, Noida 201301, Uttar Pradesh'
    },
    {
      title: 'Gurugram Office',
      address: '10th-11th Floor, Paras Trinity, Golf Course Ext Rd, Sector 63, Gurugram, Haryana 122011'
    }
  ];

  isMobile = false;
  private expanded = new Set<string>();

  constructor(private router: Router) {
    this.columns = this.columns.map((column) =>
      column.map((group) => ({
        ...group,
        links: group.links.map((link) => ({
          ...link,
          href: this.mapCesUrlToLocal(link.href),
        })),
      })),
    );

    this.syncViewportState();
  }

  @HostListener('window:resize')
  onResize() {
    this.syncViewportState();
  }

  isExpanded(id: string): boolean {
    return !this.isMobile || this.expanded.has(id);
  }

  toggleGroup(id: string) {
    if (!this.isMobile) return;

    if (this.expanded.has(id)) {
      this.expanded.delete(id);
      return;
    }

    this.expanded.add(id);
  }

  async openLocation(location: FooterLocation) {
    const copiedText = `${location.title}: ${location.address}`;
    await this.copyToClipboard(copiedText);

    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  }

  onFooterLinkClick(event: Event, href: string) {
    if (!href.startsWith('/')) {
      return;
    }

    event.preventDefault();
    this.router.navigateByUrl(href);
  }

  isCareersLink(url: string): boolean {
    return url === CAREERS_URL && /^https?:\/\//i.test(CAREERS_URL);
  }

  private syncViewportState() {
    const mobileNow = window.matchMedia('(max-width: 760px)').matches;

    if (mobileNow && !this.isMobile && this.expanded.size === 0) {
      this.expanded.add('solutions');
    }

    if (!mobileNow) {
      this.expanded.clear();
    }

    this.isMobile = mobileNow;
  }

  private async copyToClipboard(text: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
      }
    } catch {
      // Fall through to legacy copy method.
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  private mapCesUrlToLocal(url: string): string {
    if (!url || url === '#') return '/';
    if (!/^https?:\/\//i.test(url)) return url;

    let parsed: URL;
    try {
      parsed = new URL(url);
    } catch {
      return '/';
    }

    if (!/ces-pl\.com$/i.test(parsed.hostname)) {
      return url;
    }

    const path = parsed.pathname.toLowerCase();
    if (path === '/' || path === '') return '/';
    if (path.includes('about')) return '/about-us';
    if (path.includes('contact')) return '/contact-us';
    if (path.includes('achievement')) return '/achievements';
    if (path.includes('blog')) return '/blogs';
    if (path.includes('career')) return CAREERS_URL;
    if (path.includes('partner')) return '/partners';
    if (path.includes('support')) return '/contact-us';
    if (path.includes('solution')) return '/solutions';
    if (path.includes('service')) return '/achievements';

    return '/';
  }
}
