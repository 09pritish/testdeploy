import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface OfficeLocation {
  label: string;
  address: string;
  mapUrl: SafeResourceUrl;
}

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  private readonly apiUrl =
    window.location.hostname === 'localhost' ? 'http://localhost:5000/api/contact' : '/api/contact';

  readonly countryOptions = [
    'United States',
    'Canada',
    'India',
    'United Kingdom',
    'Australia'
  ];

  readonly companySizeOptions = [
    '1-50',
    '51-250',
    '251-1000',
    '1001-5000',
    '5000+'
  ];

  readonly topicOptions = [
    'Technical support',
    'Partner support',
    'Sales inquiry',
    'Training and certification',
    'General question'
  ];

  submitted = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';
  submitWarning = '';
  officeLocations: OfficeLocation[] = [];
  selectedLocation: OfficeLocation | null = null;

  readonly contactForm;

  constructor(private fb: FormBuilder, private http: HttpClient, private sanitizer: DomSanitizer) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(60)]],
      lastName: ['', [Validators.required, Validators.maxLength(60)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
      company: ['', [Validators.required, Validators.maxLength(100)]],
      companySize: ['', Validators.required],
      jobTitle: ['', Validators.maxLength(80)],
      topic: ['', Validators.required],
      comments: ['', Validators.maxLength(1000)],
      marketingConsent: [false],
      captcha: [false]
    });

    this.officeLocations = [
      {
        label: 'Noida office',
        address: 'Assotech Business Cresterra, Tower-2, 9th Floor, Sector-135, Noida 201304, Uttar Pradesh',
        mapUrl: this.buildEmbedUrl('Assotech Business Cresterra Tower-2 Sector 135 Noida')
      },
      {
        label: 'Gurugram office',
        address: 'Paras Trinity, Golf Course Ext Rd, Sector 63, Gurugram, Haryana 122011',
        mapUrl: this.buildEmbedUrl('Paras Trinity Golf Course Ext Rd Sector 63 Gurugram')
      }
    ];
    this.selectedLocation = this.officeLocations[0];
  }

  get f() {
    return this.contactForm.controls;
  }

  hasError(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  selectLocation(location: OfficeLocation): void {
    this.selectedLocation = location;
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = '';
    this.submitWarning = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const payload = this.buildPayload();

    this.http.post<{ message: string; emailed?: boolean; emailReason?: string | null }>(this.apiUrl, payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        if (res?.emailed === false) {
          this.submitWarning = res?.message || 'Form saved, but email delivery failed.';
        }
        this.contactForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          phone: '',
          company: '',
          companySize: '',
          jobTitle: '',
          topic: '',
          comments: '',
          marketingConsent: false,
          captcha: false
        });
        this.submitted = false;
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = err?.error?.message || 'Unable to submit right now. Please try again.';
      }
    });
  }

  private buildPayload(): { name: string; email: string; phone: string; service: string; message: string } {
    const value = this.contactForm.getRawValue();
    const name = `${value.firstName ?? ''} ${value.lastName ?? ''}`.trim();
    const message = [
      `Country: ${value.country ?? ''}`,
      `Company: ${value.company ?? ''}`,
      `Company Size: ${value.companySize ?? ''}`,
      `Job Title: ${value.jobTitle || 'N/A'}`,
      `Topic: ${value.topic ?? ''}`,
      `Marketing Consent: ${value.marketingConsent ? 'Yes' : 'No'}`,
      '',
      `Comments: ${value.comments || 'N/A'}`
    ].join('\n');

    return {
      name,
      email: value.email ?? '',
      phone: value.phone ?? '',
      service: value.topic ?? '',
      message
    };
  }

  private buildEmbedUrl(query: string): SafeResourceUrl {
    const encoded = encodeURIComponent(query);
    const url = `https://www.google.com/maps?q=${encoded}&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
