import { createReducer, on } from '@ngrx/store';
import * as LoginActions from './login.actions';

export const loginFeatureKey = 'login';

export interface LoginState {
  loading: boolean;
  error: string | null;
}

export const initialState: LoginState = {
  loading: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(LoginActions.login, (state) => ({ ...state, loading: true, error: null })),
  on(LoginActions.loginSuccess, (state) => ({ ...state, loading: false })),
  on(LoginActions.loginFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
