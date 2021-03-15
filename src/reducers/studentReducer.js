import {ADD_STUDENT, GET_EDIT_STUDENT, EDIT_STUDENT} from "../constants/types"


const intialState = {
    students: [],
    student: null

}


function studentReducer(state=intialState, action) {
    switch(action.type){
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            };

        case GET_EDIT_STUDENT:
            const student = state.students.filter(student => student.id === action.payload ? student : null)
            const st = student[0]
            return {
                ...state,
                student: st
            };

        case EDIT_STUDENT:
            const students = state.students.map(student => student.id == action.payload.id ? action.payload : student)
            return {
                ...state,
                students: students
            }

        default: return state;    
    }
}

export default studentReducer;