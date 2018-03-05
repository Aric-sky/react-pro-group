import * as actionTypes from '../types/student'

export function getName(data) {
    return {
        type: actionTypes.STUDENT_GETNAME,
        data
    }
}

export function getAge(data) {
    return {
        type: actionTypes.STUDENT_GETAGE,
        data
    }
}