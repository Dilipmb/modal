import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const ViewStudent = ({theStudent}) =>{

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

        <div>
            <div>
                <p>Name: {firstName + ' '+ lastName}</p>
                 <p>Email: {email}</p>
                <p>mobile: {mobile}</p>
    <p>DOB: {dob}</p>
    <p>Address: {address}</p>
</div>
            
        </div>

     )
}

export default ViewStudent;