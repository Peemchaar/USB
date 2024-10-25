import { useEffect, useState } from "react";
import AddStudent from "./addStudent";
import StudentsTable from "./studentsTable";
import '../styles/dashboard.scss';

const Dashboard = () => {
    const [fetchStudents, setFetchStudents] = useState(true);
    
    useEffect(() => {
        if(fetchStudents){
            setFetchStudents(false)
        }
    }, [fetchStudents])

    return (
        <div className="dashboard-container flex flex-column justify-start">
            <div className="title">
                Registro de estudiante
            </div>
            <AddStudent submited={() => {setFetchStudents(true)}}/>
            <div className="title mt-5">
                Listado de estudiantes
            </div>
            <StudentsTable fetch={fetchStudents}/>
        </div>
    )
}

export default Dashboard