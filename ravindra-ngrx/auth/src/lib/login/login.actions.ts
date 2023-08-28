import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth/Login] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction('[Auth/Login] Login Success');

export const loginFailure = createAction(
  '[Auth/Login] Login Failure',
  props<{ error: string }>()
);
