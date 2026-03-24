import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BLOGS_DATA } from '../../website/blogs/blogs.data';
import { CES_SOLUTIONS } from '../../website/solutions/solutions.data';
import { SERVICE_DETAILS } from '../../website/services/service-details.data';

const CAREERS_URL = '/careers';

interface MenuLink {
  label: string;
  href: string;
}

interface MegaColumn {
  title: string;
  links: MenuLink[];
}

interface MegaFeature {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface MegaMenu {
  feature: MegaFeature;
  columns: MegaColumn[];
}

interface MenuItem {
  label: string;
  href?: string;
  suffix?: string;
  mega?: MegaMenu;
}

interface MobileLeafLink {
  label: string;
  href: string;
}

interface MobileSubsection {
  label: string;
  href?: string;
  children?: MobileLeafLink[];
}

interface MobileSection {
  label: string;
  href?: string;
  children?: MobileSubsection[];
}

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, AfterViewInit, OnDestroy {
  constructor(private router: Router) {}

  @ViewChild('headerShell') headerShell?: ElementRef<HTMLElement>;
  @ViewChild('desktopSearchInput') desktopSearchInput?: ElementRef<HTMLInputElement>;
  @ViewChild('mobileSearchInput') mobileSearchInput?: ElementRef<HTMLInputElement>;

  searchQuery = '';
  mobileSearchQuery = '';
  isSearchOpen = false;
  isMobileSearchOpen = false;

  readonly utilityLinks = {
    account: '#',
    getStarted: '#',
  };

  currentLanguage: 'EN' | 'HI' = 'EN';

  readonly quickLinks: MenuLink[] = [
    { label: 'Blogs', href: '/blogs' },
    { label: 'Company Profile', href: '/company-profile' }
  ];

  get mobilePrimaryLinks(): MenuLink[] {
    return this.menuItems.map((item) => ({
      label: item.label,
      href: this.resolveMenuItemHref(item)
    }));
  }

  menuItems: MenuItem[] = [
    { label: 'About Us', href: '/about-us' },
    {
      label: 'Solutions',
      suffix: 'v',
      mega: {
        feature: {
          title: 'Solution Suites',
          body:
            'Purpose-built solutions that secure, connect, and modernize your infrastructure end to end.',
          ctaLabel: 'Explore Solutions',
          ctaHref: '/solutions'
        },
        columns: [
          {
            title: 'Network & Cloud',
            links: [
              { label: 'SD WAN Solution', href: '/solutions/sd-wan-solution' },
              { label: 'Cloud Solution', href: '/solutions/cloud-solution' },
              { label: 'Network Security Solution', href: '/solutions/network-security-solution' },
              { label: 'Enterprise Network Solution', href: '/solutions/enterprise-network-solution' }
            ]
          },
          {
            title: 'Data Center & Infra',
            links: [
              { label: 'IT Infrastructure', href: '/solutions/server-storage-solution' },
              { label: 'Data Center Solution', href: '/solutions/data-center-solution' },
              { label: 'Server & Storage Solution', href: '/solutions/server-storage-solution' },
              { label: 'ACI Solution', href: '/solutions/aci-solution' }
            ]
          },
          {
            title: 'Security & Advisory',
            links: [
              { label: 'Cyber Security', href: '/solutions/cyber-security' },
              { label: 'Network Consulting', href: '/solutions/network-consulting' }
            ]
          },
          {
            title: 'Workplace & Mobility',
            links: [
              { label: 'Voice & Video Solution', href: '/solutions/voice-video-solution' },
              { label: 'Mobility & Wireless Solution', href: '/solutions/mobility-wireless-solution' }
            ]
          }
        ]
      }
    },
    {
      label: 'Services',
      suffix: 'v',
      mega: {
        feature: {
          title: 'Customer Driven Services',
          body:
            'Global 24x7 support, guided journeys, and training to master our products and strengthen your capabilities.',
          ctaLabel: 'Get Started',
          ctaHref: '/services'
        },
        columns: [
          {
            title: 'Core Services',
            links: [
              { label: 'IT Services', href: '/services/it-services' },
              { label: 'Managed Services', href: '/services/managed-services' },
              { label: 'Annual Maintenance Contract', href: '/services/annual-maintenance-contract' }
            ]
          },
          {
            title: 'Professional Services',
            links: [
              { label: 'Network Audit', href: '/services/network-audit' },
              { label: 'Network Implementation', href: '/services/network-implementation' },
              { label: 'Rental', href: '/services/rental' }
            ]
          },
          {
            title: 'Security Services',
            links: [
              { label: 'VAPT', href: '/services/vapt' }
            ]
          }
        ]
      }
    },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: CAREERS_URL },
    // { label: 'Contact Us', href: '/contact-us' }
  ];

