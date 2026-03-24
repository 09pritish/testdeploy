import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

interface HeroSlide {
  title: string;
  body: string;
  cta: string;
  image: string;
}

interface ValueItem {
  title: string;
  body: string;
  icon: string;
}

interface PurposeTab {
  label: string;
  icon: string;
  heading: string;
  body: string;
  bullets: string[];
  image: string;
}

interface JourneyYear {
  year: string;
  title: string;
  points: string[];
  icon: string;
}

interface MetricItem {
  value: string;
  label: string;
}

interface ContactTag {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs implements OnInit, AfterViewInit, OnDestroy {
  readonly heroSlides: HeroSlide[] = [
    {
      title: 'Engineering Reliable Digital Foundations',
      body: 'CES designs, secures, and operates enterprise infrastructure so your teams can scale with confidence across networking, cloud, and cybersecurity.',
      cta: 'Explore CES',
      image: 'assets/1.jpeg'
    },
    {
      title: 'From Design to Managed Operations',
      body: 'Our teams support network, cloud, data center, and cybersecurity journeys with measurable delivery outcomes and accountable execution.',
      cta: 'See our delivery model',
      image: 'assets/2.avif'
    },
    {
      title: 'Built for Always-On Enterprise Performance',
      body: 'With proactive support, strong governance, and expert-led service operations, CES helps organizations run critical systems without disruption.',
      cta: 'Talk to CES',
      image: 'assets/3.jpg'
    }
  ];

  readonly capabilityTicker = [
    'Enterprise Networking',
    'Cloud Modernization',
    'Cybersecurity',
    'AI Operations',
    'Data Center Management',
    'Managed Services',
    'Digital Transformation',
    'Infrastructure Design',
    'Observability',
    'Hybrid Cloud',
    'Zero Trust Security',
    'DevOps & Automation'
  ];
  readonly capabilityTickerLoop = [...this.capabilityTicker, ...this.capabilityTicker];

  readonly missionMetrics: MetricItem[] = [
    { value: '$14.5B', label: 'Revenue' },
    { value: '226K+', label: 'People' },
    { value: '60', label: 'Countries' },
    { value: '167', label: 'Nationalities' },
    { value: '220+', label: 'Delivery Centers' },
    { value: '70+', label: 'Innovation Labs' }
  ];

  readonly verticals = [
    'Financial Services',
    'Manufacturing',
    'Healthcare',
    'Telecom',
    'Media',
    'Retail',
    'Public Services'
  ];

  readonly objectives = [
    {
      icon: 'architecture',
      text: 'Leadership through differentiated services and products leveraging our engineering pedigree'
    },
    {
      icon: 'groups',
      text: 'Employer of choice for professional services talent across chosen geographies'
    },
    {
      icon: 'memory',
      text: 'Preferred digital and AI partner for Global 2000 and emerging enterprises in chosen markets'
    },
    {
      icon: 'public',
      text: 'Weave ESG (Environmental, Social and Governance) into business strategy'
    },
    {
      icon: 'bar_chart',
      text: 'Continue to deliver top quartile TSR (Total Shareholder Return) over the medium term'
    }
  ];

  readonly values: ValueItem[] = [
    {
      title: 'Integrity',
      body: 'We maintain high ethical standards and remain committed to doing what is right for clients, teams, and partners.',
      icon: 'verified_user'
    },
    {
      title: 'Inclusion',
      body: 'We build teams where diverse perspectives and backgrounds strengthen decision-making and innovation.',
      icon: 'diversity_3'
    },
    {
      title: 'Value Creation',
      body: 'We focus on practical outcomes that improve reliability, performance, and business value for customers.',
      icon: 'lightbulb'
    },
    {
      title: 'People-Centricity',
      body: 'We invest in our people and collaborate with empathy, accountability, and shared ownership.',
      icon: 'group'
    },
    {
      title: 'Social Responsibility',
      body: 'We contribute to communities through responsible delivery, compliance, and sustainable practices.',
      icon: 'eco'
    }
  ];

