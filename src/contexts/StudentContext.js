import axios from "axios";
import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';

export const StudentContext = createContext()

const StudentContextProvider = (props) => {
  const navigate = useNavigate()

    const [students, setStudents] = useState([])
    useEffect(() => {
      
    axios.get('http://localhost:5000/api/v1/student').then((res)=>{
      setStudents(res.data.data);
    })

    }, [])
    
    const [count, setCount] = useState(students.length+1);


    const addStudent = async(first_name, last_name, email, mobile, dob, address) => {
      await axios.post('http://localhost:5000/api/v1/student',{first_name,last_name,email, mobile, dob, address}).then(
        async(res) =>{
          await axios.get('http://localhost:5000/api/v1/student').then(res=>{
            setStudents(res.data.data);
            navigate('/student');
          })}
      )  
    }

    const deleteStudent = (id) =>{
      console.log(id)
      axios.delete(`http://localhost:5000/api/v1/student/${id}`).then(
        async(res) =>{
          await axios.get('http://localhost:5000/api/v1/student').then(res=>{
            setStudents(res.data.data);
            navigate('/student');
          })}
      ) 

    }

    const updateStudent =(id, updatedStudent) => {
      console.log(id,updatedStudent);
      let{first_name,last_name,email,mobile,address,dob} =updatedStudent;
      axios.put(`http://localhost:5000/api/v1/student/${id}`,{first_name,last_name,email,mobile,address,dob}).then(
        async(res) =>{
          await axios.get('http://localhost:5000/api/v1/student').then(res=>{
            setStudents(res.data.data);
            navigate('/student');
          })}
      )
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