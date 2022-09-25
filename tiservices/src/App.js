import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Home} from './Home'
import {Menu} from './Menu'
import {Cartoes} from './Cartao/Cartoes';
import {CadastrarCartao} from './Cartao/CadastrarCartao';
import {Clientes} from './Cliente/Clientes'
import {CadastrarCliente} from './Cliente/CadastrarCliente'
import {Empresas} from './Empresa/Empresas';
import {CadastrarEmpresa} from './Empresa/CadastrarEmpresa';
import {Promocoes} from './Promocao/Promocoes';
import {CadastrarPromocao} from './Promocao/CadastrarPromocao';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path= '/listar-cartoes' element={<Cartoes/>}/>
        <Route path= '/novo-cartao' element={<CadastrarCartao/>}/>
        <Route path = '/listar-clientes' element={<Clientes/>}/>
        <Route path= '/novo-cliente' element={<CadastrarCliente/>}/>
        <Route path= '/listar-empresas' element={<Empresas/>}/>
        <Route path= '/nova-empresa' element={<CadastrarEmpresa/>}/>
        <Route path= '/listar-promocoes' element={<Promocoes/>}/>
        <Route path= '/nova-promocao' element={<CadastrarPromocao/>}/>
      </Routes>
    </div>
  );
}

export default App;
