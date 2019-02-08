import {userActions} from '../actions'

const defaultUser = {
  username: null,
  accountType: null,
  email: null
}

export function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case userActions.LOGIN:
      return {...action.userData}
    default:
      return state
  }
}