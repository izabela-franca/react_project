import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axios } from "axios";
import { api } from "../../config";

export const CadastrarEmpresa = () => {
  //Definindo objeto
  const [empresa, setEmpresa] = useState({
    nome: "",
    dataAdesao: "",
  });


  const valorInput = (evento) =>
    setEmpresa({ ...empresa, [evento.target.name]: evento.target.value });

  //Função para inserção de novo cliente
  const cadEmpresa = async evento => {
    evento.preventDefault(); //proteção dos dados do cliente

    //Cabeçalho representando os dados do conteúdo da página
    const headers = {
      "Content-type": "application/json",
    };

    await axios
      .post(api + "/empresas", empresa, { headers }) 
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
            <h1>Cadastrar Empresa</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-empresas"
              className="m-auto btn btn-outline-info btn-sm"
            >
              Empresas
            </Link>
          </div>
        </div>
        <Form className="p-2" onSubmit={cadEmpresa}>
          <FormGroup className="p-2">
            <Label>Nome da Empresa</Label>
            <Input
              name="nome"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Data de Adesão</Label>
            <Input
              name="dataAdesao"
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
