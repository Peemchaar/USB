import { useEffect, useRef, useState } from "react";
import { TextField } from '@mui/material';

const AddStudent = (props) => {

    const formRef = useRef();
    const [form, setForm] = useState({ 
        nombre: '',
        email: '',
        cedula: '',
    })

    const handlechange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchStudents = localStorage.getItem("estudiantes")
        const parsedArray = fetchStudents ? JSON.parse(fetchStudents) : [];
        const newItem = {
            'nombre': form.nombre,
            'email': form.email,
            'cedula': form.cedula
        }
        const newArray = [...parsedArray, newItem];

        localStorage.setItem("estudiantes", JSON.stringify(newArray));

        props.submited()
    }

    useEffect(() => {
       
    }, [])

    return (
        <form 
            ref={formRef}
            className='mt-3 col-12 gap-8 register-form flex flex-col'
            component='form'
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <div className="flex justify-between gap-8">
                <TextField
                    fullWidth
                    id="nombre"
                    name="nombre"
                    label="Nombre y Apellido" 
                    variant="standard"
                    margin="normal"
                    required
                    onChange={handlechange}
                />
                <TextField
                    fullWidth
                    id="cedula"
                    name="cedula"
                    label="Cedula de identidad" 
                    variant="standard"
                    margin="normal"
                    required
                    onChange={handlechange}
                />
            </div>
            <div className="flex justify-between gap-8">
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Correo Electronico" 
                    variant="standard"
                    margin="normal"
                    required
                    onChange={handlechange}
                />
                <button
                    type="submit"
                    className=" py-3 px-8 custom-btn flex items-center justify-center primary self-center"
                >
                    Agregar estudiante
                </button>

            </div>
            
        </form>
        

    )
}

export default AddStudent