import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUsuario() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUsuario();
    }, []);

    function getUsuario() {
        axios.get(`http://localhost:80/apiTF/usuario/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const nombre = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [nombre]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/apiTF/usuario/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h1>Editar usuario</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Nombre: </label>
                            </th>
                            <td>
                                <input value={inputs.nombre} type="text" name="nombre" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Contraseña: </label>
                            </th>
                            <td> 
                                <input value={inputs.contrasegna} type="text" name="contrasegna" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
