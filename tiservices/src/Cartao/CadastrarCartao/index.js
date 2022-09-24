import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axios } from "axios";
import { api } from "../../config";

export const CadastrarCartao = () => {
  //Definindo objeto
  const [cartao, setCartao] = useState({
    dataCartao: "",
    validade: "",
  });

  //Dados a serem repassados ao novo cliente
  const valorInput = (evento) =>
    setCartao({ ...cartao, [evento.target.name]: evento.target.value });

  //Função para inserção de novo cliente
  const cadCartao = async evento => {
    evento.preventDefault(); //proteção dos dados do cliente

    //Cabeçalho representando os dados do conteúdo da página
    const headers = {
      "Content-type": "application/json",
    };

    await axios
      .post(api + "/cartoes", cartao, { headers }) 
      .then((response) => {
        console.log(response.data.message);
      })
      .catch(() => {
        console.log("Erro: sem conexão com a API.");
      });
  };

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="m-auto p-2">
            <h1>Cadastrar Cartão</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-cartoes"
              className="m-auto btn btn-outline-info btn-sm"
            >
              Cartões
            </Link>
          </div>
        </div>
        <Form className="p-2" onSubmit={cadCartao}>
          <FormGroup className="p-2">
            <Label>Data do Cartão</Label>
            <Input
              name="dataCartao"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Validade</Label>
            <Input
              name="validade"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup className="d-flex">
            <Button type="submit" outline color="info">
              Cadastrar
            </Button>
            <Button type="reset" outline color="info">
              Limpar
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
