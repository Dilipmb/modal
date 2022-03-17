import React, { useContext, useState, useEffect } from "react";
import Student from "./Student";
import { StudentContext } from "../contexts/StudentContext";
import { Modal, Button } from "react-bootstrap";
import { CSVLink, CSVDownload } from "react-csv";
import AddForm from "./AddForm";

const StudentList = ({ logout }) => {
  const { students,handleFileUpload } = useContext(StudentContext);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [students]);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage Students</h2>
          </div>
          <div className="col-sm-6">
          <input onClick={handleFileUpload} className='btn btn-info ' accept='.csv,.xlsx,.xls' type='file' ></input>
            <Button
              onClick={handleShow}
              className="btn btn-success me-5 my-1"
              data-toggle="modal"
            >
              <span>Add Student</span>
            </Button>
            <CSVLink className="btn btn-info my-1 me-5"data={students}>Download me</CSVLink>

            <button className="btn btn-danger my-1 me-5" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>DOB</th>
            <th>Address</th>
            <th>Actions</th>
					</tr>
				</thead>
				<tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Student student={student} />
              
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StudentList;