  readonly purposeTabs: PurposeTab[] = [
    {
      label: 'Clients',
      icon: 'business_center',
      heading: 'Client outcomes at enterprise scale',
      body: 'We help deliver business outcomes for our clients at speed and at scale by solving day-to-day operational demands as well as complex transformation challenges.',
      bullets: [
        'Trusted partner across network, cloud, security, and managed services programs',
        'Delivery model aligned to SLA, governance, and measurable ROI',
        'Long-term partnerships built on reliability and domain expertise'
      ],
      image: 'assets/6.jpeg'
    },
    {
      label: 'People',
      icon: 'person',
      heading: 'People-first engineering culture',
      body: 'Our delivery teams combine deep technical capability with disciplined execution across architecture, implementation, support, and lifecycle management.',
      bullets: [
        'Cross-functional teams across network, cloud, and cybersecurity',
        'Continuous capability development through training and certifications',
        'Culture focused on ownership, mentoring, and transparent execution'
      ],
      image: 'assets/4.jpeg'
    },
    {
      label: 'Communities',
      icon: 'groups',
      heading: 'Communities and ecosystem impact',
      body: 'CES builds long-term value by engaging with institutions, partners, and communities through responsible technology initiatives and digital readiness programs.',
      bullets: [
        'Partnership programs supporting digital readiness',
        'Security and infrastructure awareness engagements',
        'Consistent emphasis on ethical and inclusive growth'
      ],
      image: 'assets/5.jpeg'
    },
    {
      label: 'Planet',
      icon: 'nature',
      heading: 'Sustainable infrastructure choices',
      body: 'We align infrastructure decisions with sustainability goals by optimizing architecture, operations, energy efficiency, and lifecycle management.',
      bullets: [
        'Energy-conscious design and modernization approaches',
        'Operational efficiency through automation and observability',
        'Governance-led practices for long-term resilience'
      ],
      image: 'assets/6.jpeg'
    }
  ];

  readonly journeyYears: JourneyYear[] = [
    {
      year: '2003-05',
      title: 'Foundation and early scale-up',
      points: [
        'Built core delivery capabilities across enterprise infrastructure and support services.',
        'Established early customer partnerships and regional execution teams.'
      ],
      icon: 'rocket_launch'
    },
    {
      year: '2008',
      title: 'Global expansion phase',
      points: [
        'Expanded into new delivery geographies with stronger operations governance.',
        'Scaled managed services programs for enterprise clients.'
      ],
      icon: 'public'
    },
    {
      year: '2014',
      title: 'Pioneering partnership models',
      points: [
        'Opened co-innovation engagements with strategic banking and enterprise partners.',
        'Accelerated digital solution delivery through ecosystem collaboration.'
      ],
      icon: 'trending_up'
    },
    {
      year: '2018',
      title: 'Products and platform momentum',
      points: [
        'Strengthened software and automation offerings for modern IT operations.',
        'Scaled cloud and platform-led transformation programs.'
      ],
      icon: 'code'
    },
    {
      year: '2023',
      title: 'AI and cybersecurity acceleration',
      points: [
        'Expanded AI-enabled operations and proactive security capabilities.',
        'Improved customer outcomes through integrated observability and resilience practices.'
      ],
      icon: 'security'
    },
    {
      year: '2024',
      title: 'Enterprise modernization at scale',
      points: [
        'Delivered large modernization programs across network, cloud, and data center.',
        'Advanced responsible delivery with stronger governance and sustainability focus.'
      ],
      icon: 'hub'
    }
  ];

  readonly contactTags: ContactTag[] = [
    { icon: 'security', label: 'Cybersecurity' },
    { icon: 'cloud', label: 'Cloud Modernization' },
    { icon: 'router', label: 'Secure Networking' },
    { icon: 'support_agent', label: 'Managed Services' }
  ];

  readonly sectionTabs = [
    { id: 'meet-ces', label: 'Meet CES' },
    { id: 'mission', label: 'Mission' },
    { id: 'our-values', label: 'Our Values' },
    { id: 'our-purpose', label: 'Our Purpose' },
    { id: 'our-history', label: 'Our History' },
    { id: 'contact-us', label: 'Contact Us' }
  ];

  activeHeroSlide = 0;
  openValueIndex = 0;
  activePurposeTab = 0;
  activeJourneyYearIndex = 0;
  activeSectionId = 'meet-ces';

