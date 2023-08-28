import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../../index'; // Path might vary
import { login } from '../../login/login.actions';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-login',
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="text" [(ngModel)]="username" name="username" placeholder="Username" />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <div *ngIf="loading$">Logging in...</div>
    <div *ngIf="error$">{{ error$ }}</div>
  `,
})
export class LoginComponent {
  username = '';
  password = '';
  loading$ = this.store.select(fromAuth.selectLoginLoading);
  error$ = this.store.select(fromAuth.selectLoginError);

  constructor(private store: Store) {}

  onSubmit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
