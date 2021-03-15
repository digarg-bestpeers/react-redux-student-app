import {ADD_STUDENT} from "../constants/types"


const intialState = {
    students: []
}


function studentReducer(state=intialState, action) {
    switch(action.type){
        case ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            };

        default: return state;    
    }
}

export default studentReducer;