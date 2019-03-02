import { combineReducers } from 'redux';
import {userReducer} from './user-reducer'
import {sideMenuReducer} from './side-menu-reducer'

export const appReducer = combineReducers({
  user: userReducer,
  sideMenuIsOpen: sideMenuReducer
})