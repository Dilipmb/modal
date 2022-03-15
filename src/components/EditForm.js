import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const EditForm = ({theStudent}) =>{

    const id = theStudent.id;

    const [firstName, setFirstName] = useState(theStudent.firstName);
    const [lastName, setLastName] = useState(theStudent.lastName);
    const [email, setEmail] = useState(theStudent.email);
    const [mobile, setMobile] = useState(theStudent.mobile);
    const [dob, setDob] = useState(theStudent.dob);
    const [address, setAddress] = useState(theStudent.address);

    const {updateStudent} = useContext(StudentContext);

    const updatedStudent ={ id, firstName, lastName, email, mobile, dob, address}

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(id, updatedStudent)
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e)=> setMobile(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="dob"
                    name="dob"
                    value={dob}
                    onChange={(e)=> setDob(e.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="Address"
                    rows={3}
                    name="address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                />
            </Form.Group>
            
            <Button variant="success" type="submit" block>
                Edit Student
            </Button>
        </Form>

     )
}

export default EditForm;