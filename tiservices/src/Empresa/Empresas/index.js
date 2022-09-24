import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../config";
import { Alert, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Empresas = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getEmpresas = async () => {
    await axios
      .get(api + "/empresas")
      .then((response) => {
        console.log(response.data.empresas);
        setData(response.data.empresas);
      })
      .catch(() => {
        setStatus({
            type: 'error',
            message: "Erro: sem conexão com a API."
        })
      });
  };

  useEffect(() => {
    getEmpresas();
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
            <h1>Lista de Empresas</h1>
          </div>
          <div className="p-2 m-auto">
            <Link to="/nova-empresa" className="btn btn-outline-info btn-sm">
              Nova Empresa
            </Link>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Adesão</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((empresas) => (
              <tr key={empresas.id}>
                <th scope="row">{empresas.id}</th>
                <td>{empresas.nome}</td>
                <td>{empresas.dataAdesao}</td>
                <td><Link to = "/pedidos-clientes" className="btn btn-outline-info btn-sm">Consultar</Link></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
