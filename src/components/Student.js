import React from 'react'
import {useSelector} from "react-redux"

export const Student = () => {
    const students = useSelector(state => state.students)
    console.log(students)
    return (
        students.map( student => { return (
            <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td><button>et</button></td>
                <td><button>X</button></td>
            </tr>
        )})
    )
}
