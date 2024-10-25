import { useEffect, useRef, useState } from "react";

const StudentsTable = ({students,deleted}) => {

    const [localStudents, setStudents] = useState(students);

    function deleteStudent(index){
        const fetchStudents = localStorage.getItem("estudiantes")
        const parsedArray = fetchStudents ? JSON.parse(fetchStudents) : [];
        parsedArray.splice(index, 1);

        localStorage.setItem("estudiantes", JSON.stringify(parsedArray));
        deleted()
    }

    useEffect(() => {
       
    }, [localStudents])

    return (
        <div>WORKS</div>
        
    )
}

export default StudentsTable