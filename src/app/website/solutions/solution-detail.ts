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
  caption: string;
  points: string[];
}

interface MetricItem {
  icon: string;
  title: string;
  description: string;
}

interface CapabilityCard {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface ProofBadge {
  value: string;
  label: string;
}

interface ConsultingPanel {
  index: string;
  title: string;
  icon: string;
  description: string;
}

interface ClientProof {
  title: string;
  description: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-solution-detail',
  standalone: false,
  templateUrl: './solution-detail.html',
  styleUrl: './solution-detail.scss'
})
export class SolutionDetail {
  readonly solutions = CES_SOLUTIONS;
  activeStoryIndex = 0;
  activeTrackIndex = 0;
  activeConsultingIndex = 0;

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
    const titles = ['Assessment & Architecture', 'Implementation & Rollout', 'Optimization & Governance', 'Scale & Continuity'];
    const captions = ['Understand the current state', 'Deploy with controlled execution', 'Tune for stability and value', 'Keep the environment future-ready'];

    return titles.map((title, index) => {
      const highlight = highlights[index] || this.solution.summary;
      return {
        title,
        caption: captions[index],
        description: `${highlight}. CES aligns solution design, execution planning, and lifecycle ownership around business priorities rather than isolated technical tasks.`,
        points: [
          `${highlight} mapped to operational needs`,
          `Phased delivery model for ${this.displayTitle.toLowerCase()}`,
          'Governance checkpoints and measurable performance outcomes'
        ]
      };
    });
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

  get heroTrustPoints(): string[] {
    return ['Enterprise-ready delivery', 'Secure-by-design approach', 'Lifecycle ownership from planning to support'];
  }

  get metrics(): MetricItem[] {
    return [
      {
        icon: 'verified_user',
        title: 'Expert-led delivery with enterprise control',
        description: 'Skilled CES teams plan, secure, and deploy infrastructure changes with operational discipline.'
      },
      {
        icon: 'autorenew',
        title: 'Automation that reduces manual overhead',
        description: 'We streamline repeatable workflows so service operations become faster, cleaner, and easier to scale.'
      },
      {
        icon: 'policy',
        title: '24x7 support for resilient operations',
        description: 'Round-the-clock assistance helps teams maintain continuity, reduce downtime, and act quickly when conditions change.'
      },
      {
        icon: 'hub',
        title: 'Connected systems that work as one',
        description: 'CES aligns networks, platforms, and business tools so environments stay integrated and future-ready.'
      }
    ];
  }

  get capabilityCards(): CapabilityCard[] {
    const highlights = this.solution.highlights;
    return [
      {
        title: highlights[0] || `${this.displayTitle} strategy`,
        description: `${this.solution.description} We begin with clarity around business objectives, current-state gaps, and the most practical target architecture.`
      },
      {
        title: highlights[1] || `${this.displayTitle} enablement`,
        description: `CES structures deployment around resilience, governance, and operational readiness so the rollout supports real teams and real workloads.`
      },
      {
        title: highlights[2] || `${this.displayTitle} optimization`,
        description: `After implementation, we focus on performance tuning, lifecycle management, and long-term improvement rather than one-time delivery.`
      }
    ];
  }

  get proofBadges(): ProofBadge[] {
    return [
      { value: '24x7', label: 'Support readiness' },
      { value: 'SLA', label: 'Delivery discipline' }
    ];
  }

  get panelBadges(): ProofBadge[] {
    return [
      { value: '01', label: 'Focused delivery track' },
      { value: 'End-to-end', label: 'Execution ownership' }
    ];
  }

  get heroHighlights(): string[] {
    return this.solution.highlights.slice(0, 3);
  }

  get proofChips(): string[] {
    return ['Architecture-led planning', 'Security-conscious execution', 'Operational continuity mindset'];
  }

