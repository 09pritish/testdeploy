import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

export interface ClientStat {
  value: string;
  label: string;
}

export interface Client {
  name: string;
  category: string;
  description: string;
  logo: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  logoBg: string;
  logoInitial: string;
  artTone: string;
  image: string;
  stat1: ClientStat;
  stat2: ClientStat;
  stat3: ClientStat;
}

@Component({
  selector: 'app-company-overview',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './company-overview.html',
  styleUrl: './company-overview.scss',
})
export class CompanyOverview implements OnInit, OnDestroy {
  activeIndex = 1;
  private autoPlayInterval?: ReturnType<typeof setInterval>;
  private touchStartX: number | null = null;
  private touchCurrentX: number | null = null;
  private touchStartTime = 0;
  private lastTouchTime = 0;
  private lastTouchX = 0;
  private dragVelocity = 0;
  dragOffset = 0;
  isDragging = false;

  readonly intro = {
    title: "Ready for Now. Built for What's Next.",
    copy: [
      'CES Tech is committed to using our expertise, experience, and ecosystem of innovation to empower enterprises on their journeys.',
      'We harness the power of technology and our people to drive impactful outcomes at speed and scale, now and for the long haul.',
    ],
    ctaHref: '/about-us',
    ctaLabel: 'Learn more about CES Tech',
  };

  readonly overviewStats = [
    { value: '2356+', label: 'Successful Projects', icon: 'task_alt' },
    { value: '675+', label: 'Running Projects', icon: 'pending_actions' },
    { value: '254+', label: 'Skilled Experts', icon: 'groups' },
    { value: '100%', label: 'Happy Clients', icon: 'sentiment_satisfied_alt' },
  ];

