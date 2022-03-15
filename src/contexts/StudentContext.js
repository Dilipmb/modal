import { createContext, useState} from "react";


export const StudentContext = createContext()

const StudentContextProvider = (props) => {

    
    const [students, setStudents] = useState([
        {id:1,	firstName: 'Dilip', lastName: 'M B', email: 'Dilip@gmail.com', mobile: '9008297475' , dob: '1/3/2022', address: 'Bangalore'},
        {id:2,	firstName: 'Chandan', lastName: 'M B', email: 'Chandan@gmail.com', mobile: '9008297375' , dob: '2/3/2022', address: 'Mangalore'},
        {id:3,	firstName: 'Rohith', lastName: 'Kumar', email: 'Rohith@gmail.com', mobile: '8008297675' , dob: '3/3/2022', address: 'Bangalore'},
        {id:4,	firstName: 'Diwin', lastName: 'K Y', email: 'Diwin@gmail.com', mobile: '7808297475' , dob: '4/3/2022', address: 'Mangalore'},
    ])
    const [count, setCount] = useState(students.length+1)
    const addStudent = async(firstName, lastName, email, mobile, dob, address) => {
        await setCount(count+1);
        await setStudents([...students, {id:count, firstName, lastName, email, mobile, dob, address}]);
        console.log(students);
    }

    const deleteStudent = (id) =>{
        setStudents(students.filter(student => student.id !== id))

    }

    const updateStudent =(id, updatedStudent) => {
        setStudents(students.map((student) => student.id === id ? updatedStudent : student))
    }

    return (
        <StudentContext.Provider value={{students, addStudent, deleteStudent, updateStudent}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;