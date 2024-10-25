import { useEffect, useRef, useState } from "react";

const StudentsTable = ({fetch}) => {
    const [fetchStudents, setFetchStudents] = useState(false);
    const [students, setStudents] = useState([]);

    function deleteStudent(index){
        const fetchStudents = localStorage.getItem("estudiantes")
        const parsedArray = fetchStudents ? JSON.parse(fetchStudents) : [];
        parsedArray.splice(index, 1);

        localStorage.setItem("estudiantes", JSON.stringify(parsedArray));
        setFetchStudents(true)
    }

    useEffect(() => {
        
        const fetchStudentsData = async () => {
            setStudents(
                JSON.parse(localStorage.getItem("estudiantes"))
            );
            
            setFetchStudents(false)
        }

        if(fetchStudents){
            fetchStudentsData();
        }
    }, [fetchStudents])

    useEffect(() => {
        if(fetch){
            setFetchStudents(true)
        } 
    }, [fetch])


    return (
        <table className="tabla">
            <thead>
                <tr>
                    <th>Nombre y apellido</th>
                    <th>Cedula</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {students? students.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nombre}</td>
                        <td>{item.cedula}</td>
                        <td>{item.email}</td>
                        <td>
                            <button
                                className=" py-3 px-8 custom-btn flex items-center justify-center self-center"
                                onClick={() => {deleteStudent(index)}}
                            >
                                eliminar
                            </button>
                        </td>
                    </tr>
                )) : null}
            </tbody>
        </table>
        
    )
}

export default StudentsTable