  get consultingPanels(): ConsultingPanel[] {
    return [
      {
        index: '01',
        title: 'Managed Services',
        icon: 'support_agent',
        description:
          'CES managed services provide continuous operational ownership across monitoring, support, and issue resolution, helping teams stay focused on growth while we keep infrastructure stable, secure, and responsive.'
      },
      {
        index: '02',
        title: 'Network Implementation',
        icon: 'lan',
        description:
          'Our network implementation practice covers planning, rollout, and configuration of enterprise-ready environments so new deployments and upgrades align with business needs from day one.'
      },
      {
        index: '03',
        title: 'Network Audit',
        icon: 'fact_check',
        description:
          'CES network audit engagements assess devices, topology, performance, and operational risks to uncover improvement areas and create a practical roadmap for better resilience.'
      },
      {
        index: '04',
        title: 'VAPT',
        icon: 'gpp_good',
        description:
          'Vulnerability Assessment and Penetration Testing helps organizations identify, validate, and reduce security gaps across the IT environment before they become business-impacting incidents.'
      },
      {
        index: '05',
        title: 'Annual Maintenance Contract',
        icon: 'engineering',
        description:
          'Our AMC model ensures regular maintenance, preventive checks, and responsive support so infrastructure remains reliable, cost-efficient, and easier to manage over time.'
      },
      {
        index: '06',
        title: 'Rental Services',
        icon: 'devices',
        description:
          'CES rental services give businesses flexible access to essential IT infrastructure devices without long ownership cycles, making it easier to scale projects and meet short-term needs.'
      }
    ];
  }

  get activeConsultingPanel(): ConsultingPanel {
    return this.consultingPanels[this.activeConsultingIndex] || this.consultingPanels[0];
  }

  get clientProofs(): ClientProof[] {
    return [
      {
        title: 'Beyond IT Services, We Deliver Solutions',
        description:
          'CES brings together consulting, implementation, support, and operational continuity so clients can move from problem identification to measurable outcomes with one team.',
        value: '24/7',
        label: 'Call services available'
      },
      {
        title: 'Best IT Consulting',
        description:
          'We combine practical field expertise with forward-looking planning to help organizations modernize infrastructure, improve reliability, and stay ready for change.',
        value: '2015',
        label: 'Year our CES journey began'
      },
      {
        title: 'Customer-Centric Support',
        description:
          'Round-the-clock assistance, site survey capability, expert team members, and technology-led service delivery keep businesses supported at every stage.',
        value: '1 Team',
        label: 'Architecture to support ownership'
      }
    ];
  }

  get roiBannerPoints(): string[] {
    return ['24x7 customer support', 'Expert team members', 'Automation-led operations'];
  }

  get processSteps(): ProcessStep[] {
    return [
      {
        title: 'Assess & Prioritize',
        description: `We review the current environment, identify pain points, and define where ${this.displayTitle.toLowerCase()} will create the highest business impact first.`
      },
      {
        title: 'Design & Align',
        description: `Our team shapes the target architecture, rollout plan, and governance checkpoints so business, IT, and operations stay aligned.`
      },
      {
        title: 'Implement & Stabilize',
        description: 'We execute in phases, reduce delivery risk, and validate performance before broad production adoption.'
      },
      {
        title: 'Optimize & Support',
        description: 'Post-launch, CES continues with tuning, support readiness, and roadmap guidance so the environment keeps improving.'
      }
    ];
  }

  get ctaPoints(): string[] {
    return ['No one-size-fits-all rollout', 'Architecture and execution under one partner', 'Practical guidance for teams, operations, and scale'];
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

  nextTrack(): void {
    if (this.serviceTracks.length === 0) {
      return;
    }
    this.activeTrackIndex = (this.activeTrackIndex + 1) % this.serviceTracks.length;
  }

  prevTrack(): void {
    if (this.serviceTracks.length === 0) {
      return;
    }
    this.activeTrackIndex = (this.activeTrackIndex - 1 + this.serviceTracks.length) % this.serviceTracks.length;
  }

  setActiveConsulting(index: number): void {
    this.activeConsultingIndex = index;
  }

  setProofHover(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    target.style.setProperty('--hover-x', `${offsetX}px`);
    target.style.setProperty('--hover-y', `${offsetY}px`);
  }

}
