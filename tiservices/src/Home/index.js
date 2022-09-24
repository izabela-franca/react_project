import {Container} from 'reactstrap';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <Container>
                <div className='d-flex'>
                    <div className='m-auto p-2'>
                        <h1>Seja Bem-Vindo</h1>
                    </div>
                    <div className='p-2'>
                        <Link to = "/listar-cartoes" className='m-auto btn btn-outline-info btn-sm'>Cartões</Link>
                        <Link to = "/listar-clientes" className='m-auto btn btn-outline-info btn-sm'>Clientes</Link>
                        <Link to = "/listar-empresas" className='m-auto btn btn-outline-info btn-sm'>Empresas</Link>
                        <Link to = "/listar-promocoes" className='m-auto btn btn-outline-info btn-sm'>Promoções</Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}