import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function App() {
    const [students,setStudents] = useState([])
    useEffect(() => {
        async function getAllStudents(){
            try {
                const students = await axios.get("http://127.0.0.1:8000/api/student/")
                console.log(students.data);
                setStudents(students.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getAllStudents()
    }, [])
    return (
        <div>
             <h1>Connect React JS to Django</h1>
     {
       students.map((student, i)=>{
         return (
           <h2 key={i}>{student.stuname} {student.email}</h2>
         )
       })
     }
        </div>
    )
}
