import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HOMEPAGE_PARTNER_LOGOS, CERTIFICATION_BADGES } from '../shared/site-constants';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing implements AfterViewInit, OnDestroy {
  private readonly caseHubOutMs = 210;
  private readonly caseHubInMs = 360;
  private readonly statsAnimationMs = 1600;

  readonly serviceFeatureTabs = [
    {
      label: 'IT Services',
      title: 'End-to-end IT services for secure, reliable operations',
      description:
        'Comprehensive IT delivery from planning to support across enterprise infrastructure, networking, cloud, and security operations.',
      cta: 'Explore IT Services',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'Network Audit',
      title: 'Deep network audit for performance, risk, and compliance readiness',
      description:
        'Assess current infrastructure, identify bottlenecks and vulnerabilities, and define an actionable roadmap for optimization.',
      cta: 'Explore Network Audit',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'Network Implementation',
      title: 'Structured implementation for enterprise network modernization',
      description:
        'Deploy new network architectures with validated designs, controlled rollout practices, and reduced implementation risk.',
      cta: 'Explore Network Implementation',
      image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'Managed Services',
      title: '24x7 managed services with proactive monitoring and support',
      description:
        'Operate critical infrastructure with SLA-backed monitoring, incident response, and operational governance from CES experts.',
      cta: 'Explore Managed Services',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'VAPT',
      title: 'Vulnerability assessment and penetration testing for cyber resilience',
      description:
        'Identify exploitable weaknesses, validate controls, and strengthen security posture with prioritized remediation guidance.',
      cta: 'Explore VAPT',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'Annual Maintenance Contract',
      title: 'Annual maintenance contracts for stable, always-on operations',
      description:
        'Protect infrastructure health with preventive maintenance, rapid corrective response, and lifecycle continuity support.',
      cta: 'Explore AMC',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80'
    },
    {
      label: 'Rental',
      title: 'Flexible rental services for project-based infrastructure needs',
      description:
        'Scale quickly with enterprise-ready rental infrastructure for temporary deployments, events, and short-term capacity expansion.',
      cta: 'Explore Rental Services',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=80'
    }
  ];

  readonly certificationBadges = CERTIFICATION_BADGES;
  awardsCarouselOptions: OwlOptions = {
  // ── Loop & autoplay ───────────────────────────────────────
  loop: true,
  rewind: false,

  autoplay: true,
  autoplayTimeout: 2800,
  autoplaySpeed: 900,
  autoplayHoverPause: true,
  autoplayMouseleaveTimeout: 200,

  // ── Drag ──────────────────────────────────────────────────
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  freeDrag: false,

  // ── Transition ────────────────────────────────────────────
  smartSpeed: 900,
  fluidSpeed: false,
  slideTransition: 'ease',

  // ── UI ────────────────────────────────────────────────────
  nav: false,
  dots: false,
  margin: 24,
  stagePadding: 0,
  center: false,
  startPosition: 0,
  URLhashListener: false,
  lazyLoad: false,

  // ── Responsive breakpoints ────────────────────────────────
  // Key rule: items must be <= certificationBadges.length
  // for loop to work correctly
  responsive: {
    0: {
      items: 1,
      margin: 12
    },
    400: {
      items: 2,
      margin: 14
    },
    600: {
      items: 3,
      margin: 16
    },
    820: {
      items: 4,
      margin: 20
    },
    1024: {
      items: 5,
      margin: 24
    },
    1280: {
      items: 5,
      margin: 28
    }
  }
};
  activeServiceFeatureIndex = 2;

  readonly companyFocus = [
    {
      label: 'Vision',
      body: 'Build a resilient, secure digital foundation where enterprises can scale with confidence.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80'
    },
    {
      label: 'Mission',
      body: 'Deliver outcome-driven IT services that modernize networks, cloud, and security operations.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80'
    },
    {
      label: 'Goal',
      body: 'Create measurable impact by improving uptime, performance, and operational clarity for customers.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80'
    }
  ];
  activeCompanyFocusIndex = 0;

  readonly statsTargets = {
    successful: 2356,
    running: 675,
    experts: 254,
    happy: 100
  };

  statsDisplay = {
    successful: 0,
    running: 0,
    experts: 0,
    happy: 0
  };

  readonly homepagePartnerLogos = HOMEPAGE_PARTNER_LOGOS;

  leaders = [
    {
      name: 'Suraj Soni',
      designation: 'Director',
      headline: '“Clarity in execution turns strategy into results.”',
      summary: 'Suraj Soni',
      trust: 'CES Tech Leadership',
      ctaPrimary: 'Leadership profile',
      ctaSecondary: 'Leadership profile',
      photo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80'
    },
    {
      name: 'Shaila Badar',
      designation: 'Chief Executive Officer',
      headline: '“Build trust by delivering what matters most.”',
      summary: 'Shaila Badar',
      trust: 'CES Tech Leadership',
      ctaPrimary: 'Leadership profile',
      ctaSecondary: 'Leadership profile',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1800&q=80'
    },
    {
      name: 'Sudeep Jain',
      designation: 'Chief Technology Officer',
      headline: '“Modern infrastructure is the platform for growth.”',
      summary: 'Sudeep Jain',
      trust: 'CES Tech Leadership',
      ctaPrimary: 'Leadership profile',
      ctaSecondary: 'Leadership profile',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=80'
    },
    {
      name: 'Arpit Jain',
      designation: 'Chief Financial Officer',
      headline: '“Discipline in cost creates freedom to invest.”',
      summary: 'Arpit Jain',
      trust: 'CES Tech Leadership',
      ctaPrimary: 'Leadership profile',
      ctaSecondary: 'Leadership profile',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=80'
    }
  ];

  activeLeaderIndex = 0;

  get activeServiceFeature() {
    return this.serviceFeatureTabs[this.activeServiceFeatureIndex];
  }

  globalTrustBrands = [
    { id: 'microsoft', label: 'Microsoft', hasCaseStudy: false },
    { id: 'openai', label: 'OpenAI', hasCaseStudy: false },
    { id: 'nvidia', label: 'NVIDIA', hasCaseStudy: false },
    {
      id: 'boomi',
      label: 'boomi',
      hasCaseStudy: true,
      caseStudy: {
        title: 'boomi',
        quote:
          '"We have tripled our testing throughput and now ship integrations with far less operational risk."',
        author: 'Integration Engineering Lead, boomi',
        summary:
          'CES redesigned branch-to-cloud connectivity and observability workflows, improving release confidence and reducing incident impact.'
      }
    },
    { id: 'github', label: 'GitHub', hasCaseStudy: false },
    {
      id: 'bestegg',
      label: 'Best Egg',
      hasCaseStudy: true,
      caseStudy: {
        title: 'Best Egg',
        quote:
          '"The new WAN and security controls gave us reliable branch performance with stronger governance."',
        author: 'Director of Infrastructure, Best Egg',
        summary:
          'CES implemented policy-based SD-WAN and security segmentation for better uptime and compliance across branch environments.'
      }
    },
    { id: 'workday', label: 'workday', hasCaseStudy: false },
    { id: 'akamai', label: 'Akamai', hasCaseStudy: false },
    { id: 'louisvuitton', label: 'LOUIS VUITTON', hasCaseStudy: false },
    { id: 'nbcuniversal', label: 'NBCUniversal', hasCaseStudy: false },
    {
      id: 'cityfurniture',
      label: 'CITY FURNITURE',
      hasCaseStudy: true,
      caseStudy: {
        title: 'CITY FURNITURE',
        quote:
          '"Rollouts became predictable and our store teams noticed immediate improvements in app responsiveness."',
        author: 'Head of IT Operations, CITY FURNITURE',
        summary:
          'CES standardized site deployment and failover playbooks, reducing branch cutover risk while improving user experience.'
      }
    },
    { id: 'cox', label: 'COX', hasCaseStudy: false },
    {
      id: 'transavia',
      label: 'transavia',
      hasCaseStudy: true,
      caseStudy: {
        title: 'transavia',
        quote:
          '"We achieved better visibility and much faster incident triage across airport and office networks."',
        author: 'Network Platform Manager, transavia',
        summary:
          'CES introduced a monitored, segmented network architecture with resilient routing for critical travel operations.'
      }
    },
    { id: 'esteelauder', label: 'ESTEE LAUDER', hasCaseStudy: false },
    { id: 'tripadvisor', label: 'Tripadvisor', hasCaseStudy: false },
    { id: 'boohoo', label: 'boohoo', hasCaseStudy: false }
  ];

  expandedGlobalTrustId: string | null = null;
  trustedShowcases = [
    {
      name: 'Fortinet',
      logo: 'assets/fortinet.png',
      accent: '#ee3124',
      slug: 'fortinet',
      summary:
        'Fortinet partnered on enterprise security modernization with integrated network and security controls.',
      about:
        'The environment required stronger perimeter-to-branch security consistency, faster policy rollout, and simplified operations.',
      useCase:
        'CES designed a secure branch architecture with centralized policy governance and improved east-west traffic visibility.',
      productsUsed:
        'Network Security, SD-WAN and SASE, Managed Services (NOC).',
      brand: 'Fortinet',
      quote:
        '"The deployment model improved security posture while reducing operational friction across distributed sites."',
      author: 'Enterprise Security Lead, Fortinet Program',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/fortinet',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Vodafone',
      logo: 'assets/vodafone.png',
      accent: '#e60000',
      slug: 'vodafone',
      summary:
        'Vodafone needed stronger branch security and performance governance across distributed enterprise operations.',
      about:
        'The transformation focused on resilient connectivity, standardized policy enforcement, and lower incident recovery time.',
      useCase:
        'CES deployed secure SD-WAN patterns with proactive monitoring and optimized failover across critical sites.',
      productsUsed:
        'SD-WAN and SASE, Managed Services (NOC), Network Security.',
      brand: 'Vodafone',
      quote:
        '"CES helped us improve network consistency and operational response across high-demand environments."',
      author: 'Head of Enterprise Network Services, Vodafone',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/vodafone',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Delhi Metro',
      logo: 'assets/delhimetro.png',
      accent: '#d62828',
      slug: 'delhi-metro',
      summary:
        'Delhi Metro required secure, always-on connectivity for station systems, operational applications, and central control.',
      about:
        'Transit operations needed strict uptime and resilient communication across distributed, high-density environments.',
      useCase:
        'CES delivered failover-ready WAN paths, segmented operational zones, and 24/7 network monitoring for rapid incident response.',
      productsUsed:
        'SD-WAN and SASE, Network Security, Managed Services (NOC), VAPT and Compliance.',
      brand: 'Delhi Metro',
      quote:
        '"Stability and response time improved across station networks after CES modernization and monitoring rollout."',
      author: 'Head of Network Systems, Metro Operations',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/delhi-metro',
      image:
        'assets/delhi metro case study.jpeg'
    },
    {
      name: 'Aruba',
      logo: 'assets/aruba.png',
      accent: '#ff8a00',
      slug: 'aruba',
      summary:
        'Aruba-focused deployments demanded secure access architecture and high-quality enterprise wireless performance.',
      about:
        'The requirement included policy consistency across campus and branch Wi-Fi environments with strong access governance.',
      useCase:
        'CES implemented role-based network policies, optimized wireless segmentation, and centralized access analytics.',
      productsUsed:
        'Network Security, Network Audit and Implementation, Managed Services.',
      brand: 'Aruba',
      quote:
        '"The new architecture provided better user access control with measurable improvements in network reliability."',
      author: 'Enterprise Infrastructure Manager, Aruba Program',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/aruba',
      image:
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Cisco',
      logo: 'assets/cisco.png',
      accent: '#1ba0d7',
      slug: 'cisco',
      summary:
        'Cisco environments required lifecycle modernization and stronger observability across branch, core, and cloud edges.',
      about:
        'The program focused on reducing operational complexity while enabling secure, policy-driven enterprise growth.',
      useCase:
        'CES delivered design-to-run coverage with automation workflows, standardized templates, and proactive performance monitoring.',
      productsUsed:
        'SD-WAN, Cloud and ACI, Managed Services (NOC), Network Audit and Implementation.',
      brand: 'Cisco',
      quote:
        '"Template-led rollouts and proactive operations significantly reduced deployment risk and unplanned downtime."',
      author: 'Senior Network Architect, Cisco Program',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/cisco',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Airtel',
      logo: 'assets/airtel.png',
      accent: '#e60012',
      slug: 'airtel',
      summary:
        'Airtel needed branch-scale network standardization and stronger security controls across distributed operations.',
      about:
        'Airtel supports high-volume enterprise and field operations requiring resilient connectivity and policy consistency.',
      useCase:
        'CES delivered site rollout standards, WAN optimization, and proactive monitoring to improve performance and reduce outage impact.',
      productsUsed:
        'SD-WAN and SASE, Managed Services (NOC), Network Security.',
      brand: 'Airtel',
      quote:
        '"CES helped us standardize branch networking with better uptime and faster incident handling."',
      author: 'Enterprise Network Head, Airtel',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/airtel',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80'
    },
    {
      name: 'Palo Alto',
      logo: 'assets/paloalto.png',
      accent: '#f04e23',
      slug: 'palo-alto',
      summary:
        'Palo Alto use cases emphasized integrated threat defense and consistent policy controls from edge to core.',
      about:
        'The requirement was to simplify security operations while maintaining strong visibility across distributed environments.',
      useCase:
        'CES implemented unified security architecture, segmentation controls, and continuous posture monitoring.',
      productsUsed:
        'Network Security, VAPT and Compliance, Managed Services, SD-WAN and SASE.',
      brand: 'Palo Alto',
      quote:
        '"Unified security governance improved threat response readiness and reduced operational risk."',
      author: 'Director of Cyber Defense Programs, Palo Alto',
      ctaLabel: 'Read the story',
      ctaHref: '/case-studies/palo-alto',
      image:
        'assets/palo alto case study .jpeg'
    }
  ];

  selectedTrustedIndex = 0;
  displayedTrustedIndex = 0;
  caseHubSlideDirection: 'next' | 'prev' = 'next';
  caseHubAnimationPhase: 'idle' | 'out' | 'in' = 'idle';
  private caseHubOutTimeoutId: any = null;
  private caseHubInTimeoutId: any = null;
  private caseHubTransitionToken = 0;
  private readonly leaderTransitionCss = 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)';
  leaderTrackTransition = this.leaderTransitionCss;

  private scrollListener!: () => void;
  private sectionRevealObserver: IntersectionObserver | null = null;
  private leaderAutoSlideSub: Subscription | null = null;
  private statsObserver: IntersectionObserver | null = null;
  private statsAnimationFrameId: number | null = null;
  private statsAnimationStarted = false;
  private statsAnimationStart: number | null = null;
  private statsTimers: Partial<Record<keyof typeof this.statsTargets, number>> = {};
  private unlistenVisibility: (() => void) | null = null;
  @ViewChild('servicesTabs') servicesTabsRef?: ElementRef<HTMLDivElement>;

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    this.registerLandingIcons();
    this.homepagePartnerLogos = HOMEPAGE_PARTNER_LOGOS;
    this.certificationBadges = CERTIFICATION_BADGES;
  }

  ngAfterViewInit(): void {
    this.displayedTrustedIndex = this.selectedTrustedIndex;
    this.setupSectionReveals();
    this.setupStatsCounters();
    this.startLeaderAutoSlide();
    this.unlistenVisibility = this.renderer.listen('document', 'visibilitychange', () => {
      if (document.hidden) {
        this.clearLeaderAutoSlide();
      } else {
        // advance once to keep things moving after tab inactivity, then restart timer
        this.advanceLeader();
        this.restartLeaderAutoSlide();
      }
    });

    // On mobile we skip the scroll animation entirely
    if (window.matchMedia('(max-width: 960px)').matches) return;

    const container: HTMLElement | null = this.host.nativeElement.querySelector('#reveal-scroll-container');
    const visual: HTMLElement | null = this.host.nativeElement.querySelector('#reveal-visual');
    const copy: HTMLElement | null = this.host.nativeElement.querySelector('#reveal-copy');

    if (!container || !visual || !copy) return;

    let ticking = false;

    const animate = () => {
      const rect = container.getBoundingClientRect();
      const scrollBudget = container.offsetHeight - window.innerHeight; // 150vh in px
      const scrolled = -rect.top;                                   // how far we've scrolled into the container

      // progress: 0 = section just entered view, 1 = scroll budget fully used
      const progress = Math.min(Math.max(scrolled / scrollBudget, 0), 1);

      // ── Image width: 100% → 52% ──────────────────────────
      const imageWidth = 100 - progress * 48; // 100 at 0, 52 at 1
      visual.style.width = `${imageWidth}%`;

      // ── Text: starts fading in at 35% progress ────────────
      // This gives the image time to shrink first before text appears
      const textProgress = Math.min(Math.max((progress - 0.35) / 0.65, 0), 1);
      const eased = easeOutCubic(textProgress);

      copy.style.opacity = String(eased);
      copy.style.transform = `translateY(-50%) translateX(${(1 - eased) * 60}px)`;

      // Enable pointer events once text is substantially visible
      if (eased > 0.7) {
        copy.classList.add('is-interactive');
      } else {
        copy.classList.remove('is-interactive');
      }

      ticking = false;
    };

    this.scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(animate);
        ticking = true;
      }
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });

    // Run once on load in case section is already in view
    animate();

  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }

    this.clearLeaderAutoSlide();

    if (this.sectionRevealObserver) {
      this.sectionRevealObserver.disconnect();
      this.sectionRevealObserver = null;
    }

    if (this.statsObserver) {
      this.statsObserver.disconnect();
      this.statsObserver = null;
    }

    if (this.statsAnimationFrameId !== null) {
      cancelAnimationFrame(this.statsAnimationFrameId);
      this.statsAnimationFrameId = null;
    }

    this.clearCaseHubAnimationTimers();

    if (this.unlistenVisibility) {
      this.unlistenVisibility();
      this.unlistenVisibility = null;
    }
  }

  selectTrusted(index: number): void {
    const direction = this.getTrustedDirection(index);
    this.transitionTrusted(index, direction);
  }

  prevTrusted(): void {
    const nextIndex =
      (this.selectedTrustedIndex - 1 + this.trustedShowcases.length) % this.trustedShowcases.length;
    this.transitionTrusted(nextIndex, 'prev', true);
  }

  nextTrusted(): void {
    const nextIndex = (this.selectedTrustedIndex + 1) % this.trustedShowcases.length;
    this.transitionTrusted(nextIndex, 'next', true);
  }

  get activeTrusted() {
    return this.trustedShowcases[this.displayedTrustedIndex];
  }

  get trustedCaseBackground(): string {
    return `linear-gradient(120deg, rgba(18, 32, 60, 0.62), rgba(18, 32, 60, 0.2)), url('${this.activeTrusted.image}')`;
  }

  toggleGlobalTrustCase(brandId: string): void {
    this.expandedGlobalTrustId = this.expandedGlobalTrustId === brandId ? null : brandId;
  }

  get expandedGlobalTrustCase() {
    return this.globalTrustBrands.find(
      (brand) => brand.id === this.expandedGlobalTrustId && brand.hasCaseStudy
    )?.caseStudy;
  }

  prevLeader(): void {
    this.activeLeaderIndex = (this.activeLeaderIndex - 1 + this.leaders.length) % this.leaders.length;
    this.restartLeaderAutoSlide();
  }

  nextLeader(): void {
    this.advanceLeader();
    this.restartLeaderAutoSlide();
  }

  selectServiceFeature(index: number): void {
    this.activeServiceFeatureIndex = index;
  }

  selectCompanyFocus(index: number): void {
    this.activeCompanyFocusIndex = index;
  }

  scrollServiceTabs(direction: 'left' | 'right'): void {
    const tabs = this.servicesTabsRef?.nativeElement;
    if (!tabs) return;

    const scrollAmount = Math.max(tabs.clientWidth * 0.6, 180);
    const delta = direction === 'left' ? -scrollAmount : scrollAmount;
    tabs.scrollBy({ left: delta, behavior: 'smooth' });
  }

  goToLeader(index: number): void {
    this.activeLeaderIndex = index;
    this.restartLeaderAutoSlide();
  }

  private startLeaderAutoSlide(): void {
    this.restartLeaderAutoSlide();
  }

  private restartLeaderAutoSlide(): void {
    this.clearLeaderAutoSlide();
    this.leaderAutoSlideSub = interval(3000).subscribe(() => this.advanceLeader());
  }

  private clearLeaderAutoSlide(): void {
    if (this.leaderAutoSlideSub) {
      this.leaderAutoSlideSub.unsubscribe();
      this.leaderAutoSlideSub = null;
    }
  }

  private advanceLeader(): void {
    const isLast = this.activeLeaderIndex === this.leaders.length - 1;

    if (isLast) {
      // Jump to first without anim, then restore transition on next frame
      this.leaderTrackTransition = 'none';
      this.activeLeaderIndex = 0;
      this.cdr.detectChanges();
      requestAnimationFrame(() => {
        this.leaderTrackTransition = this.leaderTransitionCss;
        this.cdr.markForCheck();
      });
    } else {
      this.leaderTrackTransition = this.leaderTransitionCss;
      this.activeLeaderIndex = this.activeLeaderIndex + 1;
      this.cdr.markForCheck();
    }
  }

  formatLeaderIndex(index: number): string {
    return String(index + 1).padStart(2, '0');
  }

  get activeLeader() {
    return this.leaders[this.activeLeaderIndex];
  }

  get leaderTrackTransform(): string {
    return `translateX(-${this.activeLeaderIndex * 100}%)`;
  }

  formatStat(value: number, suffix: string): string {
    const formatted = value.toLocaleString('en-IN').replace(/,/g, ' ');
    return `${formatted}${suffix}`;
  }

  private transitionTrusted(index: number, direction: 'next' | 'prev', staged = false): void {
    if (
      index === this.selectedTrustedIndex &&
      index === this.displayedTrustedIndex &&
      this.caseHubAnimationPhase === 'idle'
    ) {
      return;
    }

    const token = ++this.caseHubTransitionToken;
    this.caseHubSlideDirection = direction;
    this.selectedTrustedIndex = index;
    this.clearCaseHubAnimationTimers();

    if (staged) {
      this.caseHubAnimationPhase = 'out';

      this.caseHubOutTimeoutId = setTimeout(() => {
        if (token !== this.caseHubTransitionToken) return;

        this.displayedTrustedIndex = index;
        this.caseHubAnimationPhase = 'in';

        this.caseHubInTimeoutId = setTimeout(() => {
          if (token !== this.caseHubTransitionToken) return;
          this.caseHubAnimationPhase = 'idle';
        }, this.caseHubInMs);
      }, this.caseHubOutMs);
      return;
    }

    this.displayedTrustedIndex = index;
    this.caseHubAnimationPhase = 'in';

    this.caseHubInTimeoutId = setTimeout(() => {
      if (token !== this.caseHubTransitionToken) return;
      this.caseHubAnimationPhase = 'idle';
    }, this.caseHubInMs);
  }

  private getTrustedDirection(targetIndex: number): 'next' | 'prev' {
    const total = this.trustedShowcases.length;
    const current = this.selectedTrustedIndex;
    const forwardDistance = (targetIndex - current + total) % total;
    const backwardDistance = (current - targetIndex + total) % total;
    return forwardDistance <= backwardDistance ? 'next' : 'prev';
  }

  private clearCaseHubAnimationTimers(): void {
    if (this.caseHubOutTimeoutId) {
      clearTimeout(this.caseHubOutTimeoutId);
      this.caseHubOutTimeoutId = null;
    }

    if (this.caseHubInTimeoutId) {
      clearTimeout(this.caseHubInTimeoutId);
      this.caseHubInTimeoutId = null;
    }
  }

  private setupSectionReveals(): void {
    const revealTargets: HTMLElement[] = Array.from(
      this.host.nativeElement.querySelectorAll(
        [
          '.case-hub__head',
          '.case-hub__logos',
          '.case-hub__body',
          '.stats-grid__card',
          '.stacked-card',
          '.services__stats',
          '.services__header',
          '.svc-tile',
          '.blog-hub__head',
          '.blog-card',
          '.leaders__title',
          '.leader-showcase',
          '.awards-hub__inner',
          '.proof-cards__title',
          '.proof-card',
          '.proof-cards__badges',
          '.leader-showcase'
        ].join(', ')
      )
    );

    if (!revealTargets.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => this.renderer.addClass(el, 'is-revealed'));
      return;
    }

    revealTargets.forEach((el, i) => {
      this.renderer.addClass(el, 'scroll-reveal');
      this.renderer.setStyle(el, '--reveal-delay', `${Math.min(i * 35, 280)}ms`);
    });

    this.sectionRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          this.renderer.addClass(target, 'is-revealed');
          this.sectionRevealObserver?.unobserve(target);
        });
      },
      {
        root: null,
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealTargets.forEach((el) => this.sectionRevealObserver?.observe(el));
  }

  private setupStatsCounters(): void {
    this.clearStatsTimers();

    const statsSection =
      (this.host.nativeElement.querySelector('.stats-showcase__stats') as HTMLElement | null) ||
      (this.host.nativeElement.querySelector('.stats-grid__wrap') as HTMLElement | null);

    // Fallback: if no section or reduced motion, set immediately
    if (
      !statsSection ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      this.applyStatsTargets();
      this.statsAnimationStarted = true;
      return;
    }

    this.statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.startStatsAnimation();
            this.statsObserver?.disconnect();
            this.statsObserver = null;
          }
        });
      },
      { threshold: 0.35 }
    );

    this.statsObserver.observe(statsSection);
  }

  private startStatsAnimation(): void {
    if (this.statsAnimationStarted) return;
    this.statsAnimationStarted = true;
    this.statsAnimationStart = null;

    const animate = (timestamp: number) => {
      if (this.statsAnimationStart === null) {
        this.statsAnimationStart = timestamp;
      }

      const elapsed = timestamp - this.statsAnimationStart;
      const progress = Math.min(elapsed / this.statsAnimationMs, 1);
      const eased = easeOutCubic(progress);

      this.statsDisplay.successful = Math.round(this.statsTargets.successful * eased);
      this.statsDisplay.running = Math.round(this.statsTargets.running * eased);
      this.statsDisplay.experts = Math.round(this.statsTargets.experts * eased);
      this.statsDisplay.happy = Math.round(this.statsTargets.happy * eased);

      if (progress < 1) {
        this.statsAnimationFrameId = requestAnimationFrame(animate);
      } else {
        this.applyStatsTargets();
        this.statsAnimationFrameId = null;
      }
    };

    this.statsAnimationFrameId = requestAnimationFrame(animate);
  }

  private applyStatsTargets(): void {
    this.statsDisplay.successful = this.statsTargets.successful;
    this.statsDisplay.running = this.statsTargets.running;
    this.statsDisplay.experts = this.statsTargets.experts;
    this.statsDisplay.happy = this.statsTargets.happy;
  }

  private resetStatsAnimation(): void {
    this.clearStatsTimers();
    this.statsAnimationStarted = false;
    this.statsDisplay.successful = this.statsTargets.successful;
    this.statsDisplay.running = this.statsTargets.running;
    this.statsDisplay.experts = this.statsTargets.experts;
    this.statsDisplay.happy = this.statsTargets.happy;
  }

  private restartStatsAnimation(): void {
    this.resetStatsAnimation();
  }

  private startCountForStat(key: keyof typeof this.statsTargets, delayMs = 0): void {
    const target = this.statsTargets[key];
    const stepMs = Math.max(10, Math.floor(this.statsAnimationMs / target));
    if (this.statsTimers[key] !== undefined) {
      clearInterval(this.statsTimers[key]!);
    }
    window.setTimeout(() => {
      this.statsTimers[key] = window.setInterval(() => {
        if (this.statsDisplay[key] >= target) {
          if (this.statsTimers[key] !== undefined) {
            clearInterval(this.statsTimers[key]!);
            delete this.statsTimers[key];
          }
          this.statsDisplay[key] = target;
          return;
        }
        this.statsDisplay[key] += 1;
      }, stepMs);
    }, delayMs);
  }

  private clearStatsTimers(): void {
    (Object.keys(this.statsTimers) as Array<keyof typeof this.statsTargets>).forEach((key) => {
      const timer = this.statsTimers[key];
      if (timer !== undefined) {
        clearInterval(timer);
      }
    });
    this.statsTimers = {};
  }


  private registerLandingIcons(): void {
    const icons: Record<string, string> = {
      'landing-play-arrow':
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>',
      'landing-chevron-left':
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',
      'landing-chevron-right':
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8.59 16.59 1.41 1.41L16 12 10 6 8.59 7.41 13.17 12z"/></svg>',
      'landing-arrow-forward':
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>',
      'landing-arrow-back':
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 4 1.41 1.41L7.83 11H20v2H7.83l5.58 5.59L12 20l-8-8z"/></svg>'
    };

    Object.entries(icons).forEach(([name, svg]) => {
      this.iconRegistry.addSvgIconLiteral(name, this.sanitizer.bypassSecurityTrustHtml(svg));
    });
  }

  titleCase(text: string | null | undefined): string {
    if (!text) return '';
    return text
      .split(' ')
      .map((word) =>
        word
          .split('-')
          .map((part) => {
            if (!part) return '';
            // Preserve existing short all-caps tokens like "CES", "SD", "WAN"
            const isAllCaps = part === part.toUpperCase();
            if (isAllCaps && part.length <= 4) return part;
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
          })
          .join('-')
      )
      .join(' ');
  }
}

// Smoother deceleration than linear
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

  