  readonly mobileNavSections: MobileSection[] = [
    { label: 'About Us', href: '/about-us' },
    {
      label: 'Solutions',
      children: [
        {
          label: 'Network and Cloud',
          children: [
            { label: 'SD WAN Solution', href: '/solutions/sd-wan-solution' },
            { label: 'Cloud Solution', href: '/solutions/cloud-solution' },
            { label: 'Network Security Solution', href: '/solutions/network-security-solution' },
            { label: 'Enterprise Network Solution', href: '/solutions/enterprise-network-solution' }
          ]
        },
        {
          label: 'Data Center and Infrastructure',
          children: [
            { label: 'IT Infrastructure', href: '/solutions/server-storage-solution' },
            { label: 'Data Center Solution', href: '/solutions/data-center-solution' },
            { label: 'Server & Storage Solution', href: '/solutions/server-storage-solution' },
            { label: 'ACI Solution', href: '/solutions/aci-solution' }
          ]
        },
        {
          label: 'Security and Advisory',
          children: [
            { label: 'Cyber Security', href: '/solutions/cyber-security' },
            { label: 'Network Consulting', href: '/solutions/network-consulting' }
          ]
        },
        {
          label: 'Workplace and Mobility',
          children: [
            { label: 'Voice & Video Solution', href: '/solutions/voice-video-solution' },
            { label: 'Mobility & Wireless Solution', href: '/solutions/mobility-wireless-solution' }
          ]
        }
      ]
    },
    {
      label: 'Services',
      children: [
        {
          label: 'Core Services',
          children: [
            { label: 'IT Services', href: '/services/it-services' },
            { label: 'Managed Services', href: '/services/managed-services' },
            { label: 'Annual Maintenance Contract', href: '/services/annual-maintenance-contract' }
          ]
        },
        {
          label: 'Professional Services',
          children: [
            { label: 'Rental', href: '/services/rental' },
            { label: 'Network Audit', href: '/services/network-audit' },
            { label: 'Network Implementation', href: '/services/network-implementation' }
          ]
        },
        {
          label: 'Security Services',
          children: [{ label: 'VAPT', href: '/services/vapt' }]
        }
      ]
    },
    { label: 'Partners', href: '/partners' },
    { label: 'Careers', href: CAREERS_URL },
    { label: 'Contact Us', href: '/contact-us' }
  ];

  activeMega: string | null = null;
  isMobileMenuOpen = false;
  isHeroTransparent = false;
  isLandingPage = false;
  mobileMenuLevel: 0 | 1 | 2 = 0;
  activeMobileSection: MobileSection | null = null;
  activeMobileSubsection: MobileSubsection | null = null;

  ngOnInit(): void {
    this.updateHeaderMode();
  }

  ngAfterViewInit(): void {
    this.syncHeaderHeightVar();
    setTimeout(() => this.syncHeaderHeightVar(), 0);
  }

  ngOnDestroy(): void {
    this.lockBodyScroll(false);
  }

  openMega(itemLabel: string, hasMega: boolean) {
    this.activeMega = hasMega ? itemLabel : null;
  }

