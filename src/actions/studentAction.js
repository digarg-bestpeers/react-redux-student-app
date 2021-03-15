import {ADD_STUDENT, GET_EDIT_STUDENT, EDIT_STUDENT} from "../constants/types.js"

export const addStudent = (data) => ({
    type: ADD_STUDENT,
    payload: data
})

export const getEditStudent = (id) => ({
    type: GET_EDIT_STUDENT,
    payload: id
})

export const editStudent = (data) => ({
    type: EDIT_STUDENT,
    payload: data
})


