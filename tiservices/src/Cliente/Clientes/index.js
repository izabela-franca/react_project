import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../config";
import { Alert, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Clientes = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getClientes = async () => {
    await axios
      .get(api + "/clientes")
      .then((response) => {
        console.log(response.data.clientes);
        setData(response.data.clientes);
      })
      .catch(() => {
        setStatus({
            type: 'error',
            message: "Erro: sem conexão com a API."
        })
      });
  };

  //Excluindo clientes
  const delCliente = async (idCliente) => {
    console.log(idCliente)

    const headers = {
      'Content-type' : 'application/json'
    }

    await axios.delete(api+"/excluircliente/"+idCliente,
    {headers})
    .then((response) => {
      console.log(response.data.type);
      console.log(response.data.message)
      getClientes()
    })
    .catch(() => {
      setStatus({
        type: 'error',
        message : 'Erro: não foi possível conectar-se a API.'
      })
    })

  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div>
      <Container>
        <div className="p-2">
          {status.type === "error" ? (
            <Alert color="danger">{status.message}</Alert>
          ) : (
            ""
          )}
        </div>
        <div className="d-flex">
          <div>
            <h1>Lista de Clientes</h1>
          </div>
          <div className="p-2 m-auto">
            <Link to="/novo-cliente" className="btn btn-outline-info btn-sm">
              Novo Cliente
            </Link>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cidade</th>
              <th>UF</th>
              <th>Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((clientes) => (
              <tr key={clientes.id}>
                <th scope="row">{clientes.id}</th>
                <td>{clientes.nome}</td>
                <td>{clientes.cidade}</td>
                <td>{clientes.uf}</td>
                <td>{clientes.nascimento}</td>
                <td>
                    <span className="btn btn-outline-danger btn-sm" onClick={() => delCliente(clientes.id)}>Excluir</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
