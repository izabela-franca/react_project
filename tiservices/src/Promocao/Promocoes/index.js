import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../config";
import { Alert, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Promocoes = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getPromocoes = async () => {
    await axios
      .get(api + "/promocoes")
      .then((response) => {
        console.log(response.data.promocoes);
        setData(response.data.promocoes);
      })
      .catch(() => {
        setStatus({
            type: 'error',
            message: "Erro: sem conexão com a API."
        })
      });
  };

    //Excluindo promoção
    const delPromocao = async (idpromocao) => {
      console.log(idpromocao)
  
      const headers = {
        'Content-type' : 'application/json'
      }
  
      await axios.delete(api+"/excluircliente/"+idpromocao,
      {headers})
      .then((response) => {
        console.log(response.data.type);
        console.log(response.data.message)
        getPromocoes()
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message : 'Erro: não foi possível conectar-se a API.'
        })
      })
  
    }

  useEffect(() => {
    getPromocoes();
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
            <h1>Lista de Promoções</h1>
          </div>
          <div className="p-2 m-auto">
            <Link to="/nova-promocao" className="btn btn-outline-info btn-sm">
              Nova Promoção
            </Link>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((promocoes) => (
              <tr key={promocoes.id}>
                <th scope="row">{promocoes.id}</th>
                <td>{promocoes.nome}</td>
                <td>{promocoes.descricao}</td>
                <td>{promocoes.validade}</td>
                <td>
                    <span className="btn btn-outline-danger btn-sm" onClick={() => delPromocao(promocoes.id)}>Excluir</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
