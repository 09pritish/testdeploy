import { Component } from '@angular/core';

type AchievementSection = 'awards' | 'certifications' | 'yearbook';

@Component({
  selector: 'app-achievements',
  standalone: false,
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss',
})
export class Achievements {
  activeSection: AchievementSection = 'awards';
  activeYear = 2025;
  yearbookIndex = 0;
  awardsList = [
    {
      title: 'MWC Barcelona',
      date: 'March 2-5, 2026',
      description: 'Join us as we lead the path to 6G for the AI era at MWC Barcelona.'
    },
    {
      title: 'Embedded World',
      date: 'March 10-12, 2026',
      description: 'Explore 50+ exhibiting partners showcasing Qualcomm based solutions.'
    },
    {
      title: 'Network X Summit',
      date: 'April 14-16, 2026',
      description: 'Discover enterprise networking and secure connectivity innovations from CES teams.'
    },
    {
      title: 'Cyber Resilience Forum',
      date: 'May 6-7, 2026',
      description: 'Learn how modern VAPT and managed security programs improve risk posture at scale.'
    }
  ];
  certificationsList = [
    {
      title: 'ISO 9001:2015',
      date: 'Valid through Dec 2026',
      description: 'Certified quality management systems ensuring consistent service delivery and process control.'
    },
    {
      title: 'ISO/IEC 27001',
      date: 'Valid through Aug 2026',
      description: 'Information security management certification validating governance, risk, and control practices.'
    },
    {
      title: 'ISO 20000',
      date: 'Valid through Mar 2027',
      description: 'IT service management certification supporting structured operations and continual improvement.'
    },
    {
      title: 'CMMI Level 5',
      date: 'Valid through Nov 2026',
      description: 'Maturity benchmark demonstrating optimized process capability and predictable delivery outcomes.'
    }
  ];

  yearbookSlides = [
    {
      year: 2025,
      tab: 'Highlight 1',
      title: 'Global delivery highlights and key milestones',
      cta: 'Open 2025 yearbook',
      link: '#',
      image: 'assets/yearbook1.jpg',
    },
    {
      year: 2025,
      tab: 'Highlight 2',
      title: 'Partner ecosystem wins and strategic alliance outcomes',
      cta: 'Explore 2025 partnerships',
      link: '#',
      image: 'assets/awards1.jpg',
    },
    {
      year: 2025,
      tab: 'Highlight 3',
      title: 'Business impact snapshots across networking and cloud',
      cta: 'View 2025 impact',
      link: '#',
      image: 'assets/certifications1.jpg',
    },
    {
      year: 2024,
      tab: 'Highlight 1',
      title: 'Partner ecosystems and enterprise transformation stories',
      cta: 'Open 2024 yearbook',
      link: '#',
      image: 'assets/certifications1.jpg',
    },
    {
      year: 2024,
      tab: 'Highlight 2',
      title: 'Security-led transformation programs across enterprise teams',
      cta: 'Explore 2024 programs',
      link: '#',
      image: 'assets/yearbook1.jpg',
    },
    {
      year: 2024,
      tab: 'Highlight 3',
      title: 'Regional growth and customer success execution highlights',
      cta: 'View 2024 impact',
      link: '#',
      image: 'assets/awards1.jpg',
    },
    {
      year: 2023,
      tab: 'Highlight 1',
      title: 'Security, networking, and cloud impact snapshots',
      cta: 'Open 2023 yearbook',
      link: '#',
      image: 'assets/awards1.jpg',
    },
    {
      year: 2023,
      tab: 'Highlight 2',
      title: 'Key certifications, team upskilling, and partner recognitions',
      cta: 'Explore 2023 wins',
      link: '#',
      image: 'assets/certifications1.jpg',
    },
    {
      year: 2023,
      tab: 'Highlight 3',
      title: 'Delivery consistency and infrastructure modernization milestones',
      cta: 'View 2023 milestones',
      link: '#',
      image: 'assets/yearbook1.jpg',
    },
  ];

  get yearbookYears(): number[] {
    return [...new Set(this.yearbookSlides.map((slide) => slide.year))].sort((a, b) => b - a);
  }

  get filteredYearbookSlides() {
    return this.yearbookSlides.filter((slide) => slide.year === this.activeYear);
  }

  get yearbookTransform(): string {
    return `translateX(-${this.yearbookIndex * 100}%)`;
  }

  setActiveSection(section: AchievementSection): void {
    this.activeSection = section;
  }

  setActiveYear(year: number): void {
    this.activeYear = year;
    this.yearbookIndex = 0;
  }

  setActiveYearTab(index: number): void {
    this.yearbookIndex = index;
  }

  prevYearbook(): void {
    if (this.filteredYearbookSlides.length <= 1) return;
    this.yearbookIndex =
      this.yearbookIndex === 0 ? this.filteredYearbookSlides.length - 1 : this.yearbookIndex - 1;
  }

  nextYearbook(): void {
    if (this.filteredYearbookSlides.length <= 1) return;
    this.yearbookIndex =
      this.yearbookIndex === this.filteredYearbookSlides.length - 1 ? 0 : this.yearbookIndex + 1;
  }
}
