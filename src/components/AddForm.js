import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { StudentContext } from "../contexts/StudentContext";
import { useContext, useState } from "react";


const AddForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const onInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };
const { name, email, address,phone } = newStudent;
const handleSubmit = (e) => {
  e.preventDefault();
  addStudent(name, email, address,phone);
};
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
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
          placeholder="Phone *"
          name="phone"
          value={phone}
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
