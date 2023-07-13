import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user.model';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly defaultValidators = [
    Validators.minLength(4),
    Validators.required,
  ];

  private unsubscribe$ = new Subject<void>();

  loginForm = new FormGroup({
    username: new FormControl('', this.defaultValidators),
    password: new FormControl('', this.defaultValidators),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = this.loginForm.value as User;
    this.auth
      .login(loginData)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: () => {
          this.router.navigate(['/feed']);
        },
      });
  }
}
