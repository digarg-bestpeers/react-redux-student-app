import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addStudent, editStudent} from "../actions/studentAction" 

const initialValues = { id: '', name: '', email: '', phone: ''};

export const StudentForm = () => {
    const [formData, setFormData] = useState(initialValues);
    const dispatch = useDispatch();
    const student = useSelector(state => state.student)

    useEffect( () => {
        if(student!==null){
            console.log(student.id)
            setFormData(student)
        }
    }, [student])

    const createStudent = (event) => {
        event.preventDefault();
        dispatch(addStudent(formData))
        setFormData(initialValues)
    }

    const updateStudent = (event) => {
        event.preventDefault();
        dispatch(editStudent(formData))
        setFormData(initialValues)
    }
    
    return (
        <div>
            <h2>Provide Student Information</h2>
            <form>
                Id: <input type="text" value={formData.id} onChange={e => setFormData({...formData, id:e.target.value})} /> <br/><br/>
                Name: <input type="text" value={formData.name} onChange={e =>  setFormData({ ...formData, name: e.target.value})} /> <br/><br/>
                Email: <input type="text" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /> <br/><br/>
                Phone: <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} /> <br/><br/>

                <button onClick={event => createStudent(event)}>Add</button> <br/><br/>
                <button onClick={event => updateStudent(event)}>Update</button>
            </form>
        </div>
    )
}
