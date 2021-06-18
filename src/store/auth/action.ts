import {SignInUserPayload, AuthActionType, SIGN_IN } from './types';

export function SignIn(
  payload: SignInUserPayload,
): AuthActionType {
  return {
    type: SIGN_IN,
    payload,
  };
}
