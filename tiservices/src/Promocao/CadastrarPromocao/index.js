import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axios } from "axios";
import { api } from "../../config";

export const CadastrarPromocao = () => {
  //Definindo objeto
  const [promocao, setPromocao] = useState({
    nome: "",
    descrição: "",
    validade: ""
  });


  const valorInput = (evento) =>
    setPromocao({ ...promocao, [evento.target.name]: evento.target.value });

  const cadPromocao = async evento => {
    evento.preventDefault(); //proteção dos dados do cliente

    //Cabeçalho representando os dados do conteúdo da página
    const headers = {
      "Content-type": "application/json",
    };

    await axios
      .post(api + "/promocoes", promocao, { headers }) 
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
            <h1>Cadastrar Promoção</h1>
          </div>
          <div className="p-2">
            <Link
              to="/listar-promocoes"
              className="m-auto btn btn-outline-info btn-sm"
            >
              Promoções
            </Link>
          </div>
        </div>
        <Form className="p-2" onSubmit={cadPromocao}>
          <FormGroup className="p-2">
            <Label>Nome da Promoção</Label>
            <Input
              name="nome"
              type="text"
              onChange={valorInput}
            />
          </FormGroup>
          <FormGroup>
            <Label>Descrição</Label>
            <Input
              name="descricao"
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
