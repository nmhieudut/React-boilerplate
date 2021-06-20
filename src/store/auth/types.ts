import { LoggedInUser } from './reducer'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED'

export const SIGN_OUT = 'SIGN_OUT'

export interface SignInUserPayload {
  username: string
  password: string
}
export interface SignUpUserPayload {
  email: string
  username: string
  password: string
}
export interface SignInActionType {
  type: typeof SIGN_IN
  payload: SignInUserPayload
}

export interface SignInSucessActionType {
  type: typeof SIGN_IN_SUCCESS
  payload: LoggedInUser
}

export interface SignInFailedActionType {
  type: typeof SIGN_IN_FAILED
  payload: string
}

export interface SignUpActionType {
  type: typeof SIGN_UP
  payload: SignUpUserPayload
}

export type AuthActionType =
  | SignUpActionType
  | SignInActionType
  | SignInSucessActionType
  | SignInFailedActionType
