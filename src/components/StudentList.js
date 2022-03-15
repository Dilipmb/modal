import { Button, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import AddForm from "./AddForm";
import Student from "./Student";

const StudentList = () =>{

    const {students} = useContext(StudentContext);

    const [show, setShow] = useState(false);

    const handleShow  = () => setShow(true);
    const handleClose = () => setShow(false);

    useEffect(() => {
        handleClose()
    }, [students])



    return(
        <>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Students</b></h2>
					</div>
					<div className="col-sm-6">
						<Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Student</span></Button>					
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
					
                    {
                        students.map(student => (
                            <tr key={student.id}>
                                <Student student={student}/>
                            </tr>
                        ))
                    }
                        
                   
                </tbody>
            </table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Student
                    </Modal.Title>
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
    )
}

export default StudentList;