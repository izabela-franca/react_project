import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../config";
import { Alert, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Cartoes = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const getCartoes = async () => {
    await axios
      .get(api + "/cartoes")
      .then((response) => {
        console.log(response.data.cartoes);
        setData(response.data.cartoes);
      })
      .catch(() => {
        setStatus({
            type: 'error',
            message: "Erro: sem conexão com a API."
        })
      });
  };

    //Excluindo cartão
    const delCartao = async (idCartao) => {
      console.log(idCartao)
  
      const headers = {
        'Content-type' : 'application/json'
      }
  
      await axios.delete(api+"/excluircartao/"+idCartao, 
      {headers})
      .then((response) => {
        console.log(response.data.type);
        console.log(response.data.message)
        getCartoes()
      })
      .catch(() => {
        setStatus({
          type: 'error',
          message : 'Erro: não foi possível conectar-se a API.'
        })
      })
  
    }

  useEffect(() => {
    getCartoes();
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
            <h1>Lista de Cartões</h1>
          </div>
          <div className="p-2 m-auto">
            <Link to="/novo-cartao" className="btn btn-outline-info btn-sm">
              Novo Cartão
            </Link>
          </div>
        </div>
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Data Cartão</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((cartoes) => (
              <tr key={cartoes.id}>
                <th scope="row">{cartoes.id}</th>
                <td>{cartoes.dataCartao}</td>
                <td>{cartoes.validade}</td>
                <td>
                <span className="btn btn-outline-danger btn-sm" onClick={() => delCartao(cartoes.id)}>Excluir</span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
