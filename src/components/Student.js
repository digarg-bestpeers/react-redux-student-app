import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {getEditStudent} from "../actions/studentAction"

export const Student = () => {
    const students = useSelector(state => state.students);
    const dispatch = useDispatch();
    
    return (
        students.map( student => { return (
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td><button onClick={() => dispatch(getEditStudent(student.id))}>et</button></td>
                <td><button>X</button></td>
            </tr>
        )})
    )
}
