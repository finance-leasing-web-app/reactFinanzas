import {BrowserRouter, Routes , Route ,Link} from 'react-router-dom';
import './App.css';
import './Components/TBDatos';
import './Components/CrearUsuario'
import TBDatos from './Components/TBDatos';
import TBResultados from './Components/TBResultados';
import TBDetalles from './Components/TBDetalles';
import CrearUsuario from './Components/CrearUsuario';
import EditarUsuario from './Components/EditarUsuario';
import ListarUsuario from './Components/ListarUsuario';
import IndexMA from './Components/IndexMA';
import LogIn from './Components/LogIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LogIn />}/>
          <Route index element={<IndexMA />}/>
          {/* <Route index element={<ListarUsuario />}/> */}
          <Route path='usuario/listar' element={<ListarUsuario />}/>
          <Route path='usuario/crear' element={<CrearUsuario />}/>
          <Route path='usuario/:id/edit' element={<EditarUsuario />}/>
          <Route path='tabla/datos' element={<TBDatos />}/>
          <Route path='tabla/resultados' element={<TBResultados />}/>
          <Route path='tabla/detalles' element={<TBDetalles />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