  readonly clients: Client[] = [
    {
      name: 'Fortinet',
      category: 'Consumer Platforms',
      description:
        'Modernized high-volume food ordering systems with faster transaction paths, resilient integrations, and storefront orchestration.',
      logo: 'assets/fortinet.png',
      bgColor: '#f2ebd7',
      textColor: '#161616',
      accentColor: '#292929',
      logoBg: '#ffffff',
      logoInitial: 'FT',
      artTone: 'linear-gradient(145deg, #111111 0%, #2d2d2d 100%)',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '100%', label: 'checkout uptime' },
      stat2: { value: '4X', label: 'faster releases' },
      stat3: { value: '28%', label: 'higher conversion' },
    },
    {
      name: 'Aruba',
      category: 'Restaurant Tech',
      description:
        'Reworked omnichannel delivery flows and operational dashboards to keep campaigns, stores, and partner systems in sync.',
      logo: 'assets/aruba.png',
      bgColor: '#ff2139',
      textColor: '#fff6f7',
      accentColor: '#ffc5cc',
      logoBg: '#ffffff',
      logoInitial: 'AR',
      artTone: 'linear-gradient(145deg, #ffd3bf 0%, #ff9a8b 100%)',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '50%', label: 'faster menu launches' },
      stat2: { value: '22%', label: 'better repeat orders' },
      stat3: { value: '18%', label: 'lower support load' },
    },
    {
      name: 'Airtel',
      category: 'Retail Commerce',
      description:
        'Scaled campaign-ready commerce experiences with unified inventory visibility, premium storefront interactions, and faster merchandising.',
      logo: 'assets/airtel.png',
      bgColor: '#dfff6b',
      textColor: '#101010',
      accentColor: '#202020',
      logoBg: '#ffffff',
      logoInitial: 'AI',
      artTone: 'linear-gradient(145deg, #f4f4f4 0%, #bcbcbc 100%)',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '2M+', label: 'daily sessions' },
      stat2: { value: '500K', label: 'SKU syncs per day' },
      stat3: { value: '31%', label: 'faster page loads' },
    },
    {
      name: 'Vodafone',
      category: 'Digital Products',
      description:
        'Delivered a polished customer platform with richer account flows, smarter recommendations, and smoother device-first journeys.',
      logo: 'assets/vodafone.png',
      bgColor: '#ffffff',
      textColor: '#181818',
      accentColor: '#5d5d5d',
      logoBg: '#111111',
      logoInitial: 'VO',
      artTone: 'linear-gradient(145deg, #2d2d2d 0%, #090909 100%)',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '48%', label: 'better task completion' },
      stat2: { value: '3.2X', label: 'more engaged users' },
      stat3: { value: '12d', label: 'design-to-build cycle' },
    },
    {
      name: 'Delhi Metro',
      category: 'Travel Systems',
      description:
        'Improved booking, loyalty, and ops tooling with cleaner service layers and more reliable traveler-facing experiences.',
      logo: 'assets/delhimetro.png',
      bgColor: '#b8fbff',
      textColor: '#0e1a1c',
      accentColor: '#14484d',
      logoBg: '#ffffff',
      logoInitial: 'DM',
      artTone: 'linear-gradient(145deg, #e6fdff 0%, #8be8ef 100%)',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '99.95%', label: 'booking availability' },
      stat2: { value: '7', label: 'systems unified' },
      stat3: { value: '34%', label: 'fewer user drop-offs' },
    },
    {
      name: 'Cisco',
      category: 'Enterprise Platforms',
      description:
        'Built resilient internal workflows with richer analytics, dependable integrations, and cleaner decision dashboards for operations teams.',
      logo: 'assets/cisco.png',
      bgColor: '#141414',
      textColor: '#edf2f4',
      accentColor: '#9ca3af',
      logoBg: '#1f4fff',
      logoInitial: 'CS',
      artTone: 'linear-gradient(145deg, #3a3a3a 0%, #121212 100%)',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      stat1: { value: '90%', label: 'faster reporting' },
      stat2: { value: '1,000+', label: 'automated tasks' },
      stat3: { value: '24/7', label: 'ops visibility' },
    },
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.startAutoPlay();
  }

  trackByName(_: number, client: Client): string {
    return client.name;
  }

  prev(): void {
    this.activeIndex = (this.activeIndex - 1 + this.clients.length) % this.clients.length;
    this.resetDragVisuals();
    this.restartAutoPlay();
  }

  next(): void {
    this.activeIndex = (this.activeIndex + 1) % this.clients.length;
    this.resetDragVisuals();
    this.restartAutoPlay();
  }

  goTo(index: number): void {
    if (index === this.activeIndex) {
      return;
    }

    this.activeIndex = index;
    this.restartAutoPlay();
  }

  onTouchStart(event: TouchEvent): void {
    if (event.touches.length !== 1) {
      return;
    }

    this.touchStartX = event.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
    this.touchStartTime = performance.now();
    this.lastTouchTime = this.touchStartTime;
    this.lastTouchX = this.touchStartX;
    this.dragVelocity = 0;
    this.isDragging = true;
    this.dragOffset = 0;
    this.stopAutoPlay();
  }

  onTouchMove(event: TouchEvent): void {
    if (this.touchStartX === null || event.touches.length !== 1) {
      return;
    }

    const now = performance.now();
    this.touchCurrentX = event.touches[0].clientX;
    const rawOffset = this.touchCurrentX - this.touchStartX;
    const deltaTime = Math.max(now - this.lastTouchTime, 1);

    this.dragVelocity = (this.touchCurrentX - this.lastTouchX) / deltaTime;
    this.lastTouchTime = now;
    this.lastTouchX = this.touchCurrentX;
    this.dragOffset = this.applyDragResistance(rawOffset);
  }

  onTouchEnd(): void {
    if (this.touchStartX === null || this.touchCurrentX === null) {
      this.resetTouchState();
      this.startAutoPlay();
      return;
    }

    const elapsed = Math.max(performance.now() - this.touchStartTime, 1);
    const rawDeltaX = this.touchCurrentX - this.touchStartX;
    const projectedDelta = rawDeltaX + this.dragVelocity * 180;
    const swipeThreshold = 72;
    const quickFlick = Math.abs(rawDeltaX) > 24 && Math.abs(this.dragVelocity) > 0.42;
    if (projectedDelta <= -swipeThreshold || (quickFlick && elapsed < 280 && this.dragVelocity < 0)) {
      this.next();
    } else if (projectedDelta >= swipeThreshold || (quickFlick && elapsed < 280 && this.dragVelocity > 0)) {
      this.prev();
    } else {
      this.resetDragVisuals();
      this.startAutoPlay();
    }

    this.resetTouchState();
  }

  onTouchCancel(): void {
    this.resetDragVisuals();
    this.resetTouchState();
    this.startAutoPlay();
  }

  getCardClasses(index: number): Record<string, boolean> {
    const position = this.getRelativePosition(index);

    return {
      'card--active': position === 0,
      'card--prev': position === -1,
      'card--next': position === 1,
      'card--hidden': Math.abs(position) > 1,
    };
  }

  getCardStyles(index: number): Record<string, string | number> {
    const client = this.clients[index];
    const position = this.getRelativePosition(index);
    const dragRatio = Math.max(Math.min(this.dragOffset / 260, 1), -1);
    const activeShift = this.dragOffset * 0.28;
    const neighborShift = this.dragOffset * 0.18;
    const farShift = this.dragOffset * 0.1;
    const dragShift =
      position === 0 ? activeShift :
      Math.abs(position) === 1 ? neighborShift :
      0;
    const dragTilt =
      position === 0 ? dragRatio * 2.4 :
      position === -1 ? dragRatio * 1.2 :
      position === 1 ? dragRatio * 1.2 :
      dragRatio * 0.65;
    const dragLift = Math.abs(dragRatio) * -10;

    return {
      '--card-bg': client.bgColor,
      '--card-color': client.textColor,
      '--card-accent': client.accentColor,
      '--card-logo-bg': client.logoBg,
      '--card-art': client.artTone,
      '--depth': `${10 - Math.min(Math.abs(position), 5)}`,
      '--drag-shift': `${dragShift}px`,
      '--drag-tilt': `${dragTilt}deg`,
      '--drag-lift': `${dragLift}px`,
    };
  }

  getCardAriaLabel(index: number): string {
    const client = this.clients[index];
    return `${client.name} case study`;
  }

  private getRelativePosition(index: number): number {
    const total = this.clients.length;
    let delta = index - this.activeIndex;

    if (delta > total / 2) {
      delta -= total;
    }

    if (delta < -total / 2) {
      delta += total;
    }

    return delta;
  }

  private startAutoPlay(): void {
    if (this.autoPlayInterval) {
      return;
    }

    this.autoPlayInterval = setInterval(() => {
      this.next();
    }, 3600);
  }

  private stopAutoPlay(): void {
    if (!this.autoPlayInterval) {
      return;
    }

    clearInterval(this.autoPlayInterval);
    this.autoPlayInterval = undefined;
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  private applyDragResistance(offset: number): number {
    const limit = 140;
    const sign = Math.sign(offset);
    const distance = Math.abs(offset);

    if (distance <= limit) {
      return offset;
    }

    const overflow = distance - limit;
    return sign * (limit + overflow * 0.35);
  }

  private resetDragVisuals(): void {
    this.dragOffset = 0;
    this.isDragging = false;
    this.dragVelocity = 0;
  }

  private resetTouchState(): void {
    this.touchStartX = null;
    this.touchCurrentX = null;
    this.touchStartTime = 0;
    this.lastTouchTime = 0;
    this.lastTouchX = 0;
  }
}
