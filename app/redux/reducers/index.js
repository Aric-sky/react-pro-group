import { combineReducers } from 'redux'

import userinfo from './userinfo'
import student from './student'

const rootReducer = combineReducers({
    userinfo,
    student
})

export default rootReducer