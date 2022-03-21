import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const EditForm = ({theStudent}) =>{

    const id = theStudent.id;

    const [first_name, setfirst_name] = useState(theStudent.first_name);
    const [last_name, setlast_name] = useState(theStudent.last_name);
    const [email, setEmail] = useState(theStudent.email);
    const [mobile, setMobile] = useState(theStudent.mobile);
    const [dob, setDob] = useState(theStudent.dob);
    const [address, setAddress] = useState(theStudent.address);

    const {updateStudent} = useContext(StudentContext);

    const updatedStudent ={ id, first_name, last_name, email, mobile, dob, address}

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
                    name="first_name"
                    value={first_name}
                    onChange={(e)=> setfirst_name(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Last Name *"
                    name="last_name"
                    value={last_name}
                    onChange={(e)=> setlast_name(e.target.value)}
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
                    type="date"
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