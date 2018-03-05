import * as actionTypes from '../types/student'

const initialState = {}

export default function student(state = initialState, action) {
    switch (action.type) {
        // student 获得姓名
        case actionTypes.STUDENT_GETNAME:
            return action.data

        // student 获得年龄
        case actionTypes.STUDENT_GETAGE:
            return action.data

        default:
            return state
    }
}