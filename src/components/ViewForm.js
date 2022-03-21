import { Form, Button } from "react-bootstrap"

import {StudentContext} from '../contexts/StudentContext';
import {useContext, useState} from 'react';



const ViewForm = ({theStudent}) =>{

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

        <div>
            <div>
                <p>Name: {first_name + ' '+ last_name}</p>
                 <p>Email: {email}</p>
                <p>mobile: {mobile}</p>
    <p>DOB: {dob}</p>
    <p>Address: {address}</p>
</div>
            
        </div>

     )
}

export default ViewForm;