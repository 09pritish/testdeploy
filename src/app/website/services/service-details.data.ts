export interface ServiceFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailData {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  heroImage: string;
  contentImage?: string;
  bodyIntro: string;
  featureIntroTitle: string;
  featureIntroBody: string;
  features: ServiceFeature[];
}

export const SERVICE_DETAILS: ServiceDetailData[] = [
  {
    slug: 'it-services',
    tag: 'IT SERVICES',
    title: 'IT Services',
    summary:
      'Information Technology services covering managed operations, cybersecurity, cloud enablement, consulting, software support, infrastructure management, data services, and end-user assistance.',
    heroImage: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'IT Services at CES are designed as a complete operating layer for modern businesses: maintain stable systems, protect digital assets, support users, improve decision-making with data, and keep infrastructure aligned to business growth.',
    featureIntroTitle: 'From core IT support to business-aligned technology outcomes',
    featureIntroBody:
      'Following CES-PL IT service positioning, this page focuses on operational efficiency, security maturity, controlled cost, scalability, and access to specialist expertise across multiple technology domains.',
    features: [
      { icon: 'security', title: 'Enhanced Security', description: 'Use continuous monitoring, vulnerability checks, and threat-focused controls to protect business data, applications, and infrastructure.' },
      { icon: 'sync_alt', title: 'Increased Efficiency', description: 'Reduce repetitive manual work through managed workflows, optimized systems, and proactive maintenance operations.' },
      { icon: 'savings', title: 'Cost Savings', description: 'Lower operational overhead with predictable service models and reduced downtime from preventive support practices.' },
      { icon: 'groups', title: 'Access to Expertise', description: 'Leverage specialized engineers and consultants across network, cloud, security, and infrastructure operations.' },
      { icon: 'open_in_full', title: 'Scalability and Flexibility', description: 'Scale service capacity up or down quickly to support changing project needs and business priorities.' },
      { icon: 'analytics', title: 'Improved Decision Making', description: 'Use reporting, analytics, and operational insights to guide planning, governance, and IT investment decisions.' }
    ]
  },
  {
    slug: 'network-audit',
    tag: 'NETWORK AUDIT',
    title: 'Network Audit',
    summary:
      'A comprehensive examination of network devices, connections, architecture, and performance to identify operational, security, and reliability gaps.',
    heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'Network Audit establishes a detailed current-state baseline of your environment so leadership and engineering teams can see exactly where risk, inefficiency, and performance bottlenecks exist.',
    featureIntroTitle: 'From raw infrastructure data to actionable network improvements',
    featureIntroBody:
      'Aligned with CES-PL network audit descriptions, this service emphasizes complete infrastructure visibility, configuration validation, reliability checks, and practical next-step recommendations.',
    features: [
      { icon: 'network_check', title: 'Infrastructure Examination', description: 'Review routers, switches, firewalls, links, and topology design across branch, campus, and core zones.' },
      { icon: 'speed', title: 'Performance Benchmarking', description: 'Assess throughput, utilization, latency, and packet behavior to detect service degradation risks.' },
      { icon: 'privacy_tip', title: 'Security and Control Review', description: 'Validate segmentation, access controls, policy quality, and exposure to avoidable vulnerabilities.' },
      { icon: 'settings', title: 'Configuration Accuracy', description: 'Detect drift, inconsistent standards, and misalignment between intended design and deployed state.' },
      { icon: 'report_problem', title: 'Risk Prioritization', description: 'Classify findings by business impact so teams can address critical issues first.' },
      { icon: 'assignment_turned_in', title: 'Actionable Remediation Plan', description: 'Provide clear, phased recommendations with practical implementation guidance and expected outcome.' }
    ]
  },
  {
    slug: 'network-implementation',
    tag: 'NETWORK IMPLEMENTATION',
    title: 'Network Implementation',
    summary:
      'Structured network implementation from architecture planning to deployment, configuration, testing, documentation, and operational handover.',
    heroImage: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'Network Implementation converts approved design into production-ready infrastructure with disciplined rollout management, security-first configuration, and validation against performance and reliability objectives.',
    featureIntroTitle: 'From network design approval to production-ready operations',
    featureIntroBody:
      'Following CES-PL implementation flow, this service includes requirement assessment, network design, device deployment, secure configuration, testing, documentation, and enablement support for internal teams.',
    features: [
      { icon: 'rule_folder', title: 'Requirement and Scope Analysis', description: 'Align implementation scope to operational goals, growth plans, and existing system dependencies.' },
      { icon: 'alt_route', title: 'Network Architecture Design', description: 'Define topology, segmentation, addressing, resilience strategy, and integration requirements.' },
      { icon: 'memory', title: 'Hardware and Software Selection', description: 'Choose fit-for-purpose network components and platforms based on design and performance criteria.' },
      { icon: 'hub', title: 'Deployment and Integration', description: 'Install and configure network devices, then integrate them with current IT and security systems.' },
      { icon: 'fact_check', title: 'Testing and Validation', description: 'Run performance, security, and failover checks to verify production readiness.' },
      { icon: 'menu_book', title: 'Documentation and Team Enablement', description: 'Deliver implementation documentation and operational guidance for long-term support continuity.' }
    ]
  },
  {
    slug: 'managed-services',
    tag: 'MANAGED SERVICES',
    title: 'Managed Services',
    summary:
      'Comprehensive outsourcing of IT operations to improve stability, security, and service continuity through proactive, subscription-led management.',
    heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'Managed Services transfers routine IT responsibility to dedicated specialists who monitor, maintain, secure, and optimize your environment while your internal teams focus on core business outcomes.',
    featureIntroTitle: 'From outsourced operations to predictable IT performance',
    featureIntroBody:
      'Based on CES-PL managed service messaging, this model combines predictable monthly delivery, preventive care, broad technical coverage, and access to modern expertise.',
    features: [
      { icon: 'monitor_heart', title: 'Proactive Monitoring and Prevention', description: 'Continuously monitor systems to detect and address issues before they impact users.' },
      { icon: 'dns', title: 'Broad IT Operations Coverage', description: 'Support network, cybersecurity, backup, cloud, and end-user environments under one model.' },
      { icon: 'paid', title: 'Predictable Subscription Costing', description: 'Use fixed-fee operating models for better budget planning and fewer surprise expenses.' },
      { icon: 'bolt', title: 'Fast Issue Resolution', description: 'Apply structured escalation and response to reduce downtime and service disruption.' },
      { icon: 'workspace_premium', title: 'Access to Latest Technology', description: 'Adopt current practices and tools without building large in-house specialist teams.' },
      { icon: 'shield', title: 'Security and Continuity Focus', description: 'Maintain strong cyber hygiene and resilient operations in a changing threat landscape.' }
    ]
  },
  {
    slug: 'vapt',
    tag: 'VAPT',
    title: 'VAPT',
    summary:
      'Vulnerability Assessment and Penetration Testing for discovering, validating, and reducing exploitable weaknesses in enterprise IT systems.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'VAPT combines systematic vulnerability analysis with controlled penetration attempts so organizations can understand both theoretical and practical security exposure.',
    featureIntroTitle: 'From vulnerability discovery to risk reduction execution',
    featureIntroBody:
      'Using CES-PL service definitions, this page emphasizes comprehensive vulnerability discovery, real-world exploit validation, prioritized fixes, and repeatable hardening cycles.',
    features: [
      { icon: 'bug_report', title: 'Vulnerability Discovery', description: 'Identify weaknesses across applications, infrastructure, and exposed network surfaces.' },
      { icon: 'gpp_bad', title: 'Penetration Simulation', description: 'Test exploit paths to understand how vulnerabilities could be abused in practice.' },
      { icon: 'policy', title: 'Risk Classification', description: 'Prioritize findings by severity, exploitability, and potential business impact.' },
      { icon: 'task_alt', title: 'Remediation Guidance', description: 'Provide practical recommendations to close gaps quickly and effectively.' },
      { icon: 'verified_user', title: 'Compliance Support', description: 'Strengthen security governance and audit readiness through documented assessment outputs.' },
      { icon: 'shield', title: 'Continuous Security Improvement', description: 'Retest and measure progress so defensive maturity improves over time.' }
    ]
  },
  {
    slug: 'annual-maintenance-contract',
    tag: 'ANNUAL MAINTENANCE CONTRACT',
    title: 'Annual Maintenance Contract',
    summary:
      'Annual service agreement for preventive and corrective maintenance of IT infrastructure and business-critical equipment.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=80',
    contentImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'Annual Maintenance Contract services keep enterprise systems healthy through scheduled inspections, preventive servicing, and timely repair support across hardware and related infrastructure.',
    featureIntroTitle: 'From unpredictable repairs to planned maintenance assurance',
    featureIntroBody:
      'Aligned with CES-PL AMC coverage, the service model focuses on cost predictability, priority response, equipment longevity, compliance support, and operational continuity.',
    features: [
      { icon: 'event_repeat', title: 'Regular Preventive Maintenance', description: 'Conduct scheduled service cycles to detect and resolve issues before failure.' },
      { icon: 'build_circle', title: 'Priority Service Support', description: 'Receive faster assistance and reduced downtime during fault conditions.' },
      { icon: 'savings', title: 'Cost Savings and Control', description: 'Replace unpredictable ad-hoc repairs with a planned annual service model.' },
      { icon: 'engineering', title: 'Expert Technical Assistance', description: 'Access experienced technicians familiar with covered technologies and devices.' },
      { icon: 'verified', title: 'Compliance and Warranty Alignment', description: 'Maintain systems according to service standards to reduce compliance and warranty risks.' },
      { icon: 'inventory_2', title: 'Extended Equipment Life', description: 'Improve asset reliability and longevity through disciplined maintenance practices.' }
    ]
  },
  {
    slug: 'rental',
    tag: 'RENTAL',
    title: 'Rental Services',
    summary:
      'Rental model for servers, networking, storage, and related IT infrastructure to meet temporary, project-based, and scaling requirements.',
    heroImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1800&q=80',
    contentImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80',
    bodyIntro:
      'Rental services provide a practical way to use enterprise-grade IT devices without buying assets outright, helping businesses move faster with lower upfront investment.',
    featureIntroTitle: 'From capital-heavy procurement to flexible usage-based access',
    featureIntroBody:
      'Based on CES-PL rental benefits, this page emphasizes cost efficiency, scalability, access to current technology, reduced maintenance burden, and better budget control.',
    features: [
      { icon: 'savings', title: 'Cost Efficiency', description: 'Avoid large capital purchases and distribute spend through manageable periodic rentals.' },
      { icon: 'open_in_full', title: 'Flexibility and Scalability', description: 'Scale infrastructure up or down quickly as project and business demand changes.' },
      { icon: 'new_releases', title: 'Access to Latest Technology', description: 'Use modern hardware without the refresh burden of full ownership cycles.' },
      { icon: 'build', title: 'Lower Maintenance Burden', description: 'Reduce internal effort through support and upkeep included in rental agreements.' },
      { icon: 'shield', title: 'Risk Mitigation', description: 'Limit exposure to technology obsolescence and uncertain long-term hardware commitments.' },
      { icon: 'payments', title: 'Budget Predictability', description: 'Plan IT costs with clearer recurring expense structures and fewer repair surprises.' }
    ]
  }
];
