export interface CesSolution {
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  highlights: string[];
}

export const CES_SOLUTIONS: CesSolution[] = [
  {
    slug: 'sd-wan-solution',
    title: 'SD-WAN Solution',
    category: 'Network Transformation',
    summary: 'Centralized WAN control with app-aware routing, resiliency, and policy-driven performance.',
    description:
      'SD-WAN separates control from hardware and gives centralized visibility and policy management, helping enterprises improve performance, resilience, and branch operations.',
    image: 'assets/3.jpeg',
    highlights: ['Centralized WAN management', 'Application-aware traffic routing', 'Improved branch resilience']
  },
  {
    slug: 'network-security-solution',
    title: 'Network Security Solution',
    category: 'Cybersecurity',
    summary: 'Comprehensive network protection across users, devices, applications, and traffic.',
    description:
      'A layered network security approach with policy controls, monitoring, and threat prevention to protect confidentiality, integrity, and availability.',
    image: 'assets/5.jpeg',
    highlights: ['Threat prevention and controls', 'Access governance and segmentation', 'Continuous security monitoring']
  },
  {
    slug: 'cloud-solution',
    title: 'Cloud Solution',
    category: 'Cloud',
    summary: 'Scalable cloud architecture for modern workloads and rapid digital delivery.',
    description:
      'Cloud solutions across SaaS, PaaS, and IaaS models to improve agility, scalability, and operational efficiency while simplifying infrastructure ownership.',
    image: 'assets/8.jpeg',
    highlights: ['Hybrid cloud architecture', 'Elastic scaling model', 'Modernized application delivery']
  },
  {
    slug: 'data-center-solution',
    title: 'Data Center Solution',
    category: 'Data Center',
    summary: 'Reliable, scalable, and efficient data center foundations for critical workloads.',
    description:
      'Integrated data center architecture spanning compute, storage, networking, security, and operations to support performance and continuity.',
    image: 'assets/7.jpeg',
    highlights: ['Scalable architecture design', 'High availability and continuity', 'Operational efficiency improvements']
  },
  {
    slug: 'server-storage-solution',
    title: 'Server & Storage Solution',
    category: 'Infrastructure',
    summary: 'Compute and storage platforms built for performance, reliability, and growth.',
    description:
      'Enterprise server and storage environments with management and protection capabilities to support business-critical applications and data.',
    image: 'assets/4.jpeg',
    highlights: ['Integrated compute and storage stack', 'Data availability and protection', 'Infrastructure lifecycle support']
  },
  {
    slug: 'voice-video-solution',
    title: 'Voice & Video Solution',
    category: 'Collaboration',
    summary: 'Real-time communication and collaboration for distributed enterprise teams.',
    description:
      'Voice and video platforms including UC and conferencing capabilities to improve team collaboration, remote operations, and decision speed.',
    image: 'assets/9.jpeg',
    highlights: ['Unified communication experience', 'Reliable conferencing and VoIP', 'Improved team collaboration']
  },
  {
    slug: 'enterprise-network-solution',
    title: 'Enterprise Network Solution',
    category: 'Enterprise Networking',
    summary: 'Secure, scalable enterprise networking across campus, branch, and remote environments.',
    description:
      'Comprehensive enterprise network design and operations that support performance, resilience, secure access, and business growth.',
    image: 'assets/6.jpeg',
    highlights: ['Enterprise-grade architecture', 'Scalable connectivity model', 'Secure and reliable operations']
  },
  {
    slug: 'network-consulting',
    title: 'Network Consulting',
    category: 'Advisory',
    summary: 'Expert consulting for architecture, optimization, transformation, and troubleshooting.',
    description:
      'Consulting-led engagement to assess current networks, define target-state designs, and improve network readiness for business goals.',
    image: 'assets/2.jpeg',
    highlights: ['Architecture and roadmap advisory', 'Performance and security optimization', 'Technology transition planning']
  },
  {
    slug: 'mobility-wireless-solution',
    title: 'Mobility & Wireless Solution',
    category: 'Wireless',
    summary: 'Ubiquitous wireless connectivity for modern enterprise mobility use cases.',
    description:
      'Wireless and mobility architecture for BYOD, branch/campus access, and connected operations with better user experience.',
    image: 'assets/3.jpeg',
    highlights: ['Enterprise Wi-Fi and mobility design', 'Support for mobile-first operations', 'Improved access experience']
  },
  {
    slug: 'aci-solution',
    title: 'ACI Solution',
    category: 'Data Center Networking',
    summary: 'Policy-driven data center networking and automation with Cisco ACI.',
    description:
      'Application-centric infrastructure with centralized control to simplify provisioning, enforce policy consistency, and improve data center agility.',
    image: 'assets/7.jpeg',
    highlights: ['Policy-based fabric control', 'Centralized APIC-driven operations', 'Automated and secure segmentation']
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    category: 'Security',
    summary: 'Holistic cyber protection across infrastructure, applications, and users.',
    description:
      'Cybersecurity solutions spanning network, endpoint, cloud, IAM, and response capabilities to reduce risk and improve resilience.',
    image: 'assets/1.jpeg',
    highlights: ['Defense-in-depth strategy', 'Threat detection and response', 'Security governance and risk reduction']
  }
];
