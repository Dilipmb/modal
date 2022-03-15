import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const AddForm = () =>{

    const {addStudent} = useContext(StudentContext);

    const [newStudent, setNewStudent] = useState({
        firstName:"",lastName:"", email:"", mobile:"", dob:"", address:""
    });

    const onInputChange = (e) => {
        setNewStudent({...newStudent,[e.target.name]: e.target.value})
    }

    const {firstName, lastName, email, mobile, dob, address} = newStudent;

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(firstName, lastName, email, mobile, dob, address);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    value={firstName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    value={lastName}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="mobile"
                    name="mobile"
                    value={mobile}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="dob"
                    name="dob"
                    value={dob}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            
            <Button variant="success" type="submit" block>
                Add New Student
            </Button>
        </Form>

     )
}

export default AddForm;