import { useContext,useState, useEffect } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import ViewStudent from "./viewStudent";


const Student = ({student}) => {

    const {deleteStudent} = useContext(StudentContext)
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    

    const handleShow  = () => setShow(true);
    const handleShow1  = () => setShow1(true);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);

    useEffect(() => {
        handleClose();
        handleClose1();
    }, [student])



    return (
        < >
            <td>{student.firstName}</td>
			<td>{student.lastName}</td>
			<td>{student.email}</td>
			<td>{student.mobile}</td>
            <td>{student.dob}</td>
            <td>{student.address}</td>
			<td>
            <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
			<button onClick={() => deleteStudent(student.id)}  className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
            <button onClick={handleShow1}  className="btn text-info btn-act" data-toggle="modal1"><i class="material-icon"  data-toggle="tooltip" title="view">View</i></button>
			</td>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Student
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <EditForm theStudent={student}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close Button
                    </Button>
                </Modal.Footer>
                
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        View Student
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ViewStudent theStudent={student}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close Button
                    </Button>
                </Modal.Footer>
            </Modal>

        </> 
    )
}

export default Student;