  private heroAutoSlideIntervalId: any = null;
  private sectionRevealObserver: IntersectionObserver | null = null;
  private sectionTabsObserver: IntersectionObserver | null = null;
  private removeResizeListener: (() => void) | null = null;
  private lastStickyTop = -1;

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startHeroAutoSlide();
  }

  ngAfterViewInit(): void {
    this.syncTabsStickyOffset();
    this.removeResizeListener = this.renderer.listen('window', 'resize', () => this.syncTabsStickyOffset());
    this.setupSectionReveals();
    this.setupSectionTabsObserver();
  }

  ngOnDestroy(): void {
    if (this.heroAutoSlideIntervalId) {
      clearInterval(this.heroAutoSlideIntervalId);
      this.heroAutoSlideIntervalId = null;
    }

    if (this.sectionRevealObserver) {
      this.sectionRevealObserver.disconnect();
      this.sectionRevealObserver = null;
    }

    if (this.sectionTabsObserver) {
      this.sectionTabsObserver.disconnect();
      this.sectionTabsObserver = null;
    }

    if (this.removeResizeListener) {
      this.removeResizeListener();
      this.removeResizeListener = null;
    }
  }

  get currentHeroSlide(): HeroSlide {
    return this.heroSlides[this.activeHeroSlide];
  }

  get activePurpose(): PurposeTab {
    return this.purposeTabs[this.activePurposeTab];
  }

  selectHeroSlide(index: number): void {
    this.activeHeroSlide = index;
    this.startHeroAutoSlide();
  }

  toggleValue(index: number): void {
    this.openValueIndex = this.openValueIndex === index ? -1 : index;
  }

  selectPurposeTab(index: number): void {
    this.activePurposeTab = index;
  }

  selectJourneyYear(index: number): void {
    this.activeJourneyYearIndex = index;
  }

  onTabClick(event: Event, id: string): void {
    event.preventDefault();
    this.activeSectionId = id;

    const target: HTMLElement | null = this.host.nativeElement.querySelector(`#${id}`);
    if (!target) return;

    const offset = this.getStickyTopOffset() + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  private startHeroAutoSlide(): void {
    if (this.heroAutoSlideIntervalId) {
      clearInterval(this.heroAutoSlideIntervalId);
    }

    this.heroAutoSlideIntervalId = setInterval(() => {
      this.activeHeroSlide = (this.activeHeroSlide + 1) % this.heroSlides.length;
    }, 5600);
  }

  private setupSectionReveals(): void {
    const revealTargets: HTMLElement[] = Array.from(
      this.host.nativeElement.querySelectorAll(
        [
          '.hero-inner > *',
          '.hero-glass-wrap',
          '.ap-ticker',
          '.stat-item',
          '.ap-tabs-nav',
          '.meet-copy > *',
          '.media-frame',
          '.vision-card',
          '.mission-img',
          '.mission-copy > *',
          '.mission-metric',
          '.values-head',
          '.values-img',
          '.acc-item',
          '.purpose-tab',
          '.purpose-panel',
          '.timeline-item',
          '.contact-inner > *'
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
      this.renderer.setStyle(el, '--reveal-delay', `${Math.min(i * 35, 260)}ms`);
    });

    this.sectionRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.renderer.addClass(entry.target, 'is-revealed');
          this.sectionRevealObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealTargets.forEach((el) => this.sectionRevealObserver?.observe(el));
  }

  private setupSectionTabsObserver(): void {
    const sections: HTMLElement[] = this.sectionTabs
      .map((tab) => this.host.nativeElement.querySelector(`#${tab.id}`))
      .filter(Boolean);

    if (!sections.length || !('IntersectionObserver' in window)) return;

    this.sectionTabsObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        this.activeSectionId = (visible[0].target as HTMLElement).id;
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-24% 0px -52% 0px'
      }
    );

    sections.forEach((section) => this.sectionTabsObserver?.observe(section));
  }

  private syncTabsStickyOffset(): void {
    const stickyTop = this.getStickyTopOffset();
    if (stickyTop === this.lastStickyTop) return;
    this.lastStickyTop = stickyTop;
    this.renderer.setStyle(this.host.nativeElement, '--about-tabs-top', `${stickyTop}px`);
  }

  private getStickyTopOffset(): number {
    const header = document.querySelector('.header-shell') as HTMLElement | null;
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 112;
    return Math.max(headerHeight + 18, 108);
  }
}
