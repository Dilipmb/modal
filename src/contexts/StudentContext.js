import { createContext, useEffect, useState} from "react";
import * as XLSX from 'xlsx';

export const StudentContext = createContext()

const StudentContextProvider = (props) => {

    const [students, setStudents] = useState([
        {id:1,	firstName: 'Dilip', lastName: 'M B', email: 'Dilip@gmail.com', mobile: '9008297475' , dob: '1/3/2022', address: 'Bangalore'},
        {id:2,	firstName: 'Chandan', lastName: 'M B', email: 'Chandan@gmail.com', mobile: '9008297375' , dob: '2/3/2022', address: 'Mangalore'},
        {id:3,	firstName: 'Rohith', lastName: 'Kumar', email: 'Rohith@gmail.com', mobile: '8008297675' , dob: '3/3/2022', address: 'Bangalore'},
        {id:4,	firstName: 'Diwin', lastName: 'K Y', email: 'Diwin@gmail.com', mobile: '7808297475' , dob: '4/3/2022', address: 'Mangalore'},
    ])
    const [count, setCount] = useState(students.length+1);


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
    const processData = (dataString) => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]"(?:(?:[^"]"){2})[^"]$)/);
    
        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
          const row = dataStringLines[i].split(/,(?![^"]"(?:(?:[^"]"){2})[^"]$)/);
          if (headers && row.length === headers.length) {
            const obj = {};
            for (let j = 0; j < headers.length; j++) {
              let d = row[j];
              if (d.length > 0) {
                if (d[0] === '"') d = d.substring(1, d.length - 1);
                if (d[d.length - 1] === '"') d = d.substring(d.length - 2, 1);
              }
              if (headers[j]) {
                obj[headers[j]] = d;
              }
            }
            // remove the blank rows
            if (Object.values(obj).filter((x) => x).length > 0) {
              list.push(obj);
            }
          }
        }
    
        console.log(list);
        const newStudent = [...students, ...list];
        setStudents(newStudent);
      };
    
      const handleFileUpload = (e) => {
        const file = e.target.files[0];
        console.log(e.target);
        const reader = new FileReader();
        reader.onload = (evt) => {
          /* Parse data */
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: 'binary' });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
          processData(data);
        };
        reader.readAsBinaryString(file);
      };
    return (
        <StudentContext.Provider value={{students, addStudent, deleteStudent, updateStudent,handleFileUpload}}>
            {props.children}
        </StudentContext.Provider>
    )
}

export default StudentContextProvider;