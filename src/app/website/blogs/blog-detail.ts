import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BLOGS_DATA } from './blogs.data';

@Component({
  selector: 'app-blog-detail',
  standalone: false,
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss'
})
export class BlogDetail implements OnInit, AfterViewInit, OnDestroy {
  readonly blogs = BLOGS_DATA;
  private revealObserver: IntersectionObserver | null = null;
  private routeSub: Subscription | null = null;
  private currentSlug = this.blogs[0].slug;

  constructor(
    private route: ActivatedRoute,
    private host: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      this.currentSlug = params.get('slug') || this.blogs[0].slug;
      window.scrollTo({ top: 0, behavior: 'auto' });
      queueMicrotask(() => this.setupScrollReveal());
    });
  }

  get blog() {
    return this.blogs.find((item) => item.slug === this.currentSlug) || this.blogs[0];
  }

  get relatedBlogs() {
    return this.blogs.filter((item) => item.slug !== this.blog.slug).slice(0, 4);
  }

  get themeClass(): string {
    return `blog-detail--${this.blog.tone}`;
  }

  get pulseStats(): Array<{ value: string; text: string }> {
    const seed = this.blog.slug.length;
    const values = [`${78 + (seed % 14)}%`, `${42 + (seed % 28)}%`, `${24 + (seed % 18)}%`];
    return [
      { value: values[0], text: 'of leaders expect higher technology-driven change this year.' },
      { value: values[1], text: 'report that operational readiness is still catching up to strategy.' },
      { value: values[2], text: 'have reached sustained enterprise-wide impact at scale.' }
    ];
  }

  ngAfterViewInit(): void {
    this.setupScrollReveal();
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
    this.revealObserver = null;
    this.routeSub?.unsubscribe();
    this.routeSub = null;
  }

  private setupScrollReveal(): void {
    this.revealObserver?.disconnect();

    const revealTargets: HTMLElement[] = Array.from(
      this.host.nativeElement.querySelectorAll('.reveal-on-scroll')
    );

    if (!revealTargets.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((el) => this.renderer.addClass(el, 'is-revealed'));
      return;
    }

    revealTargets.forEach((el, i) => {
      this.renderer.removeClass(el, 'is-revealed');
      this.renderer.setStyle(el, '--reveal-delay', `${Math.min(i * 80, 360)}ms`);
    });

    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          this.renderer.addClass(entry.target, 'is-revealed');
          this.revealObserver?.unobserve(entry.target);
        });
      },
      {
        root: null,
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    revealTargets.forEach((el) => this.revealObserver?.observe(el));
  }
}
