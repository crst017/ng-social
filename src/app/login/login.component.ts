import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'ngsocial-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private readonly defaultValidators = [
    Validators.minLength(4),
    Validators.required,
  ];

  loginForm = new FormGroup({
    username: new FormControl('', this.defaultValidators),
    password: new FormControl('', this.defaultValidators),
  });

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.loginForm.valueChanges.subscribe(console.log);
  }

  login(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const loginData = this.loginForm.value as User;
    this.auth.login(loginData).subscribe();
  }
}
