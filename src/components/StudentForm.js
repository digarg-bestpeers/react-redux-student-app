import React, {useState} from 'react'
import {useDispatch} from "react-redux"
import {addStudent} from "../actions/studentAction" 

const initialValues = { id: '', name: '', email: '', phone: ''};

export const StudentForm = () => {
    const [formData, setFormData] = useState(initialValues);
    const dispatch = useDispatch()

    const createStudent = (event) => {
        event.preventDefault();
        dispatch(addStudent(formData))
    }
    
    return (
        <div>
            <h2>Provide Student Information</h2>
            <form>
                Id: <input type="text" onChange={e => setFormData({...formData, id:e.target.value})} /> <br/><br/>
                Name: <input type="text" onChange={e =>  setFormData({ ...formData, name: e.target.value})} /> <br/><br/>
                Email: <input type="text" onChange={e => setFormData({...formData, email: e.target.value})} /> <br/><br/>
                Phone: <input type="text" onChange={e => setFormData({...formData, phone: e.target.value})} /> <br/><br/>

                <button onClick={event => createStudent(event)}>Add</button>
            </form>
        </div>
    )
}
