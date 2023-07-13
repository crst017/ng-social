import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'ngsocial-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  logout() {
    this.authService.logout();
  }
}
