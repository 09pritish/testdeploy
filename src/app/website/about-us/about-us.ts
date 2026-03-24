import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

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

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('journeyYearsScroller') private journeyYearsScroller?: ElementRef<HTMLElement>;

  readonly heroSlides: HeroSlide[] = [
    {
      title: 'Engineering Reliable Digital Foundations',
      body: 'CES designs, secures, and operates enterprise infrastructure so your teams can scale with confidence.',
      cta: 'Explore CES',
      image: 'assets/1.jpeg'
    },
    {
      title: 'From Design to Managed Operations',
      body: 'Our teams support network, cloud, data center, and cybersecurity journeys with measurable delivery outcomes.',
      cta: 'See our delivery model',
      image: 'assets/2.jpeg'
    },
    {
      title: 'Built for Always-On Enterprise Performance',
      body: 'With proactive support and strong governance, CES helps organizations run critical systems without disruption.',
      cta: 'Talk to CES',
      image: 'assets/3.jpeg'
    }
  ];

  activeHeroSlide = 0;
  private heroAutoSlideIntervalId: any = null;
  private sectionRevealObserver: IntersectionObserver | null = null;
  private removeResizeListener: (() => void) | null = null;
  private lastStickyTop = -1;

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

  openValueIndex = 0;

  readonly purposeTabs: PurposeTab[] = [
    {
      label: 'Clients',
      icon: 'business_center',
      heading: 'Client outcomes at enterprise scale',
      body: 'We help deliver business outcomes for our clients at speed and at scale by solving day-to-day and complex transformation challenges.',
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
      body: 'Our delivery teams combine deep technical capability with execution discipline across architecture, implementation, and support.',
      bullets: [
        'Cross-functional teams across network, cloud, and cybersecurity',
        'Continuous capability development through training and certifications',
        'Culture focused on ownership, mentoring, and transparent execution'
      ],
      image: 'assets/6.jpeg'
    },
    {
      label: 'Communities',
      icon: 'groups',
      heading: 'Communities and ecosystem impact',
      body: 'CES builds long-term value by engaging with institutions, partners, and communities through responsible technology initiatives.',
      bullets: [
        'Partnership programs supporting digital readiness',
        'Security and infrastructure awareness engagements',
        'Consistent emphasis on ethical and inclusive growth'
      ],
      image: 'assets/6.jpeg'
    },
    {
      label: 'Planet',
      icon: 'nature',
      heading: 'Sustainable infrastructure choices',
      body: 'We align infrastructure decisions with sustainability goals by optimizing architecture, operations, and lifecycle management.',
      bullets: [
        'Energy-conscious design and modernization approaches',
        'Operational efficiency through automation and observability',
        'Governance-led practices for long-term resilience'
      ],
      image: 'assets/6.jpeg'
    }
  ];

  activePurposeTab = 0;
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
  readonly journeyYearLoopItems = [0, 1, 2].flatMap((loop) =>
    this.journeyYears.map((item, index) => ({ item, index, key: `${loop}-${index}` }))
  );
  activeJourneyYearIndex = 3;
  private removeJourneyScrollListener: (() => void) | null = null;
  private journeyLoopSegmentHeight = 0;
  readonly sectionTabs = [
    { id: 'meet-ces', label: 'Meet CES' },
    { id: 'by-numbers', label: 'Vision & Mission' },
    { id: 'our-values', label: 'Our Values' },
    { id: 'our-purpose', label: 'Our Purpose' },
    { id: 'our-history', label: 'Our History' },
    { id: 'contact-us', label: 'Contact us' }
  ];
  activeSectionId = 'meet-ces';

  constructor(private host: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.startHeroAutoSlide();
  }

  ngAfterViewInit(): void {
    this.syncTabsStickyOffset();
    this.initJourneyYearsLoop();
    this.removeResizeListener = this.renderer.listen('window', 'resize', () => {
      this.syncTabsStickyOffset();
      this.refreshJourneyYearsLoopMetrics();
    });
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

    if (this.removeJourneyScrollListener) {
      this.removeJourneyScrollListener();
      this.removeJourneyScrollListener = null;
    }

  }

  get currentHeroSlide(): HeroSlide {
    return this.heroSlides[this.activeHeroSlide];
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

  trackByJourneyLoop(_: number, row: { key: string }): string {
    return row.key;
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

  private sectionTabsObserver: IntersectionObserver | null = null;

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
          '.about-hero',
          '.about-tabs',
          '.about-block',
          '.objective-list article',
          '.metrics-grid > div',
          '.values-accordion article',
          '.purpose-tabs button',
          '.purpose-panel',
          '.about-contact a'
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
          const target = entry.target as HTMLElement;
          this.renderer.addClass(target, 'is-revealed');
          this.sectionRevealObserver?.unobserve(target);
        });
      },
      {
        root: null,
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
        root: null,
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-28% 0px -55% 0px'
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
    return Math.max(headerHeight + 28, 112);
  }

  private initJourneyYearsLoop(): void {
    const scroller = this.journeyYearsScroller?.nativeElement;
    if (!scroller) return;

    this.refreshJourneyYearsLoopMetrics();
    this.removeJourneyScrollListener = this.renderer.listen(scroller, 'scroll', () => this.handleJourneyLoopScroll());
  }

  private refreshJourneyYearsLoopMetrics(): void {
    const scroller = this.journeyYearsScroller?.nativeElement;
    if (!scroller) return;

    const segment = Math.floor(scroller.scrollHeight / 3);
    if (!segment) return;

    this.journeyLoopSegmentHeight = segment;
    if (scroller.scrollTop === 0) {
      scroller.scrollTop = segment;
    }
  }

  private handleJourneyLoopScroll(): void {
    const scroller = this.journeyYearsScroller?.nativeElement;
    if (!scroller || !this.journeyLoopSegmentHeight) return;

    const min = this.journeyLoopSegmentHeight * 0.5;
    const max = this.journeyLoopSegmentHeight * 1.5;

    if (scroller.scrollTop < min) {
      scroller.scrollTop += this.journeyLoopSegmentHeight;
    } else if (scroller.scrollTop > max) {
      scroller.scrollTop -= this.journeyLoopSegmentHeight;
    }
  }
}
