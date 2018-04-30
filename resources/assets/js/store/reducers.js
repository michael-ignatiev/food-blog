import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import posts from '../modules/post/store/reducer'

export default combineReducers({ auth, user, posts })
