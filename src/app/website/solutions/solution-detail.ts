import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CES_SOLUTIONS, CesSolution } from './solutions.data';

interface StorySlide {
  title: string;
  description: string;
  image: string;
  href: string;
}

interface ServiceTrack {
  title: string;
  description: string;
}

interface WhyChooseItem {
  image: string;
  title: string;
}

@Component({
  selector: 'app-solution-detail',
  standalone: false,
  templateUrl: './solution-detail.html',
  styleUrl: './solution-detail.scss'
})
export class SolutionDetail {
  readonly solutions = CES_SOLUTIONS;
  readonly whyChooseItems: WhyChooseItem[] = [
    { image: 'assets/why-choose/satisfaction gurantee.png', title: 'Satisfaction Guarantee' },
    { image: 'assets/why-choose/satisfied clients.png', title: 'Satisfied Clients' },
    { image: 'assets/why-choose/future proofing.png', title: 'Future-Proofing' },
    { image: 'assets/why-choose/security.png', title: 'Security' },
    { image: 'assets/why-choose/global reach.png', title: 'Global Reach' },
    { image: 'assets/why-choose/customer support.png', title: '24x7 Customer Support' },
    { image: 'assets/why-choose/quality.png', title: 'Best Quality Service' },
    { image: 'assets/why-choose/connect.png', title: 'Easy to Connect' },
    { image: 'assets/why-choose/affordable.png', title: 'Affordable Cost' },
    { image: 'assets/why-choose/scalability.png', title: 'Scalability' },
    { image: 'assets/why-choose/latency.png', title: 'Low Latency' },
    { image: 'assets/why-choose/reliability.png', title: 'Reliability' }
  ];
  activeStoryIndex = 0;
  activeTrackIndex = 0;

  constructor(private route: ActivatedRoute) {}

  get solution(): CesSolution {
    const slug = this.route.snapshot.paramMap.get('slug');
    return this.solutions.find((item) => item.slug === slug) || this.solutions[0];
  }

  get solutionIndex(): number {
    return this.solutions.findIndex((item) => item.slug === this.solution.slug);
  }

  get displayTitle(): string {
    return this.solution.title.replace(/\s+Solution$/i, '');
  }

  get clientStories(): StorySlide[] {
    const pool = this.solutions.filter((item) => item.slug !== this.solution.slug).slice(0, 5);
    return pool.map((item) => ({
      title: `${item.title} improves real business outcomes`,
      description: `${item.summary} CES teams deliver structured execution plans and measurable performance improvements.`,
      image: item.image,
      href: `/solutions/${item.slug}`
    }));
  }

  get activeStory(): StorySlide {
    return this.clientStories[this.activeStoryIndex] || this.clientStories[0];
  }

  get serviceTracks(): ServiceTrack[] {
    const highlights = this.solution.highlights.slice(0, 4);
    const base = [
      `${this.displayTitle} foundations`,
      `${this.displayTitle} operations`,
      `${this.displayTitle} optimization`,
      `${this.displayTitle} transformation`
    ];

    return base.map((title, index) => ({
      title: highlights[index] || title,
      description:
        highlights[index]
          ? `${highlights[index]} with architecture, governance, and lifecycle delivery that is aligned to your business goals.`
          : `${this.solution.summary} executed with phased implementation and measurable outcomes.`
    }));
  }

  get activeTrack(): ServiceTrack {
    return this.serviceTracks[this.activeTrackIndex] || this.serviceTracks[0];
  }

  get partnerCards() {
    return this.solutions
      .filter((item) => item.slug !== this.solution.slug)
      .slice(0, 3)
      .map((item) => ({
        title: `${item.category} Programs`,
        heading: item.title,
        description: item.summary,
        image: item.image,
        href: `/solutions/${item.slug}`
      }));
  }


  setActiveStory(index: number): void {
    this.activeStoryIndex = index;
  }

  nextStory(): void {
    if (this.clientStories.length === 0) {
      return;
    }
    this.activeStoryIndex = (this.activeStoryIndex + 1) % this.clientStories.length;
  }

  prevStory(): void {
    if (this.clientStories.length === 0) {
      return;
    }
    this.activeStoryIndex = (this.activeStoryIndex - 1 + this.clientStories.length) % this.clientStories.length;
  }

  setActiveTrack(index: number): void {
    this.activeTrackIndex = index;
  }

}

