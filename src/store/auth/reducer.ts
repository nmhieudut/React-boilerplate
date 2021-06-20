import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './types'
import { AuthActionType } from './types'

export interface LoggedInUser {
  avatar: string | null
  displayName: string | null
}

export interface AuthState {
  isLoading: boolean
  loggedInUser: LoggedInUser | null
  error: string | null
}

const initialState: AuthState = {
  isLoading: false,
  loggedInUser: null,
  error: null,
}

export default function AuthReducer(
  state = initialState,
  action: AuthActionType
): AuthState {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isLoading: true,
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loggedInUser: action.payload,
      }
    case SIGN_IN_FAILED:
      return {
        isLoading: false,
        loggedInUser: null,
        error: action.payload,
      }
    default:
      return state
  }
}
