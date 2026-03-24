import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company-profile',
  standalone: false,
  templateUrl: './company-profile.html',
  styleUrl: './company-profile.scss'
})
export class CompanyProfile {
  private readonly apiBase =
    window.location.hostname === 'localhost' ? 'http://localhost:5000/api/company-profile' : '/api/company-profile';

  readonly samplePdfUrl = `${this.apiBase}/sample-pdf`;

  submitted = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';
  submitWarning = '';

  readonly profileForm;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(60)]],
      lastName: ['', [Validators.required, Validators.maxLength(60)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+()\-\s]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      companyName: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  hasError(controlName: keyof typeof this.profileForm.controls): boolean {
    const control = this.profileForm.controls[controlName];
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  onSubmit(): void {
    this.submitted = true;
    this.submitSuccess = false;
    this.submitError = '';
    this.submitWarning = '';

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    const payload = this.profileForm.getRawValue();
    window.open(this.samplePdfUrl, '_blank', 'noopener,noreferrer');

    this.http.post<{ message: string; emailed?: boolean }>(this.apiBase, payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        if (res?.emailed === false) {
          this.submitWarning = res?.message || 'Saved successfully, but email delivery failed.';
        }
        this.profileForm.reset({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          companyName: ''
        });
        this.submitted = false;
      },
      error: (err) => {
        this.isSubmitting = false;
        this.submitError = err?.error?.message || 'Unable to submit right now. Please try again.';
      }
    });
  }
}
