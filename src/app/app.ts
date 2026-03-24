import { AfterViewInit, Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('CES-tech-website');
  private navigationSub?: Subscription;

  constructor(
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    this.navigationSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
  }

  ngOnDestroy(): void {
    this.navigationSub?.unsubscribe();
  }
}
