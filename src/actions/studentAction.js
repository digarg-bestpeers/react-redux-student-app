import {ADD_STUDENT} from "../constants/types.js"

export const addStudent = (data) => ({
    type: ADD_STUDENT,
    payload: data
})