  closeMega() {
    this.activeMega = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.activeMega = null;
      this.mobileMenuLevel = 0;
      this.activeMobileSection = null;
      this.activeMobileSubsection = null;
      this.isMobileSearchOpen = false;
    }
    this.lockBodyScroll(this.isMobileMenuOpen);
    this.updateHeaderMode();
    this.syncHeaderHeightVar();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.closeMega();
    this.mobileMenuLevel = 0;
    this.activeMobileSection = null;
    this.activeMobileSubsection = null;
    this.isMobileSearchOpen = false;
    this.lockBodyScroll(false);
    this.updateHeaderMode();
    this.syncHeaderHeightVar();
  }

  onSearchInput(event: Event) {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  onMobileSearchInput(event: Event) {
    this.mobileSearchQuery = (event.target as HTMLInputElement).value;
  }

  onSearchSubmit(event: Event) {
    event.preventDefault();
    this.submitSearch(this.searchQuery);
  }

  onMobileSearchSubmit(event: Event) {
    event.preventDefault();
    this.submitSearch(this.mobileSearchQuery);
  }

  onSearchClick() {
    if (window.innerWidth <= 1100) {
      this.isMobileSearchOpen = !this.isMobileSearchOpen;
      if (this.isMobileSearchOpen) {
        setTimeout(() => this.mobileSearchInput?.nativeElement.focus(), 0);
      }
      setTimeout(() => this.syncHeaderHeightVar(), 0);
      return;
    }

    // Desktop: toggle open/close on icon click; Enter still submits
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) {
      setTimeout(() => this.desktopSearchInput?.nativeElement.focus(), 0);
    } else {
      this.searchQuery = '';
    }
  }

  onAccountClick() {
    this.navigateTo(this.utilityLinks.account);
  }

  onGetStartedClick() {
    this.navigateTo(this.utilityLinks.getStarted);
  }

  onFeatureCtaClick(href: string | undefined) {
    if (!href || href === '#') {
      this.onGetStartedClick();
      return;
    }

    this.navigateTo(href);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'HI' : 'EN';
    document.documentElement.lang = this.currentLanguage.toLowerCase();
  }

  onNavItemHover(itemLabel: string, hasMega: boolean) {
    if (window.innerWidth <= 1100) {
      return;
    }
    this.openMega(itemLabel, hasMega);
  }

  onMegaPanelHover() {
    if (window.innerWidth <= 1100) {
      return;
    }
    if (this.activeMega) {
      this.openMega(this.activeMega, true);
    }
  }

  onNavItemClick(event: Event, item: MenuItem) {
    if (item.mega) {
      event.preventDefault();
      this.activeMega = this.activeMega === item.label ? null : item.label;
      return;
    }

    event.preventDefault();
    const target = item.label === 'About Us' ? '/about-us' : this.resolveMenuItemHref(item);
    this.navigateTo(target);

    if (window.innerWidth <= 1100) {
      this.closeMobileMenu();
    }
    this.closeMega();
  }

  onMenuLinkClick(event: Event, href: string) {
    event.preventDefault();
    this.closeMega();
    this.closeMobileMenu();
    this.navigateTo(href);
  }

  onQuickLinkClick(event: Event, href: string) {
    event.preventDefault();
    this.closeMobileMenu();
    this.navigateTo(href);
  }

  onMobilePrimaryClick(event: Event, href: string) {
    event.preventDefault();
    this.closeMobileMenu();
    this.navigateTo(href);
  }

  onMobileSectionClick(section: MobileSection): void {
    if (section.children?.length) {
      this.activeMobileSection = section;
      this.activeMobileSubsection = null;
      this.mobileMenuLevel = 1;
      return;
    }

    this.navigateTo(section.href || '/');
    this.closeMobileMenu();
  }

  onMobileSubsectionClick(subsection: MobileSubsection): void {
    if (subsection.children?.length) {
      this.activeMobileSubsection = subsection;
      this.mobileMenuLevel = 2;
      return;
    }

    this.navigateTo(subsection.href || '/');
    this.closeMobileMenu();
  }

  backToMobileMain(): void {
    this.mobileMenuLevel = 0;
    this.activeMobileSection = null;
    this.activeMobileSubsection = null;
  }

  backToMobileSection(): void {
    this.mobileMenuLevel = 1;
    this.activeMobileSubsection = null;
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth > 1100 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    if (window.innerWidth > 1100) {
      this.isMobileSearchOpen = false;
    }
    this.updateHeaderMode();
    this.syncHeaderHeightVar();
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.updateHeaderMode();
  }

  private navigateTo(url: string) {
    const target = this.mapCesUrlToLocal(url);

    if (this.isCareersLink(url)) {
      window.open(target, '_blank', 'noopener');
      return;
    }

    if (/^https?:\/\//i.test(target)) {
      window.location.href = target;
      return;
    }

    this.router.navigateByUrl(target);
  }

  private submitSearch(rawQuery: string) {
    const query = rawQuery.trim().toLowerCase();
    if (!query) {
      return;
    }

    const tokens = query.split(/\s+/).filter(Boolean);
    const results = this.buildSearchTargets()
      .map((target) => {
        const searchable = `${target.label} ${target.keywords.join(' ')}`.toLowerCase();
        let score = 0;

        if (searchable.includes(query)) {
          score += 10;
        }

        score += tokens.filter((token) => searchable.includes(token)).length;
        return { href: target.href, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    const destination = results[0]?.href || this.queryFallback(query);

    this.searchQuery = '';
    this.mobileSearchQuery = '';
    this.isSearchOpen = false;
    this.isMobileSearchOpen = false;
    this.closeMega();
    this.navigateTo(destination);
  }

  private buildSearchTargets(): Array<{ label: string; keywords: string[]; href: string }> {
    const staticTargets = [
      { label: 'Home', keywords: ['home', 'landing', 'main'], href: '/' },
      { label: 'About Us', keywords: ['about', 'company', 'overview'], href: '/about-us' },
      { label: 'Solutions', keywords: ['solution', 'architecture', 'technology'], href: '/solutions' },
      { label: 'Services', keywords: ['service', 'managed', 'consulting'], href: '/services' },
      { label: 'Partners', keywords: ['partner', 'alliance', 'vendor'], href: '/partners' },
      { label: 'Achievements', keywords: ['awards', 'certification', 'yearbook'], href: '/achievements' },
      { label: 'Blogs', keywords: ['blog', 'article', 'insights'], href: '/blogs' },
      { label: 'Contact Us', keywords: ['contact', 'sales', 'quote', 'support'], href: '/contact-us' },
      { label: 'Company Profile', keywords: ['profile', 'pdf', 'company profile'], href: '/company-profile' }
    ];

    const solutionTargets = CES_SOLUTIONS.map((item) => ({
      label: item.title,
      keywords: [item.category, item.summary, item.description, ...item.highlights],
      href: `/solutions/${item.slug}`
    }));

    const blogTargets = BLOGS_DATA.map((item) => ({
      label: item.title,
      keywords: [item.type, item.summary, item.intro, ...item.highlights],
      href: `/blogs/${item.slug}`
    }));

    const serviceTargets = SERVICE_DETAILS.map((item) => ({
      label: item.title,
      keywords: [item.tag, item.summary, item.bodyIntro, ...item.features.map((feature) => feature.title)],
      href: `/services/${item.slug}`
    }));

    return [...staticTargets, ...solutionTargets, ...serviceTargets, ...blogTargets];
  }

  private queryFallback(query: string): string {
    if (query.includes('blog') || query.includes('insight')) return '/blogs';
    if (query.includes('service') || query.includes('managed')) return '/services';
    if (query.includes('solution') || query.includes('cloud') || query.includes('security')) return '/solutions';
    if (query.includes('partner')) return '/partners';
    if (query.includes('contact') || query.includes('support') || query.includes('sales')) return '/contact-us';
    return '/';
  }

  normalizeHref(url: string): string {
    return this.mapCesUrlToLocal(url);
  }

  private resolveMenuItemHref(item: MenuItem): string {
    if (item.href) return item.href;

    if (item.mega?.feature.ctaHref && item.mega.feature.ctaHref !== '#') {
      return item.mega.feature.ctaHref;
    }

    if (item.label === 'Services') return '/services';
    if (item.label === 'Solutions') return '/solutions';
    if (item.label === 'Partners') return '/partners';

    return '/';
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
    if (path.includes('company-profile') || path.includes('profile')) return '/company-profile';
    if (path.includes('blog')) return '/blogs';
    if (path.includes('career')) return CAREERS_URL;
    if (path.includes('partner')) return '/partners';
    if (path.includes('support')) return '/contact-us';
    if (path.includes('solution')) return '/solutions';
    if (path.includes('service')) return '/services';

    return '/';
  }

  private isCareersLink(url: string): boolean {
    return this.mapCesUrlToLocal(url) === CAREERS_URL && /^https?:\/\//i.test(CAREERS_URL);
  }

  private updateHeaderMode(scrollYOverride?: number): void {
    const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    this.isLandingPage = pathname === '/';
    const scrollY = typeof scrollYOverride === 'number' ? scrollYOverride : window.scrollY;

    if (!this.isLandingPage || this.isMobileMenuOpen) {
      this.isHeroTransparent = false;
      return;
    }
    this.isHeroTransparent = scrollY <= 0;
  }

  private lockBodyScroll(locked: boolean): void {
    document.body.style.overflow = locked ? 'hidden' : '';
  }

  private syncHeaderHeightVar(): void {
    const shell = this.headerShell?.nativeElement;
    if (!shell) return;

    const headerHeight = Math.round(shell.getBoundingClientRect().height);
    if (headerHeight <= 0) return;

    document.documentElement.style.setProperty('--header-total-height', `${headerHeight}px`);
  }
}
