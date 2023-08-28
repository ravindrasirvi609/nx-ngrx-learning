import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../../../src/lib/login/services/auth.service';
import * as LoginActions from './login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      mergeMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          map(() => LoginActions.loginSuccess()),
          catchError((error) => [
            LoginActions.loginFailure({ error: error.message }),
          ])
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
