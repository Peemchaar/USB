import { useEffect, useState } from "react";
import AddStudent from "./addStudent";
import StudentsTable from "./studentsTable";
import '../styles/dashboard.scss';

const Dashboard = () => {
    const [fetchStudents, setFetchStudents] = useState(true);
    const [students, setStudents] = useState([]);

    function deleteStudent(index){
        const fetchStudents = localStorage.getItem("estudiantes")
        const parsedArray = fetchStudents ? JSON.parse(fetchStudents) : [];
        parsedArray.splice(index, 1);

        localStorage.setItem("estudiantes", JSON.stringify(parsedArray));
        setStudents(
            JSON.parse(localStorage.getItem("estudiantes"))
        );
    }

    useEffect(() => {
        const fetchStudentsData = async () => {
            setStudents(
                JSON.parse(localStorage.getItem("estudiantes"))
            );
            console.log("CONSULTA")
            console.log(JSON.parse(localStorage.getItem("estudiantes")))
            setFetchStudents(false)
        }

        if(fetchStudents){
            fetchStudentsData();
        }
    }, [fetchStudents])

    useEffect(() => {

    }, [students])

    

    return (
        <div className="dashboard-container flex flex-column justify-start">
            <div className="title">
                Registro de estudiante
            </div>
            <AddStudent submited={() => {setFetchStudents(true)}}/>
            <div className="title mt-5">
                Listado de estudiantes
            </div>


            
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
                    {students.map((item, index) => (
                        <tr key={index}>
                            <td>{item.nombre}</td>
                            <td>{item.cedula}</td>
                            <td>{item.email}</td>
                            <td>
                                <button
                                    className=" py-3 px-8 custom-btn flex items-center justify-center self-center"
                                    onClick={deleteStudent(index)}
                                >
                                    eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard