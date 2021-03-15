import React from 'react'
import {StudentForm} from "./StudentForm"
import {Student} from "./Student"


export const StudentDisplay = () => {
    
    return (
        <div>
            <StudentForm />
            <h1>Student Display</h1>

            <table border="1px">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Email</th><th>Phone</th>
                        <th>Edit</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <Student />
                </tbody>
            </table>
        </div>
    )
}
