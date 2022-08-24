import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axios } from "axios";
import { api } from "../../config";

export const CadastrarCliente = () => {
  //Definindo objeto
  const [cliente, setCliente] = useState({
    nome: "",
    cidade: "",
    uf: "",
    nascimento: "",
  });

  //Dados a serem repassados ao novo cliente
  const valorInput = (evento) =>
    setCliente({ ...cliente, [evento.target.name]: evento.target.value });

  //Função para inserção de novo cliente
  const cadCliente = async (evento) => {
    evento.preventDefault(); //proteção dos dados do cliente

    //Cabeçalho representando os dados do conteúdo da página
    const headers = {
      "Content-type": "application/json",
    };

    await axios
      .post(api + "/cliente", cliente, { headers }) ///POSSIVEL ERRO
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
            <h1>Cadastrar Cliente</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-clientes"
              className="m-auto btn btn-outline-info btn-sm"
            >
              clientes
            </Link>
          </div>
        </div>
        <Form className="p-2" onSubmit={cadCliente}>
          <FormGroup className="p-2">
            <Label>Nome</Label>
            <Input
              name="nome"
              //placeholder="Digite o nome do cliente"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Cidade</Label>
            <Input
              name="cidade"
              //placeholder="Digite a cidade"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>UF</Label>
            <Input
              name="uf"
              //placeholder="Digite o UF"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Nascimento</Label>
            <Input
              name="nascimento"
              //placeholder="Digite a data de nascimento do cliente"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup className="d-flex">
            <Button type="submit" outline color="info">Cadastrar</Button>
            <Button type="reset" outline color="info">Limpar</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
