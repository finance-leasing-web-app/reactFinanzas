import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUsuario() {

    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        getUsuarios();
    }, []);

    function getUsuarios() {
        axios.get('http://localhost:80/apiTF/usuarios/').then(function(response) {
            console.log(response.data);
            setUsuarios(response.data);
        });
    }

    const deleteUsuario = (id) => {
        axios.delete(`http://localhost:80/apiTF/usuario/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsuarios();
        });
    }
    return (
        <div>
            {/* cambiar */}
            <h1>Lista de Usuarios</h1>
            <table>
                <thead>
                    {/* cambiar */}
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Contraseña</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario, key) =>
                        <tr key={key}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.contrasegna}</td>
                            <td>
                                <Link to={`usuario/${usuario.id}/edit`} style={{marginRight: "10px"}}>Editar</Link>
                                <button onClick={() => deleteUsuario(usuario.id)}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
