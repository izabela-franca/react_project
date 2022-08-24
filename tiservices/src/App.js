import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './Home'
import {Clientes} from './Cliente/Clientes'
import {Menu} from './Menu'
import {CadastrarCliente} from './Cliente/CadastrarCliente'

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/listar-clientes' element={<Clientes/>}/>
        <Route path= '/novo-cliente' element={<CadastrarCliente/>}/>
      </Routes>
    </div>
  );
}

export default App;
