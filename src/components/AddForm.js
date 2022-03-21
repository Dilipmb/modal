import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { StudentContext } from "../contexts/StudentContext";
import { useContext, useState } from "react";


const AddForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [newStudent, setNewStudent] = useState({
    first_name: "",
    last_name:"",
    email: "",
    address: "",
    mobile: "",
    dob:""
  });
  const onInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };
const { first_name,last_name, email, mobile ,dob ,address} = newStudent;
const handleSubmit = (e) => {
  e.preventDefault();
  addStudent(first_name,last_name, email, mobile ,dob ,address);
};
  return (
    <Form onSubmit={handleSubmit} data-testid="add-1">
      <Form.Group >
        <Form.Control
          type="text"
          placeholder="First Name *"
          name="first_name"
          value={first_name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Last Name *"
          name="last_name"
          value={last_name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          placeholder="DOB"
          name="dob"
          value={dob}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="textarea"
          placeholder="address *"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          rows={6}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="mobile *"
          name="mobile"
          value={mobile}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Button
        style={{ backgroundColor: "green" }}
        variant="Success"
        type="submit"
        block
      >
        Add new Student
      </Button>
    </Form>
  );
};

export default AddForm;
