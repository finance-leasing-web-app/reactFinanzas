import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CrearUsuario = () => {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [contrasegna, setContrasegna] = useState([]);
    const [contrasegna2, setContrasegna2] = useState([]);


    const handleChange = (event) => {
        const nombre = event.target.name;
        const value = event.target.value;
        if(event.target.name == "contrasegna")
        {
            setContrasegna(event.target.value);
        }
        if(event.target.name == "contrasegna_")
        {
            setContrasegna2(event.target.value);
        }
        setInputs(values => ({...values, [nombre]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        if(contrasegna == contrasegna2)
        {
            axios.post('http://localhost:80/apiTF/usuario/crear', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
            }); 
        }
        else
        {
            window.alert("Password does not match!");
        }
          
    }
    return (  
        <div>
                <div class="container">
                    <div class="screen">
                        <div class="screen__content">                              
                            <form class="login" onSubmit={handleSubmit}>
                            <h2>Registrar Usuario</h2>
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input class="login__input" placeholder="Nombre" type="text" name="nombre" onChange={handleChange}></input>
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" class="login__input" placeholder="Contraseña" name="contrasegna" onChange={handleChange}></input>
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input type="password" class="login__input" placeholder="Repetita Contraseña" name="contrasegna_" onChange={handleChange}></input>
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text">Crear Usuario</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>	
                                <Link to="/">		
                                <button class="button register">
                                    <span class="button__text">Ya tiene cuenta?</span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>	
                                </Link>	
                            </form>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>		
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>		
                    </div>
                </div>
        </div>
        
    );
}
 
export default CrearUsuario;