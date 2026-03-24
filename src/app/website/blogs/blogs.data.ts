export type BlogTone = 'light' | 'dark' | 'violet';
export type BlogEra = 'new' | 'archive';

export interface BlogPost {
  slug: string;
  type: string;
  title: string;
  summary: string;
  image: string;
  tone: BlogTone;
  era: BlogEra;
  readTime: string;
  publishedOn: string;
  intro: string;
  highlights: string[];
  paragraphs: string[];
}

export const BLOGS_DATA: BlogPost[] = [
  {
    slug: 'zero-trust-branch-networks',
    type: 'PERSPECTIVE',
    title: 'Building zero-trust branch networks that scale',
    summary: 'How CES designs policy-led branch security with resilient failover and better user experience.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'new',
    readTime: '6 min read',
    publishedOn: 'March 2026',
    intro: 'Branch-first zero-trust design has become foundational for distributed enterprises.',
    highlights: ['Identity-led segmentation', 'Policy consistency', 'Branch resiliency', 'Operational visibility'],
    paragraphs: [
      'CES delivery teams treat branch security as a design problem, not an afterthought. We map identities, applications, and trust boundaries before rollout.',
      'By standardizing policy templates and enforcing guardrails, enterprise teams reduce policy drift and keep branch growth predictable.',
      'The result is lower blast radius, faster incident isolation, and better user experience across remote and campus users.'
    ]
  },
  {
    slug: 'cloud-migration-regulated-industries',
    type: 'RESEARCH REPORT',
    title: 'Cloud migration patterns for regulated industries',
    summary: 'Practical architecture patterns CES teams use for secure cloud modernization.',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'new',
    readTime: '8 min read',
    publishedOn: 'March 2026',
    intro: 'Regulated migration programs succeed when compliance architecture is embedded from day one.',
    highlights: ['Control inheritance', 'Data residency design', 'Encryption governance', 'Audit-ready operations'],
    paragraphs: [
      'CES cloud journeys begin with control mapping so teams can prove compliance while modernizing at speed.',
      'We separate high-sensitivity workloads, enforce policy boundaries, and automate evidence capture for auditors.',
      'This pattern helps organizations move core workloads without compromising governance requirements.'
    ]
  },
  {
    slug: 'network-security-trends-2026',
    type: 'TREND BRIEF',
    title: 'Top networking and security trends for enterprise IT',
    summary: 'What matters now for CIOs and network teams planning for scale, resilience, and compliance.',
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    tone: 'violet',
    era: 'new',
    readTime: '5 min read',
    publishedOn: 'February 2026',
    intro: 'Three trends stand out in 2026: policy automation, integrated observability, and security-first operations.',
    highlights: ['AI-assisted operations', 'Unified telemetry', 'Policy automation', 'Security by default'],
    paragraphs: [
      'Enterprises are consolidating tooling to reduce blind spots and response latency across teams.',
      'CES sees strong outcomes when observability is integrated with governance and change control workflows.',
      'Organizations that combine these disciplines ship faster with fewer operational regressions.'
    ]
  },
  {
    slug: 'resilient-data-center-fabric',
    type: 'TECH BRIEF',
    title: 'Designing resilient data center fabric for modern workloads',
    summary: 'Reference architecture patterns for high-availability compute, storage, and east-west traffic.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'new',
    readTime: '7 min read',
    publishedOn: 'February 2026',
    intro: 'Resilient data center design now depends on tighter alignment between network, compute, and operations.',
    highlights: ['Leaf-spine strategy', 'High-availability paths', 'Capacity planning', 'Failure-domain design'],
    paragraphs: [
      'CES architectures prioritize deterministic performance for east-west traffic under burst conditions.',
      'Designing for graceful degradation improves uptime and simplifies incident handling during partial failures.',
      'Consistent runbooks and observability complete the architecture and improve recovery confidence.'
    ]
  },
  {
    slug: 'outage-impact-playbooks',
    type: 'PERSPECTIVE',
    title: 'Operational playbooks that reduce outage impact',
    summary: 'Incident response models CES teams use to improve MTTD and MTTR in enterprise environments.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'new',
    readTime: '6 min read',
    publishedOn: 'January 2026',
    intro: 'Incident readiness is a delivery capability, not just an operations metric.',
    highlights: ['Escalation design', 'Runbook quality', 'Cross-team readiness', 'Response governance'],
    paragraphs: [
      'CES playbooks define clear role ownership, signal thresholds, and escalation timing.',
      'When playbooks are continuously tested, teams reduce confusion and contain impact faster.',
      'This turns operational resilience into a repeatable organizational behavior.'
    ]
  },
  {
    slug: 'vapt-continuous-hardening',
    type: 'SECURITY NOTE',
    title: 'Practical VAPT lifecycle for continuous hardening',
    summary: 'How to move from one-time testing to a repeatable vulnerability management cycle.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tone: 'violet',
    era: 'new',
    readTime: '7 min read',
    publishedOn: 'January 2026',
    intro: 'VAPT becomes strategic only when linked to remediation velocity and governance.',
    highlights: ['Prioritized remediation', 'Risk scoring', 'Recurring validation', 'Executive reporting'],
    paragraphs: [
      'CES recommends tiered remediation based on exploitable risk and business criticality.',
      'Repeated assessment cycles prove whether controls are improving over time.',
      'Leadership reporting should focus on trend movement, not static scan volume.'
    ]
  },
  {
    slug: 'zero-downtime-migration-checklist',
    type: 'MODERNIZATION NOTE',
    title: 'Zero-downtime migration checklist for core services',
    summary: 'A practical sequencing model CES teams use to modernize critical systems with minimal business disruption.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'new',
    readTime: '5 min read',
    publishedOn: 'January 2026',
    intro: 'Downtime-resistant migration requires sequencing discipline and rollback clarity.',
    highlights: ['Cutover checkpoints', 'Rollback guards', 'Dependency mapping', 'Validation gates'],
    paragraphs: [
      'CES migration plans define service dependencies and pre-cutover validation to reduce unknowns.',
      'Rollback plans are treated as first-class artifacts and tested before production windows.',
      'This approach reduces risk and improves stakeholder confidence across transformation programs.'
    ]
  },
  {
    slug: 'observability-for-sla-outcomes',
    type: 'OPERATIONS BRIEF',
    title: 'Observability patterns that improve SLA outcomes',
    summary: 'Metrics, alerting, and escalation design to improve service reliability across distributed environments.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'new',
    readTime: '6 min read',
    publishedOn: 'December 2025',
    intro: 'SLA stability improves when telemetry and operations governance are designed together.',
    highlights: ['Alert quality', 'Signal-to-noise control', 'Escalation paths', 'Service SLO alignment'],
    paragraphs: [
      'CES observability design starts with outcome metrics that map directly to business service expectations.',
      'Reducing noisy alerts improves operator focus and response effectiveness.',
      'Operational maturity grows when dashboards, escalation, and post-incident learning are integrated.'
    ]
  },
  {
    slug: 'branch-standardization-blueprint',
    type: 'ARCHIVE',
    title: 'Branch standardization blueprint across distributed teams',
    summary: 'A field framework for policy consistency, uptime, and controlled rollout at branch scale.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'archive',
    readTime: '6 min read',
    publishedOn: '2024',
    intro: 'Branch consistency is achieved through template-first rollout and governance checkpoints.',
    highlights: ['Template standardization', 'Rollout wave planning', 'Policy governance', 'Post-rollout QA'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'sla-first-managed-services-model',
    type: 'ARCHIVE',
    title: 'SLA-first managed services operating model',
    summary: 'How governance, observability, and escalation design improve reliability outcomes.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'archive',
    readTime: '5 min read',
    publishedOn: '2024',
    intro: 'Archive reference edition.',
    highlights: ['SLA governance', 'NOC execution', 'Incident control', 'Service reporting'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'secure-collaboration-planning-guide',
    type: 'ARCHIVE',
    title: 'Secure collaboration stack planning guide',
    summary: 'A design checklist for voice and video systems in hybrid enterprise environments.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    tone: 'violet',
    era: 'archive',
    readTime: '4 min read',
    publishedOn: '2023',
    intro: 'Archive reference edition.',
    highlights: ['Quality of experience', 'Security controls', 'Capacity planning', 'Adoption readiness'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'network-audit-metrics-guide',
    type: 'ARCHIVE',
    title: 'Network audit metrics that actually matter',
    summary: 'Coverage, risk scoring, and remediation signals used to prioritize modernization.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'archive',
    readTime: '5 min read',
    publishedOn: '2023',
    intro: 'Archive reference edition.',
    highlights: ['Coverage metrics', 'Risk signal quality', 'Remediation confidence', 'Trend direction'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'automation-rollout-frameworks',
    type: 'ARCHIVE',
    title: 'Automation frameworks for repeatable rollouts',
    summary: 'Playbooks and templates that reduce manual effort and rollout variability.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'archive',
    readTime: '6 min read',
    publishedOn: '2022',
    intro: 'Archive reference edition.',
    highlights: ['Template libraries', 'Change automation', 'Validation gates', 'Operational handoff'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'hybrid-governance-controls',
    type: 'ARCHIVE',
    title: 'Governance controls for cloud and on-prem parity',
    summary: 'Policy, compliance, and visibility patterns for hybrid infrastructure teams.',
    image: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&w=1200&q=80',
    tone: 'violet',
    era: 'archive',
    readTime: '5 min read',
    publishedOn: '2022',
    intro: 'Archive reference edition.',
    highlights: ['Policy parity', 'Compliance tracking', 'Visibility baselines', 'Control maturity'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'enterprise-wifi-modernization',
    type: 'ARCHIVE',
    title: 'Enterprise Wi-Fi modernization without service disruption',
    summary: 'Staged rollout methods CES teams use to refresh campus wireless while keeping user uptime stable.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tone: 'dark',
    era: 'archive',
    readTime: '4 min read',
    publishedOn: '2021',
    intro: 'Archive reference edition.',
    highlights: ['Wave rollout design', 'Coverage continuity', 'Change risk controls', 'Performance validation'],
    paragraphs: ['Archive reference edition.']
  },
  {
    slug: 'secure-remote-access-hybrid',
    type: 'ARCHIVE',
    title: 'Secure remote access design for hybrid operations',
    summary: 'Access, identity, and policy controls to support distributed teams with stronger security posture.',
    image: 'https://images.unsplash.com/photo-1598257006626-5f8978b2e4f0?auto=format&fit=crop&w=1200&q=80',
    tone: 'light',
    era: 'archive',
    readTime: '5 min read',
    publishedOn: '2021',
    intro: 'Archive reference edition.',
    highlights: ['Identity assurance', 'Access segmentation', 'User policy enforcement', 'Monitoring posture'],
    paragraphs: ['Archive reference edition.']
  }
];
