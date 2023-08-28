import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Simulate a login API call
  login(username: string, password: string) {
    if (username === 'user' && password === 'password') {
      // Simulate success
      return of({});
    } else {
      // Simulate failure
      return of({}).pipe(delay(1000)); // Simulate API delay
    }
  }
}
