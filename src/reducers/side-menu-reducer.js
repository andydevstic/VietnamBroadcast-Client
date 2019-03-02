import {sideMenuActions} from '../actions'

export function sideMenuReducer(currentState = false, action) {
  switch (action.type) {
    case sideMenuActions.ON:
      return true
    case sideMenuActions.OFF:
      return false
    default:
      return false
  }
}