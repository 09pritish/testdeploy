import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

interface CaseMetric {
  label: string;
  value: string;
  helper?: string;
}

interface CaseSection {
  heading: string;
  body: string;
  bullets?: string[];
  image?: string;
}

interface CaseStudyData {
  slug: string;
  partner: string;
  logo: string;
  heroTitle: string;
  heroSummary: string;
  heroImage: string;
  industry: string;
  location?: string;
  timeline?: string;
  overview: string;
  challenge: CaseSection;
  solution: CaseSection;
  outcomes: CaseMetric[];
  keyTakeaways: string[];
  gallery?: string[];
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: 'delhi-metro',
    partner: 'Delhi Metro',
    logo: 'assets/delhimetro.png',
    heroTitle: 'Transit network modernization for metro operations',
    heroSummary:
      'CES delivered resilient station connectivity, segmented operations, and proactive monitoring to keep transit services always-on.',
    heroImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=80',
    industry: 'Transportation',
    location: 'India',
    timeline: '12-month rollout',
    overview:
      'Transit operations needed strict uptime and resilient communication across distributed, high-density environments.',
    challenge: {
      heading: 'Challenge',
      body: 'Guarantee station uptime, centralized visibility, and rapid incident response across the metro footprint.',
      bullets: [
        'High passenger volumes and mission-critical systems across stations',
        'Limited failover paths and inconsistent monitoring',
        'Need for segmented operational zones and secure inter-station traffic'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Designed and deployed failover-ready SD-WAN paths, segmented operational zones, and 24/7 network monitoring with clear runbooks.',
      bullets: [
        'Policy-driven SD-WAN with automatic failover',
        'Centralized monitoring with actionable alerts and playbooks',
        'Segmentation between OT, passenger services, and admin networks'
      ],
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '38%', label: 'Faster incident response', helper: 'Mean time to resolve dropped below 12 minutes' },
      { value: '99.97%', label: 'Network availability', helper: 'Across critical station systems' },
      { value: '24/7', label: 'Command visibility', helper: 'Unified NOC dashboards and alerts' }
    ],
    keyTakeaways: [
      'Failover-ready designs reduced downtime risk during peak ridership.',
      'Runbooks and monitoring improved coordination between station ops and the NOC.',
      'Segmentation strengthened security for OT and passenger services.'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092921461-eab10380f308?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    slug: 'fortinet',
    partner: 'Fortinet',
    logo: 'assets/fortinet.png',
    heroTitle: 'Unified security rollout for distributed enterprises',
    heroSummary:
      'Improved policy consistency and operational control with integrated network and security modernization.',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=80',
    industry: 'Enterprise Security',
    location: 'Global',
    timeline: '9-month program',
    overview:
      'A global enterprise required consistent policy enforcement, simplified operations, and improved threat visibility across branches.',
    challenge: {
      heading: 'Challenge',
      body: 'Disparate security stacks created drift, operational friction, and blind spots.',
      bullets: [
        'Inconsistent policy rollout across regions',
        'Limited visibility into east-west traffic',
        'Operational overhead from fragmented tooling'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Standardized a Fortinet-based secure network fabric with centralized governance, templated rollouts, and continuous monitoring.',
      bullets: [
        'Template-led device deployment and policy governance',
        'Integrated SD-WAN and security operations',
        'Health, performance, and security telemetry in unified dashboards'
      ],
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '3x', label: 'Faster policy rollout', helper: 'Template-driven changes across regions' },
      { value: '-42%', label: 'Operational effort', helper: 'Reduction in manual change windows' },
      { value: '+27%', label: 'Threat detection', helper: 'Better east-west visibility and alert fidelity' }
    ],
    keyTakeaways: [
      'Governance-first rollout reduced drift and accelerated changes.',
      'Unified observability improved threat detection and response quality.',
      'Template-based deployments simplified lifecycle operations.'
    ],
    gallery: ['https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80']
  },
  {
    slug: 'airtel',
    partner: 'Airtel',
    logo: 'assets/airtel.png',
    heroTitle: 'Branch standardization and uptime improvement',
    heroSummary:
      'Standardized branch networking with stronger uptime, optimized failover, and faster incident handling.',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    industry: 'Telecom',
    location: 'India',
    timeline: '6-month phased rollout',
    overview:
      'Airtel needed branch-scale network consistency and secure connectivity to support high-volume enterprise operations.',
    challenge: {
      heading: 'Challenge',
      body: 'Improve branch availability and performance while reducing operational variance.',
      bullets: [
        'Inconsistent branch templates and failover strategy',
        'Limited visibility into branch performance and incidents',
        'Need for rapid rollout across many sites'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Delivered standardized site blueprints, WAN optimization, and proactive monitoring to tighten uptime and response.',
      bullets: [
        'Site templates for LAN/WAN/security controls',
        'Active/standby and active/active designs based on site criticality',
        'Proactive monitoring with clear SLOs and runbooks'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '35%', label: 'Fewer branch incidents', helper: 'QoS + optimized failover' },
      { value: '50%', label: 'Faster deployment', helper: 'Template-based rollout across sites' },
      { value: '18%', label: 'Better user experience', helper: 'Measured via app response baselines' }
    ],
    keyTakeaways: [
      'Branch blueprints accelerate deployments and keep configs consistent.',
      'Monitoring plus runbooks improve response and user experience.',
      'Flexible failover patterns match site criticality.'
    ],
    gallery: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80']
  },
  {
    slug: 'vodafone',
    partner: 'Vodafone',
    logo: 'assets/vodafone.png',
    heroTitle: 'Secure SD-WAN for distributed enterprise branches',
    heroSummary:
      'Strengthened branch security and performance governance with templated SD-WAN and proactive monitoring.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80',
    industry: 'Telecom / Enterprise',
    location: 'UK & India',
    timeline: '7-month rollout',
    overview:
      'Vodafone needed resilient connectivity and standardized policy enforcement across high-demand enterprise sites.',
    challenge: {
      heading: 'Challenge',
      body: 'Reduce outage impact and standardize policy across many branch footprints.',
      bullets: [
        'Inconsistent QoS and failover readiness',
        'Limited branch observability',
        'Need for templated rollouts to move quickly'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'CES deployed secure SD-WAN patterns with proactive monitoring and optimized failover across critical sites.',
      bullets: [
        'Standard SD-WAN templates with role-based policies',
        'Performance and availability SLOs with alerting',
        'Playbooks for branch cutovers and rollback'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '32%', label: 'Fewer branch incidents', helper: 'Measured three months post rollout' },
      { value: '2x', label: 'Faster site turn-ups', helper: 'Template-based onboarding' },
      { value: '15%', label: 'Better app experience', helper: 'Latency and jitter improvements' }
    ],
    keyTakeaways: [
      'Templates and playbooks speed deployment while keeping quality consistent.',
      'Clear SLOs and monitoring improve accountability with business teams.',
      'Failover planning reduced outage impact during maintenance.'
    ],
    gallery: ['https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80']
  },
  {
    slug: 'aruba',
    partner: 'Aruba',
    logo: 'assets/aruba.png',
    heroTitle: 'Secure access architecture for campus and branch Wi‑Fi',
    heroSummary:
      'Role-based access, optimized segmentation, and centralized analytics for enterprise wireless experiences.',
    heroImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1800&q=80',
    industry: 'Wireless & Edge',
    location: 'Global',
    timeline: '10-month phased program',
    overview:
      'Enterprises needed consistent wireless experiences with strong access governance across campuses and branches.',
    challenge: {
      heading: 'Challenge',
      body: 'Eliminate access inconsistencies and improve user experience at scale.',
      bullets: [
        'Fragmented SSID and policy design',
        'Limited visibility into client health and experience',
        'Need for secure guest and IoT onboarding'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Implemented role-based policies, optimized RF and segmentation, and centralized access analytics.',
      bullets: [
        'Role/identity-based access with dynamic segmentation',
        'RF optimization and SNR baselines for priority areas',
        'Centralized health dashboards and proactive alerts'
      ],
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '25%', label: 'Fewer wireless tickets', helper: 'Post-implementation trend' },
      { value: '40%', label: 'Faster onboarding', helper: 'For guest and IoT devices' },
      { value: '99.9%', label: 'Service availability', helper: 'Across prioritized campuses' }
    ],
    keyTakeaways: [
      'Identity-driven policies simplify access while improving security.',
      'Health analytics surface issues before user impact.',
      'RF optimization and segmentation deliver consistent experiences.'
    ],
    gallery: ['https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80']
  },
  {
    slug: 'cisco',
    partner: 'Cisco',
    logo: 'assets/cisco.png',
    heroTitle: 'Lifecycle modernization with observability and automation',
    heroSummary:
      'Template-led designs, automation workflows, and proactive monitoring improved uptime across branch, core, and cloud edges.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80',
    industry: 'Enterprise Networking',
    location: 'Global',
    timeline: 'Ongoing program',
    overview:
      'Enterprises needed to reduce operational complexity while enabling secure, policy-driven growth.',
    challenge: {
      heading: 'Challenge',
      body: 'Reduce drift and unplanned downtime across a diverse Cisco estate.',
      bullets: [
        'Inconsistent templates between regions',
        'Manual changes increasing risk',
        'Limited observability into performance trends'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Delivered design-to-run coverage with automation workflows, standardized templates, and proactive performance monitoring.',
      bullets: [
        'Version-controlled templates for branch, campus, and data center',
        'Automated configuration validation and drift detection',
        'Telemetry pipelines feeding SLO dashboards'
      ],
      image: 'https://images.unsplash.com/photo-1581092921461-eab10380f308?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '45%', label: 'Reduction in change risk', helper: 'Measured via failed change tickets' },
      { value: '30%', label: 'Downtime reduction', helper: 'Year-over-year unplanned downtime' },
      { value: '3x', label: 'Config validation speed', helper: 'Automated pre-checks per rollout' }
    ],
    keyTakeaways: [
      'Automation and templates lower operational risk.',
      'Observability unlocks proactive capacity and performance planning.',
      'Governance is easier with version-controlled designs.'
    ],
    gallery: ['https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1200&q=80']
  },
  {
    slug: 'palo-alto',
    partner: 'Palo Alto',
    logo: 'assets/paloalto.png',
    heroTitle: 'Integrated threat defense and policy consistency',
    heroSummary:
      'Unified security governance improved threat response readiness and reduced operational risk.',
    heroImage: 'https://images.unsplash.com/photo-1581092921461-eab10380f308?auto=format&fit=crop&w=1800&q=80',
    industry: 'Cybersecurity',
    location: 'Global',
    timeline: '8-month rollout',
    overview:
      'Organizations needed simplified security operations while maintaining strong visibility across distributed environments.',
    challenge: {
      heading: 'Challenge',
      body: 'Align security controls with business needs and reduce operational toil.',
      bullets: [
        'Fragmented tooling and alert noise',
        'Limited lateral visibility',
        'Need for standardized policy lifecycle'
      ]
    },
    solution: {
      heading: 'Solution',
      body:
        'Implemented unified security architecture, segmentation controls, and continuous posture monitoring.',
      bullets: [
        'Policy lifecycle with peer review and rollout waves',
        'Segmentation and zero-trust controls across zones',
        'Centralized SOC dashboards with prioritized alerts'
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80'
    },
    outcomes: [
      { value: '28%', label: 'Alert noise reduced', helper: 'Better tuning and correlation' },
      { value: '2x', label: 'Faster incident triage', helper: 'Improved runbooks and visibility' },
      { value: '100%', label: 'Policy consistency', helper: 'Across target sites post-rollout' }
    ],
    keyTakeaways: [
      'Policy lifecycle governance reduces drift and noise.',
      'Segmentation and telemetry drive faster investigations.',
      'Standardized rollouts improve consistency across regions.'
    ],
    gallery: ['https://images.unsplash.com/photo-1581092918024-8a0b5aa72b1b?auto=format&fit=crop&w=1200&q=80']
  }
];

@Component({
  selector: 'app-case-study',
  standalone: false,
  templateUrl: './case-study.html',
  styleUrl: './case-study.scss'
})
export class CaseStudy implements OnInit, OnDestroy {
  caseStudy: CaseStudyData = CASE_STUDIES[0];
  relatedCaseStudies: CaseStudyData[] = CASE_STUDIES.slice(1, 3);
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      const match = CASE_STUDIES.find((item) => item.slug === slug);
      if (!match) {
        if (slug) {
          this.router.navigate(['/case-studies', CASE_STUDIES[0].slug]);
        }
        this.caseStudy = CASE_STUDIES[0];
        this.relatedCaseStudies = CASE_STUDIES.filter((c) => c.slug !== this.caseStudy.slug).slice(0, 2);
        return;
      }

      this.caseStudy = match;
      this.relatedCaseStudies = CASE_STUDIES.filter((c) => c.slug !== match.slug).slice(0, 2);
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
